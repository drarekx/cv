import type { Lang } from '../index';

/**
 * Texts of /xml-viewer. Sections in page order. The catalan object is the reference for the type.
 * The XML and JSON samples of the demo are data (book titles, names) and are not translated.
 */
const ca = {
  meta: {
    title: "XML Viewer — visor d'XML i JSON i editor de CSV · Gerard Fortea",
    description:
      "XML Viewer: enganxa un XML o un JSON i navega'l en un arbre plegable amb cerca, XPath i JSONPath, o edita un CSV com una taula. Ràpid amb fitxers de desenes de MB i tot al navegador.",
  },
  header: { open: 'Obre-la →' },
  hero: {
    formats: 'Formats',
    title: 'Un XML de 14 MB, obert en mig segon',
    text: "Un visor d'XML i JSON i un editor de CSV al navegador. Enganxes el contingut a l'esquerra i a la dreta el tens en un arbre que pots obrir, tancar i recórrer, o en una taula que pots editar. Res no surt del teu ordinador.",
    cta: "Obre l'XML Viewer",
  },
  demo: {
    srTitle: 'Prova-la aquí',
    formatGroup: 'Format',
    queryLabel: 'Consulta',
    openAll: '⊞ Obre',
    closeAll: '⊟ Tanca',
    inputTitle: 'ENTRADA',
    inputLabel: 'Contingut a formatar',
    path: 'Ruta:',
    clickLine: 'clica una línia',
    note: "Edita el text, prova una altra consulta o canvia a JSON. L'eina de veritat també té l'editor de CSV, les conversions i els fitxers grans.",
  },
  /** Messages of the demo's script. */
  viewer: {
    paste: "Enganxa un {format} a l'esquerra",
    invalidXml: 'XML no vàlid',
    invalidQuery: 'consulta no vàlida',
    child: 'fill',
    children: 'fills',
    item: 'element',
    items: 'elements',
    key: 'clau',
    keys: 'claus',
    result: 'resultat',
    results: 'resultats',
  },
  features: [
    ['Tres visors en un', 'XML, JSON i CSV. Si enganxes un format que no toca, canvia sol al visor bo i cada un guarda el seu text.'],
    ['Arbre plegable', 'Obre i tanca nodes, tot de cop o fins a un nivell. En tancar un node, diu quants fills amaga.'],
    ['XPath i JSONPath', 'Consultes com //book[price > 10]/title o $.store.book[*].title, i cerca de text en etiquetes, atributs, claus i valors.'],
    ['Ruta del node', 'Clica una línia i tens la seva ruta, /catalog/book[2]/price o $.store.book[1].price, per copiar-la amb el node sencer.'],
    ['Editor CSV', "Una taula que s'edita com un full de càlcul: fletxes, Tab, copiar i enganxar des d'Excel, desfer, ordenar i baixar."],
    ['Conversions', 'XML a JSON i tornada, JSON a CSV i CSV a JSON, amb un clic i sense perdre res pel camí (excepte els comentaris).'],
    ['Dreceres', 'Totes a la vista amb ?. ⌘/Ctrl + F per cercar, Ctrl + Alt + fletxes per moure i maximitzar els panells.'],
    ['Res surt del navegador', "Un únic index.html sense servidor: el que hi enganxes no s'envia enlloc. Amb tema de dia i de nit."],
  ] as [string, string][],
  large: {
    title: 'Pensat per a fitxers grans',
    text: "Només pinta el que veus: els fills d'un node apareixen quan l'obres, els nodes amb més de 500 fills van per pàgines i la taula de CSV només dibuixa les files a la vista. La cerca, en canvi, recorre el document sencer. Mesurat a Chrome:",
    headers: ['Fitxer', '', 'Obrir', 'Cercar text', 'Consulta'],
    rows: [
      ['XML de 14 MB', '600.000 elements', '0,5 s', 'menys de 0,5 s', '~50 ms amb XPath'],
      ['JSON de 16,5 MB', '1,6 milions de valors', '0,2 s', '0,1 s', '~25 ms amb JSONPath'],
      ['CSV de 20 MB', '300.000 files', '0,1 s', 'menys de 0,1 s', '—'],
    ] as [string, string, string, string, string][],
    stack: 'Alpine.js, Tailwind CSS i les API del navegador. Un sol index.html.',
  },
};

