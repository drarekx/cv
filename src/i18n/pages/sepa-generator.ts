import type { Lang } from '../index';

/**
 * Texts of /sepa-generator. Sections in page order. The catalan object is the reference for the type.
 * The terminal-style output of the demo (`gen --iban`, `bank=`…) is translated too, but keeps the CLI look.
 */
const ca = {
  meta: {
    title: 'sepa-gen — IBAN, NIF, NIE i CIF de prova · Gerard Fortea',
    description:
      'sepa-gen genera i valida IBAN de 24 països SEPA i NIF, NIE i CIF ficticis, vàlids de format, per provar programari sense fer servir dades de ningú. Tot al navegador.',
  },
  header: { open: 'Obre-la →' },
  hero: {
    eyebrow: '# Per a programadors i testers',
    title: 'IBAN, NIF, NIE i CIF de prova, vàlids de format',
    text: 'Per omplir formularis i provar programari sense fer servir les dades de ningú. Passen totes les comprovacions de format i dels dígits de control, però no corresponen a cap compte, persona ni empresa reals.',
    cta: './obre sepa-gen',
  },
  demo: {
    title: '~/proves — sepa-gen --demo',
    ibanCommand: 'gen --iban --pais',
    countryLabel: "País de l'IBAN",
    /** Same order as `demoCountries` in the view. */
    countryNames: ['Espanya', 'Alemanya', 'França', 'Portugal', 'Bèlgica', 'Àustria'],
    generate: './generar',
    copy: 'copy',
    shortLabels: { nif: 'sin_letra', nie: 'sin_letra', cif: 'sin_control' },
    validateCommand: 'validar',
    validateHint: '— enganxa-hi un IBAN, NIF, NIE o CIF',
    waiting: '# esperant…',
    bank: 'banco',
    country: 'pais',
    verdict: {
      ibanValid: '✓ IBAN vàlid (MOD-97)',
      ibanInvalid: '✗ IBAN no vàlid',
      unknown: '✗ format no reconegut',
      valid: '✓ {type} vàlid',
      invalid: '✗ {type} no vàlid: esperava {expected}',
      or: ' o ',
      specialNif: 'NIF especial ({letter})',
    },
    copied: '✓ copiat: {value}',
    copyFailed: "# no s'ha pogut copiar",
  },
  features: [
    ['24 països SEPA', "Cada IBAN té la llargada i l'estructura del seu país, i els dígits de control MOD-97 de l'ISO 13616."],
    ['Control nacional', 'Quan el país en té, també el calcula: el CCC espanyol, la clau RIB francesa, el CIN italià, Luhn a Finlàndia, MOD 11,10 a Croàcia…'],
    ['Bancs de debò', "Els IBAN espanyols porten una entitat real, amb el seu nom i el BIC, i l'oficina i el compte aleatoris."],
    ['NIF, NIE i CIF', 'NIF i NIE amb la lletra del mòdul 23. CIF de qualsevol dels vint tipus d\'entitat, amb el control en número o en lletra segons toqui.'],
    ['Valida i calcula', "Diu si un IBAN, NIF, NIE o CIF és correcte i, si no, quin control esperava. Calcula la lletra d'un NIF i el control d'un CIF."],
    ['Dreceres', 'i, n, e, c i p generen un IBAN, NIF, NIE, CIF o CIF per tipus i el copien al porta-retalls en una sola tecla.'],
    ['Historial', 'Cada generador guarda el que ha tret, per copiar-ho de nou o baixar-ho en un .txt.'],
    ['Al navegador', "No hi ha servidor: tot es calcula a la teva pàgina, amb l'atzar criptogràfic del navegador."],
  ] as [string, string][],
  terminal: {
    title: 'Un terminal al navegador',
    text: "Cada generador és una ordre, amb el seu historial, i les dreceres ho fan tot sense tocar el ratolí. Genera IBAN d'aquests 24 països. És un sol fitxer HTML amb JavaScript sense dependències i Tailwind.",
    countriesLabel: 'Països',
  },
};

export type SepaGeneratorText = typeof ca;

