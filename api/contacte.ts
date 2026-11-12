/**
 * Contact form → Gmail.
 *
 * A Vercel Function, independent of Astro: the site stays fully static and only this file runs
 * on the server. Vercel picks up every file under /api at the project root.
 *
 * Environment variables (Vercel → Settings → Environment Variables, never in the repo):
 *   GMAIL_USER          the Gmail account that sends, e.g. someone@gmail.com
 *   GMAIL_APP_PASSWORD  a Google *app password* for that account (16 letters), not the account password
 *   CONTACT_TO          optional; where messages arrive. Defaults to GMAIL_USER
 *
 * The form posts multipart/urlencoded data. With JavaScript it asks for JSON and shows the result
 * in place; without it, the browser gets a small HTML page back.
 */
import nodemailer from 'nodemailer';

export interface ContactFields {
  nom: string;
  email: string;
  telefon: string;
  missatge: string;
}

type Parsed =
  | { ok: true; fields: ContactFields }
  | { ok: true; spam: true }
  | { ok: false; error: string };

const MAX_BODY_BYTES = 20_000;
/** Humans take longer than this to fill the form; bots usually post instantly. */
const MIN_FILL_MS = 3_000;
const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]{2,}$/;

const ALLOWED_ORIGINS = new Set(['https://www.gerardfortea.com', 'https://gerardfortea.com']);
/** Only this project's own preview deployments, not any *.vercel.app site. */
const PREVIEW_ORIGIN = /^https:\/\/cv-[a-z0-9-]+-mrdarek\.vercel\.app$/;

export function isAllowedOrigin(origin: string, env: NodeJS.ProcessEnv = process.env) {
  if (ALLOWED_ORIGINS.has(origin) || PREVIEW_ORIGIN.test(origin)) return true;
  if (env.VERCEL_URL && origin === `https://${env.VERCEL_URL}`) return true;
  if (env.VERCEL_BRANCH_URL && origin === `https://${env.VERCEL_BRANCH_URL}`) return true;
  return env.VERCEL_ENV !== 'production' && /^http:\/\/localhost:\d+$/.test(origin);
}

/**
 * One line, no control or bidirectional-override characters: these values end up in mail headers
 * (subject, reply-to name), and bidi overrides can disguise text.
 */
const oneLine = (v: string) =>
  v.replace(/[\u0000-\u001f\u007f\u200e\u200f\u202a-\u202e\u2066-\u2069]+/g, ' ').replace(/\s+/g, ' ').trim();

export function parseContact(form: FormData, now = Date.now()): Parsed {
  const get = (k: string) => {
    const v = form.get(k);
    return typeof v === 'string' ? v : '';
  };

  // Honeypot: hidden from people, bots fill every field. Pretend it worked.
  if (get('web').trim() !== '') return { ok: true, spam: true };
  const startedAt = Number(get('t'));
  // `t` is set by the page's script; a form posted without JavaScript has none, and that's fine.
  if (startedAt > 0 && now - startedAt < MIN_FILL_MS) return { ok: true, spam: true };

  const nom = oneLine(get('nom'));
  const email = oneLine(get('email'));
  const telefon = oneLine(get('telefon'));
  const missatge = get('missatge').replace(/\r\n?/g, '\n').trim();

  if (nom.length < 2 || nom.length > 100) return { ok: false, error: 'Escriu el teu nom.' };
  if (email.length > 200 || !EMAIL_RE.test(email)) return { ok: false, error: 'Revisa l\'adreça de correu.' };
  if (telefon.length > 30) return { ok: false, error: 'El telèfon és massa llarg.' };
  if (missatge.length < 10) return { ok: false, error: 'Explica\'m una mica més què necessites.' };
  if (missatge.length > 5000) return { ok: false, error: 'El missatge és massa llarg (màxim 5.000 caràcters).' };

  return { ok: true, fields: { nom, email, telefon, missatge } };
}

export type SendMail = (fields: ContactFields) => Promise<void>;