export type XmlViewerText = typeof ca;

const es: XmlViewerText = {
  meta: {
    title: 'XML Viewer — visor de XML y JSON y editor de CSV · Gerard Fortea',
    description:
      'XML Viewer: pega un XML o un JSON y navégalo en un árbol plegable con búsqueda, XPath y JSONPath, o edita un CSV como una tabla. Rápido con archivos de decenas de MB y todo en el navegador.',
  },
  header: { open: 'Ábrela →' },
  hero: {
    formats: 'Formatos',
    title: 'Un XML de 14 MB, abierto en medio segundo',
    text: 'Un visor de XML y JSON y un editor de CSV en el navegador. Pegas el contenido a la izquierda y a la derecha lo tienes en un árbol que puedes abrir, cerrar y recorrer, o en una tabla que puedes editar. Nada sale de tu ordenador.',
    cta: 'Abre XML Viewer',
  },
  demo: {
    srTitle: 'Pruébala aquí',
    formatGroup: 'Formato',
    queryLabel: 'Consulta',
    openAll: '⊞ Abrir',
    closeAll: '⊟ Cerrar',
    inputTitle: 'ENTRADA',
    inputLabel: 'Contenido a formatear',
    path: 'Ruta:',
    clickLine: 'haz clic en una línea',
    note: 'Edita el texto, prueba otra consulta o cambia a JSON. La herramienta de verdad también tiene el editor de CSV, las conversiones y los archivos grandes.',
  },
  viewer: {
    paste: 'Pega un {format} a la izquierda',
    invalidXml: 'XML no válido',
    invalidQuery: 'consulta no válida',
    child: 'hijo',
    children: 'hijos',
    item: 'elemento',
    items: 'elementos',
    key: 'clave',
    keys: 'claves',
    result: 'resultado',
    results: 'resultados',
  },
  features: [
    ['Tres visores en uno', 'XML, JSON y CSV. Si pegas un formato que no toca, cambia solo al visor correcto y cada uno guarda su texto.'],
    ['Árbol plegable', 'Abre y cierra nodos, todos a la vez o hasta un nivel. Al cerrar un nodo, dice cuántos hijos esconde.'],
    ['XPath y JSONPath', 'Consultas como //book[price > 10]/title o $.store.book[*].title, y búsqueda de texto en etiquetas, atributos, claves y valores.'],
    ['Ruta del nodo', 'Haz clic en una línea y tienes su ruta, /catalog/book[2]/price o $.store.book[1].price, para copiarla con el nodo entero.'],
    ['Editor de CSV', 'Una tabla que se edita como una hoja de cálculo: flechas, Tab, copiar y pegar desde Excel, deshacer, ordenar y descargar.'],
    ['Conversiones', 'XML a JSON y vuelta, JSON a CSV y CSV a JSON, con un clic y sin perder nada por el camino (excepto los comentarios).'],
    ['Atajos', 'Todos a la vista con ?. ⌘/Ctrl + F para buscar, Ctrl + Alt + flechas para mover y maximizar los paneles.'],
    ['Nada sale del navegador', 'Un único index.html sin servidor: lo que pegas no se envía a ningún sitio. Con tema de día y de noche.'],
  ],
  large: {
    title: 'Pensado para archivos grandes',
    text: 'Solo pinta lo que ves: los hijos de un nodo aparecen cuando lo abres, los nodos con más de 500 hijos van por páginas y la tabla de CSV solo dibuja las filas a la vista. La búsqueda, en cambio, recorre el documento entero. Medido en Chrome:',
    headers: ['Archivo', '', 'Abrir', 'Buscar texto', 'Consulta'],
    rows: [
      ['XML de 14 MB', '600.000 elementos', '0,5 s', 'menos de 0,5 s', '~50 ms con XPath'],
      ['JSON de 16,5 MB', '1,6 millones de valores', '0,2 s', '0,1 s', '~25 ms con JSONPath'],
      ['CSV de 20 MB', '300.000 filas', '0,1 s', 'menos de 0,1 s', '—'],
    ],
    stack: 'Alpine.js, Tailwind CSS y las API del navegador. Un solo index.html.',
  },
};