const es: SepaGeneratorText = {
  meta: {
    title: 'sepa-gen — IBAN, NIF, NIE y CIF de prueba · Gerard Fortea',
    description:
      'sepa-gen genera y valida IBAN de 24 países SEPA y NIF, NIE y CIF ficticios, válidos de formato, para probar software sin usar datos de nadie. Todo en el navegador.',
  },
  header: { open: 'Ábrela →' },
  hero: {
    eyebrow: '# Para programadores y testers',
    title: 'IBAN, NIF, NIE y CIF de prueba, válidos de formato',
    text: 'Para rellenar formularios y probar software sin usar los datos de nadie. Pasan todas las comprobaciones de formato y de dígitos de control, pero no corresponden a ninguna cuenta, persona ni empresa reales.',
    cta: './abre sepa-gen',
  },
  demo: {
    title: '~/pruebas — sepa-gen --demo',
    ibanCommand: 'gen --iban --pais',
    countryLabel: 'País del IBAN',
    countryNames: ['España', 'Alemania', 'Francia', 'Portugal', 'Bélgica', 'Austria'],
    generate: './generar',
    copy: 'copy',
    shortLabels: { nif: 'sin_letra', nie: 'sin_letra', cif: 'sin_control' },
    validateCommand: 'validar',
    validateHint: '— pega un IBAN, NIF, NIE o CIF',
    waiting: '# esperando…',
    bank: 'banco',
    country: 'pais',
    verdict: {
      ibanValid: '✓ IBAN válido (MOD-97)',
      ibanInvalid: '✗ IBAN no válido',
      unknown: '✗ formato no reconocido',
      valid: '✓ {type} válido',
      invalid: '✗ {type} no válido: esperaba {expected}',
      or: ' o ',
      specialNif: 'NIF especial ({letter})',
    },
    copied: '✓ copiado: {value}',
    copyFailed: '# no se ha podido copiar',
  },
  features: [
    ['24 países SEPA', 'Cada IBAN tiene la longitud y la estructura de su país, y los dígitos de control MOD-97 de la ISO 13616.'],
    ['Control nacional', 'Cuando el país lo tiene, también lo calcula: el CCC español, la clave RIB francesa, el CIN italiano, Luhn en Finlandia, MOD 11,10 en Croacia…'],
    ['Bancos de verdad', 'Los IBAN españoles llevan una entidad real, con su nombre y el BIC, y la oficina y la cuenta aleatorias.'],
    ['NIF, NIE y CIF', 'NIF y NIE con la letra del módulo 23. CIF de cualquiera de los veinte tipos de entidad, con el control en número o en letra según toque.'],
    ['Valida y calcula', 'Dice si un IBAN, NIF, NIE o CIF es correcto y, si no, qué control esperaba. Calcula la letra de un NIF y el control de un CIF.'],
    ['Atajos', 'i, n, e, c y p generan un IBAN, NIF, NIE, CIF o CIF por tipo y lo copian al portapapeles con una sola tecla.'],
    ['Historial', 'Cada generador guarda lo que ha sacado, para copiarlo de nuevo o bajarlo en un .txt.'],
    ['En el navegador', 'No hay servidor: todo se calcula en tu página, con el azar criptográfico del navegador.'],
  ],
  terminal: {
    title: 'Un terminal en el navegador',
    text: 'Cada generador es una orden, con su historial, y los atajos lo hacen todo sin tocar el ratón. Genera IBAN de estos 24 países. Es un solo archivo HTML con JavaScript sin dependencias y Tailwind.',
    countriesLabel: 'Países',
  },
};

const en: SepaGeneratorText = {
  meta: {
    title: 'sepa-gen — test IBAN, NIF, NIE and CIF numbers · Gerard Fortea',
    description:
      "sepa-gen generates and validates IBANs from 24 SEPA countries and fictitious NIF, NIE and CIF numbers, valid in format, to test software without using anyone's data. All in the browser.",
  },
  header: { open: 'Open it →' },
  hero: {
    eyebrow: '# For developers and testers',
    title: 'Test IBAN, NIF, NIE and CIF numbers, valid in format',
    text: "To fill in forms and test software without using anyone's data. They pass all the format and check-digit validations, but they don't match any real account, person or company.",
    cta: './open sepa-gen',
  },
  demo: {
    title: '~/tests — sepa-gen --demo',
    ibanCommand: 'gen --iban --country',
    countryLabel: 'IBAN country',
    countryNames: ['Spain', 'Germany', 'France', 'Portugal', 'Belgium', 'Austria'],
    generate: './generate',
    copy: 'copy',
    shortLabels: { nif: 'no_letter', nie: 'no_letter', cif: 'no_check' },
    validateCommand: 'validate',
    validateHint: '— paste an IBAN, NIF, NIE or CIF',
    waiting: '# waiting…',
    bank: 'bank',
    country: 'country',
    verdict: {
      ibanValid: '✓ valid IBAN (MOD-97)',
      ibanInvalid: '✗ invalid IBAN',
      unknown: '✗ unrecognized format',
      valid: '✓ valid {type}',
      invalid: '✗ invalid {type}: expected {expected}',
      or: ' or ',
      specialNif: 'special NIF ({letter})',
    },
    copied: '✓ copied: {value}',
    copyFailed: '# could not copy',
  },
  features: [
    ['24 SEPA countries', 'Each IBAN has the length and structure of its country, and the MOD-97 check digits from ISO 13616.'],
    ['National check', 'When the country has one, it calculates that too: the Spanish CCC, the French RIB key, the Italian CIN, Luhn in Finland, MOD 11,10 in Croatia…'],
    ['Real banks', 'Spanish IBANs carry a real bank, with its name and BIC, and a random branch and account.'],
    ['NIF, NIE and CIF', 'NIF and NIE with the modulo 23 letter. CIF of any of the twenty entity types, with the check as a number or a letter as required.'],
    ['Validate and calculate', 'Tells you whether an IBAN, NIF, NIE or CIF is correct and, if not, which check it expected. Calculates the letter of a NIF and the check of a CIF.'],
    ['Shortcuts', 'i, n, e, c and p generate an IBAN, NIF, NIE, CIF or CIF by type and copy it to the clipboard with a single key.'],
    ['History', 'Each generator keeps what it produced, to copy again or download as a .txt.'],
    ['In the browser', "There is no server: everything is calculated on your page, using the browser's cryptographic randomness."],
  ],
  terminal: {
    title: 'A terminal in the browser',
    text: 'Each generator is a command, with its own history, and the shortcuts do everything without touching the mouse. It generates IBANs for these 24 countries. It is a single HTML file with dependency-free JavaScript and Tailwind.',
    countriesLabel: 'Countries',
  },
};

export const sepaGenerator: Record<Lang, SepaGeneratorText> = { ca, es, en };