const gmailSender: SendMail = async ({ nom, email, telefon, missatge }) => {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, '');
  if (!user || !pass) throw new Error('GMAIL_USER / GMAIL_APP_PASSWORD are not set');

  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
    // Fail fast instead of keeping the function alive for minutes if Gmail is slow.
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  await transport.sendMail({
    from: { name: 'Web gerardfortea.com', address: user },
    to: process.env.CONTACT_TO || user,
    replyTo: { name: nom, address: email },
    subject: `[gerardfortea.com] Contacte de ${nom.slice(0, 60)}`,
    text: [
      `Nom: ${nom}`,
      `Correu: ${email}`,
      telefon ? `Telèfon: ${telefon}` : null,
      '',
      missatge,
      '',
      '—',
      'Enviat des del formulari de https://www.gerardfortea.com',
    ]
      .filter((l) => l !== null)
      .join('\n'),
  });
};

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

/** Minimal page for browsers without JavaScript. */
function htmlPage(status: number, title: string, text: string) {
  const body = `<!doctype html><html lang="ca"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>${escapeHtml(title)} · Gerard Fortea</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#0e0f12;color:#f2f1ed;font:18px/1.5 system-ui,sans-serif;padding:24px}
main{max-width:520px}h1{font-size:40px;line-height:1.05;margin:0 0 12px}a{color:#c8f169}</style></head>
<body><main><h1>${escapeHtml(title)}</h1><p>${escapeHtml(text)}</p><p><a href="/">← Torna al web</a></p></main></body></html>`;
  return new Response(body, { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
}

/** The request body, or null if it is bigger than `max` bytes. */
async function readLimited(request: Request, max: number): Promise<ArrayBuffer | null> {
  if (!request.body) return new ArrayBuffer(0);
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > max) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  const out = new Uint8Array(size);
  let offset = 0;
  for (const c of chunks) {
    out.set(c, offset);
    offset += c.byteLength;
  }
  return out.buffer;
}

export async function handleContact(request: Request, send: SendMail = gmailSender): Promise<Response> {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  const reply = (status: number, ok: boolean, message: string) =>
    wantsJson
      ? Response.json({ ok, message }, { status, headers: { 'Cache-Control': 'no-store' } })
      : htmlPage(status, ok ? 'Missatge enviat' : 'No s\'ha pogut enviar', message);

  // Browsers always send Origin on a form POST (with or without JavaScript); scripts usually don't.
  const origin = request.headers.get('origin');
  if (!origin || !isAllowedOrigin(origin)) return reply(403, false, 'Origen no permès.');

  const type = request.headers.get('content-type') ?? '';
  if (!/^(application\/x-www-form-urlencoded|multipart\/form-data)\b/i.test(type)) {
    return reply(415, false, 'No he entès el formulari.');
  }
  if (Number(request.headers.get('content-length') ?? 0) > MAX_BODY_BYTES) {
    return reply(413, false, 'El missatge és massa llarg.');
  }

  let form: FormData;
  try {
    // Read with a hard cap: a chunked request has no Content-Length to check.
    const body = await readLimited(request, MAX_BODY_BYTES);
    if (!body) return reply(413, false, 'El missatge és massa llarg.');
    form = await new Request(request.url, { method: 'POST', headers: { 'content-type': type }, body }).formData();
  } catch {
    return reply(400, false, 'No he entès el formulari.');
  }

  const parsed = parseContact(form);
  if (!parsed.ok) return reply(422, false, parsed.error);

  const thanks = 'He rebut el teu missatge. En breu em poso en contacte amb tu!';
  if ('spam' in parsed) return reply(200, true, thanks);

  try {
    await send(parsed.fields);
  } catch (err) {
    console.error('[contacte] send failed:', err instanceof Error ? err.message : err);
    return reply(502, false, 'Ara mateix no s\'ha pogut enviar. Escriu-me directament a fortea.gerard@mail.com.');
  }
  return reply(200, true, thanks);
}

export function POST(request: Request) {
  return handleContact(request);
}
