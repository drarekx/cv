// Keeps the CSP `script-src` in vercel.json in sync with the inline scripts in dist/.
//
// Every inline executable script (no `src`) is allowed by its SHA-256 hash. `'unsafe-inline'`
// stays only as a fallback for very old browsers: any browser that understands hashes (CSP2+)
// ignores `'unsafe-inline'` when a hash is present. Inline event handlers (`onclick=`) and
// `javascript:` URLs can't be covered by hashes, so they make this check fail.
//
//   node scripts/csp.mjs          check: exit 1 if the hashes in vercel.json don't match dist/
//   node scripts/csp.mjs --write  rewrite the script-src directive in vercel.json

import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const distDir = join(root, 'dist');
const vercelPath = join(root, 'vercel.json');
const write = process.argv.includes('--write');

const EXECUTABLE_TYPES = new Set(['', 'text/javascript', 'application/javascript', 'module', 'speculationrules']);

function htmlFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...htmlFiles(path));
    else if (entry.name.endsWith('.html')) out.push(path);
  }
  return out;
}

function attr(attrs, name) {
  const m = attrs.match(new RegExp(`(?:^|\\s)${name}(?:\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+)))?(?=\\s|/|$)`, 'i'));
  if (!m) return undefined;
  return (m[1] ?? m[2] ?? m[3] ?? '').trim();
}

const sha = (text) => `'sha256-${createHash('sha256').update(text, 'utf8').digest('base64')}'`;

// hash -> files that contain it
const hashes = new Map();
const problems = [];

for (const file of htmlFiles(distDir)) {
  const html = readFileSync(file, 'utf8');
  const rel = relative(root, file);

  // Inline scripts. Their bodies are removed before scanning tags, so script text can't false-positive.
  const scriptRe = /<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi;
  for (const [, attrs, body] of html.matchAll(scriptRe)) {
    if (attr(attrs, 'src') !== undefined) continue;
    const type = (attr(attrs, 'type') ?? '').toLowerCase();
    if (!EXECUTABLE_TYPES.has(type)) continue;
    const h = sha(body);
    if (!hashes.has(h)) hashes.set(h, new Set());
    hashes.get(h).add(rel);
  }

  // Inline event handlers and javascript: URLs, only inside tags (not text, not script/style bodies).
  const stripped = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/(<script\b[^>]*>)[\s\S]*?<\/script\s*>/gi, '$1')
    .replace(/(<style\b[^>]*>)[\s\S]*?<\/style\s*>/gi, '$1');
  const tagRe = /<[a-z][^\s/>]*((?:\s+[^\s=>"'/]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?|\s*\/)*)\s*>/gi;
  const attrRe = /([^\s=>"'/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  for (const [tag, attrs] of stripped.matchAll(tagRe)) {
    for (const [, name, v1, v2, v3] of attrs.matchAll(attrRe)) {
      const value = (v1 ?? v2 ?? v3 ?? '').trim();
      if (/^on[a-z]+$/i.test(name)) problems.push(`${rel}: inline event handler in ${tag.slice(0, 120)}`);
      if (/^(?:href|src|action|formaction|xlink:href)$/i.test(name) && /^javascript:/i.test(value.replace(/[\s\u0000-\u001f]/g, ''))) {
        problems.push(`${rel}: javascript: URL in ${tag.slice(0, 120)}`);
      }
    }
  }
}

if (problems.length) {
  console.error('CSP: hashes cannot cover inline event handlers or javascript: URLs:');
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}

const computed = [...hashes.keys()].sort();

const raw = readFileSync(vercelPath, 'utf8');
const config = JSON.parse(raw);
const csp = config.headers
  ?.find((h) => h.source === '/(.*)')
  ?.headers?.find((h) => h.key.toLowerCase() === 'content-security-policy')?.value;
if (!csp) {
  console.error('CSP: no Content-Security-Policy header for source "/(.*)" in vercel.json');
  process.exit(1);
}
const directive = csp.split(';').map((d) => d.trim()).find((d) => /^script-src\s/i.test(d));
if (!directive) {
  console.error('CSP: no script-src directive in vercel.json');
  process.exit(1);
}
const current = new Set(directive.split(/\s+/).filter((t) => t.startsWith("'sha256-")));

if (write) {
  const next = ['script-src', "'self'", ...computed, "'inline-speculation-rules'", "'unsafe-inline'", 'https://vercel.live'].join(' ');
  if (next === directive) {
    console.log(`CSP: vercel.json already up to date (${computed.length} inline script hashes).`);
    process.exit(0);
  }
  if (raw.split(directive).length !== 2) {
    console.error('CSP: script-src directive not found exactly once in the raw vercel.json text');
    process.exit(1);
  }
  writeFileSync(vercelPath, raw.replace(directive, () => next));
  console.log(`CSP: wrote ${computed.length} inline script hashes to vercel.json.`);
  process.exit(0);
}

const missing = computed.filter((h) => !current.has(h));
const stale = [...current].filter((h) => !hashes.has(h)).sort();

if (missing.length || stale.length) {
  console.error('CSP: script-src hashes in vercel.json do not match the inline scripts in dist/.');
  for (const h of missing) console.error(`  missing ${h}  (${[...hashes.get(h)].join(', ')})`);
  for (const h of stale) console.error(`  stale   ${h}`);
  console.error('Run `npm run csp` to update vercel.json.');
  process.exit(1);
}

console.log(`CSP: OK, ${computed.length} inline script hashes in vercel.json match dist/.`);