const en: XmlViewerText = {
  meta: {
    title: 'XML Viewer — XML and JSON viewer and CSV editor · Gerard Fortea',
    description:
      'XML Viewer: paste an XML or JSON and browse it in a collapsible tree with search, XPath and JSONPath, or edit a CSV as a table. Fast with files of tens of MB and all in the browser.',
  },
  header: { open: 'Open it →' },
  hero: {
    formats: 'Formats',
    title: 'A 14 MB XML, open in half a second',
    text: 'An XML and JSON viewer and a CSV editor in the browser. You paste the content on the left and on the right you get it as a tree you can open, close and walk through, or as a table you can edit. Nothing leaves your computer.',
    cta: 'Open XML Viewer',
  },
  demo: {
    srTitle: 'Try it here',
    formatGroup: 'Format',
    queryLabel: 'Query',
    openAll: '⊞ Open',
    closeAll: '⊟ Close',
    inputTitle: 'INPUT',
    inputLabel: 'Content to format',
    path: 'Path:',
    clickLine: 'click a line',
    note: 'Edit the text, try another query or switch to JSON. The real tool also has the CSV editor, the conversions and large files.',
  },
  viewer: {
    paste: 'Paste {format} on the left',
    invalidXml: 'Invalid XML',
    invalidQuery: 'invalid query',
    child: 'child',
    children: 'children',
    item: 'item',
    items: 'items',
    key: 'key',
    keys: 'keys',
    result: 'result',
    results: 'results',
  },
  features: [
    ['Three viewers in one', "XML, JSON and CSV. If you paste a format that doesn't match, it switches to the right viewer by itself and each one keeps its own text."],
    ['Collapsible tree', 'Open and close nodes, all at once or down to a level. When you close a node, it tells you how many children it hides.'],
    ['XPath and JSONPath', 'Queries like //book[price > 10]/title or $.store.book[*].title, and text search in tags, attributes, keys and values.'],
    ['Node path', 'Click a line and you get its path, /catalog/book[2]/price or $.store.book[1].price, to copy along with the whole node.'],
    ['CSV editor', 'A table you edit like a spreadsheet: arrow keys, Tab, copy and paste from Excel, undo, sort and download.'],
    ['Conversions', 'XML to JSON and back, JSON to CSV and CSV to JSON, in one click and without losing anything along the way (except comments).'],
    ['Shortcuts', 'All visible with ?. ⌘/Ctrl + F to search, Ctrl + Alt + arrows to move and maximize the panels.'],
    ['Nothing leaves the browser', 'A single index.html with no server: what you paste is not sent anywhere. With light and dark themes.'],
  ],
  large: {
    title: 'Built for large files',
    text: "It only draws what you see: a node's children appear when you open it, nodes with more than 500 children are paginated and the CSV table only draws the rows in view. Search, on the other hand, goes through the whole document. Measured in Chrome:",
    headers: ['File', '', 'Open', 'Search text', 'Query'],
    rows: [
      ['14 MB XML', '600,000 elements', '0.5 s', 'under 0.5 s', '~50 ms with XPath'],
      ['16.5 MB JSON', '1.6 million values', '0.2 s', '0.1 s', '~25 ms with JSONPath'],
      ['20 MB CSV', '300,000 rows', '0.1 s', 'under 0.1 s', '—'],
    ],
    stack: 'Alpine.js, Tailwind CSS and the browser APIs. A single index.html.',
  },
};

export const xmlViewer: Record<Lang, XmlViewerText> = { ca, es, en };
