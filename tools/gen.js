/* Erzeugt lang/sr.js (Serbisch, kyrillisch, ekavisch) aus lang/bks.js, lang/prs.js (Dari) aus lang/fa.js und data/freq.js */
const fs = require('fs'), vm = require('vm'), root = require('path').resolve(__dirname, '..');
const ctx = { window: {} }; vm.createContext(ctx);
for (const f of ['data/core.js', 'lang/de.js', 'lang/bks.js', 'lang/fa.js']) vm.runInContext(fs.readFileSync(root + '/' + f, 'utf8'), ctx);
const C = ctx.window.DT_CORE, B = ctx.window.DT_LANG.bks, F = ctx.window.DT_LANG.fa;
const clone = o => JSON.parse(JSON.stringify(o));

/* ---------- Serbisch ---------- */
const PH = [
  ['moju baku i djeda', 'moju babu i dedu'], ['u malom uredu', 'u maloj kancelariji'], ['u uredu', 'u kancelariji'], ['u kino', 'u bioskop'], ['u kinu', 'u bioskopu'],
  ['katedrale Stephansdom', 'Katedrale Svetog Stefana'], ['katedrala Stephansdom', 'Katedrala Svetog Stefana'], ['nazvat ću', 'nazvaću'], ['dobit ćeš', 'dobićeš'],
  ['mobitel', 'mobilni telefon'], ['Švicarsku', 'Švajcarsku'], ['općenito', 'uopšte'], ['\\btvari\\b', 'materije'], ['naprijed', 'napred'], ['Cijeli ekran', 'Ceo ekran'], ['Djede', 'Deda'], ['perzijskom', 'persijskom'], ['Znam dobro kuhati', 'Znam dobro da kuvam'], ['Želimo učiti', 'Želimo da učimo'], ['Max,', 'Maks,'], ['Platit ću', 'Platiću'], ['htio', 'hteo'], ['želite popiti', 'želite da popijete'], ['doći jesti', 'doći da jedete'], ['vidio', 'video'], ['promjen', 'promen'], ['postavke', 'podešavanja'], ['poredaj', 'poređaj'],
  ['jučer', 'juče'], ['navečer', 'uveče'], ['kuha', 'kuva'], ['Graz', 'Grac'], ['Linz', 'Linc'], ['Salzburg', 'Salcburg'], ['Schönbrunn', 'Šenbrun'], ['Ottakring', 'Otakring'], ['Naschmarkt', 'Našmarkt'], ['Anna', 'Ana'],
  ['\\bprije\\b', 'pre'], ['djed\\b', 'deda'],
  ['lijep', 'lep'], ['mlijek', 'mlek'], ['vrijem', 'vrem'], ['dijete', 'dete'], ['djetet', 'detet'], ['djec', 'dec'], ['riječ', 'reč'], ['lijek', 'lek'], ['uvijek', 'uvek'], ['poslije', 'posle'], ['dvije', 'dve'],
  ['svijetl', 'svetl'], ['promijeni', 'promeni'], ['mijenja', 'menja'], ['prijedl', 'predl'], ['dijelov', 'delov'], ['podijeli', 'podeli'], ['pomiješan', 'pomešan'], ['gdje', 'gde'], ['ovdje', 'ovde'], ['njemačk', 'nemačk'],
  ['mjest', 'mest'], ['mjesec', 'mesec'], ['vidje', 'vide'], ['razumje', 'razume'], ['razumij', 'razum'], ['ponedjelj', 'ponedelj'], ['nedjelj', 'nedelj'], ['sljedeć', 'sledeć'], ['čovjek', 'čovek'], ['vježb', 'vežb'],
  ['rječnik', 'rečnik'], ['mješovit', 'mešovit'], ['svjež', 'svež'], ['mljeven', 'mleven'], ['željezn', 'železn'], ['ljekar', 'lekar'], ['hljeb', 'hleb'], ['pridjev', 'pridev'], ['provjeri', 'proveri'], ['posje', 'pose'],
  ['osjećaj', 'osećaj'], ['snijeg', 'sneg'], ['cijen', 'cen'], ['ljet', 'let'], ['htje', 'hte'], ['donije', 'done'], ['volje', 'vole'], ['presje', 'prese'], ['zamjenic', 'zamenic'], ['primjer', 'primer']
].map(([a, b]) => [new RegExp(a, 'gi'), b]);
const TOK = /(\{[^}]*\}|\b(?:der|die|das|ein|eine|haben|sein|nicht|kein|nie|du|Sie|er|sie|es|Perfekt|A1|A2|B1)\b|A–Z)/g;
const MAP = { a: 'а', b: 'б', c: 'ц', č: 'ч', ć: 'ћ', d: 'д', đ: 'ђ', e: 'е', f: 'ф', g: 'г', h: 'х', i: 'и', j: 'ј', k: 'к', l: 'л', m: 'м', n: 'н', o: 'о', p: 'п', r: 'р', s: 'с', š: 'ш', t: 'т', u: 'у', v: 'в', z: 'з', ž: 'ж' };
function cyr(s) {
  s = s.replace(/lj/g, 'љ').replace(/Lj|LJ/g, 'Љ').replace(/nj/g, 'њ').replace(/Nj|NJ/g, 'Њ').replace(/dž/g, 'џ').replace(/Dž|DŽ/g, 'Џ');
  return s.replace(/[A-Za-zčćđšžČĆĐŠŽ]/g, ch => { const lo = ch.toLowerCase(), m = MAP[lo]; if (!m) return ch; return ch === lo ? m : m.toUpperCase(); });
}
function latSr(s) { for (const [re, to] of PH) s = s.replace(re, m => (m[0] !== m[0].toLowerCase() ? to[0].toUpperCase() + to.slice(1) : to)); return s; }
function sr(s, prot) {
  const keep = [];
  s = s.replace(prot ? TOK : /\{[^}]*\}/g, m => { keep.push(m); return '\u0001' + (keep.length - 1) + '\u0001'; });
  return cyr(latSr(s)).replace(/\u0001(\d+)\u0001/g, (_, i) => keep[+i]);
}
const S = clone(B); delete S.ff;
const OV = {
  kl_2: 'Danas ne mogu da dođem.', kl_3: 'Sada moramo da idemo kući.', nb_3: 'Učim nemački jer želim da radim u Beču.', kl_10: 'Sledeće godine želim da polažem ispit.', v2_9: 'Možda možemo da se nađemo za vikend.',
  kl_13: 'Želim da popijem čaj.', kl_18: 'Moraš da potpišeš formular.', v2_17: 'Zato danas moram duže da radim.', nb_18: 'Možeš li da mi kažeš gde mogu da kupim kartu?', kl_15: 'Možeš li da mi pomogneš?', ka_16: 'Možeš li da mi pomogneš?',
  vf_16: 'Možeš li da mi pomogneš?', du_5: 'Mama, možeš li da mi pomogneš?', du_3: 'Izvinite, možete li da mi pomognete?', sc_6: 'Možete li, molim Vas, da mi pomognete?', kl_12: 'Možeš li sutra da me pokupiš sa železničke stanice?',
  nb_8: 'Ne znam da li je on pročitao knjigu.', nb_6: 'Ona pita da li autobus ide do glavne železničke stanice.'
};
for (const k in S.ui) S.ui[k] = sr(S.ui[k], true);
S.ui.inYourLang = sr('U srpskom jeziku');
for (const m in S.mod) for (const k in S.mod[m]) S.mod[m][k] = sr(S.mod[m][k], true);
S.mod.laute.t = sr('Slušanje: dugo ili kratko? {u} ili {ü}?');
for (const k in S.q) S.q[k] = sr(S.q[k], true);
S.q.q12 = sr('Piše li se tvoj jezik latiničnim slovima ({a, b, c})?');
S.intro.h = sr(S.intro.h); S.intro.p = sr(S.intro.p); S.intro.e.forEach(e => { e.c = sr(e.c); });
for (const k in S.s) S.s[k] = sr(OV[k] || S.s[k]);
const VOV = { Topfen: 'švapski sir', Großeltern: 'bake i dede', Mädchen: 'devojčica', Frühling: 'proleće', fliegen: 'leteti', glauben: 'verovati, misliti', leben: 'živeti', sitzen: 'sedeti', 'weiß': 'beo', links: 'levo', Bub: 'dečak', auch: 'takođe, i', 'E-Mail': 'imejl', Ohr: 'uvo', Amt: 'ustanova, služba', 'Servus!': 'Zdravo! / Ćao!' };
for (const k in S.v) { let v = VOV[k] || S.v[k]; if (!VOV[k] && v.includes(' / ')) v = v.split(' / ')[0]; S.v[k] = sr(v); }
S.ff = B.ff.map(f => ({ de: f.de, ok: sr(f.ok), no: sr(f.no), c: sr(f.c) }));
fs.writeFileSync(root + '/lang/sr.js', '/* Српски (ћирилица, екавица). Automatisch aus lang/bks.js erzeugt (tools/gen.js). Korrekturen bitte in lang/bks.js oder im Skript. */\n(window.DT_LANG = window.DT_LANG || {}).sr = ' + JSON.stringify(S, null, 1) + ';\n');
/* Kontrolle: lateinische Reste und mögliche Ijekavismen */
const left = new Set(), ije = new Set();
const scan = s => { const t = s.replace(/\{[^}]*\}/g, ''); (t.match(/[A-Za-zčćđšž]{2,}/g) || []).forEach(w => left.add(w)); };
const chk = x => { const y = latSr(x.replace(/\{[^}]*\}/g, '')); (y.match(/[a-zčćđšž]*(?:ije|[bcčćdđfghklmnprsštvzž]je)[a-zčćđšž]*/gi) || []).forEach(w => ije.add(w.toLowerCase())); };
[S.ui, S.q, S.s, S.v].forEach(o => Object.values(o).forEach(scan)); Object.values(S.mod).forEach(m => Object.values(m).forEach(scan));
[B.ui, B.q, B.s, B.v].forEach(o => Object.values(o).forEach(chk)); Object.values(B.mod).forEach(m => Object.values(m).forEach(chk));
console.log('SR lateinische Reste:', [...left].join(' '));
console.log('SR prüfen (ije/je):', [...ije].join(' '));

/* ---------- Dari ---------- */
const DR = [
  ['فارسی‌زبانان', 'دری‌زبانان'], ['فارسیِ', 'دریِ'], ['فارسی', 'دری'],
  ['پدربزرگ و مادربزرگم', 'پدرکلان و مادرکلانم'], ['پدربزرگ', 'پدرکلان'], ['بیمارستان', 'شفاخانه'], ['پزشک', 'داکتر'], ['دکتر', 'داکتر'], ['ماشین', 'موتر'], ['مدرسه', 'مکتب'],
  ['دانشجو', 'محصل'], ['دانش‌آموز', 'شاگرد'], ['اتوبوس', 'بس'], ['قطار', 'ریل'], ['دوچرخه', 'بایسکل'], ['بلیت', 'تکت'], ['بچه‌ها', 'اطفال'], ['بچه', 'طفل'], ['موبایل', 'مبایل'],
  ['ژانویه', 'جنوری'], ['ماه مه', 'ماه می'], ['آپارتمان', 'اپارتمان'], ['گرسنه', 'گشنه'], ['قشنگ', 'مقبول'], ['فرم', 'فورمه'], ['تراموا', 'ترام'], ['کلاس', 'صنف'], ['گربه', 'پشک'],
  ['خسته', 'مانده'], ['وین', 'ویانا'], ['کیف', 'بکس'], ['صندلی', 'چوکی'], ['پنجره', 'کلکین'], ['سوئیس', 'سویس'], ['الان', 'حالا'], ['بطری', 'بوتل'], ['هتل', 'هوتل']
];
const dr = s => { for (const [a, b] of DR) s = s.split(a).join(b); return s; };
const D = clone(F); delete D.dari;
for (const k in D.ui) D.ui[k] = dr(D.ui[k]);
for (const m in D.mod) for (const k in D.mod[m]) D.mod[m][k] = dr(D.mod[m][k]);
for (const k in D.q) D.q[k] = dr(D.q[k]);
D.intro.h = dr(D.intro.h); D.intro.p = dr(D.intro.p); D.intro.e.forEach(e => { e.c = dr(e.c); });
for (const k in D.s) D.s[k] = dr(D.s[k]).replace(/^عصر /, 'شام ');
D.s.ka_21 = 'چوکی کنار دروازه است.';
for (const k in D.v) D.v[k] = F.dari[k] || dr(D.v[k]);
D.v.Abend = 'شام'; D.v.Tasche = 'بکس';
fs.writeFileSync(root + '/lang/prs.js', '/* دری. Automatisch aus lang/fa.js erzeugt (tools/gen.js): gleiche Grammatiktexte, afghanischer Wortschatz. Bitte von Muttersprachler:innen prüfen lassen. */\n(window.DT_LANG = window.DT_LANG || {}).prs = ' + JSON.stringify(D, null, 1) + ';\n');
let changed = 0; for (const k in D.s) if (D.s[k] !== F.s[k]) changed++;
console.log('Dari: geänderte Sätze', changed, 'von', Object.keys(D.s).length, '| Wörter mit Dari-Variante', Object.keys(F.dari).length);

/* ---------- Häufigkeit ---------- */
const FQ = root + '/tools/de_50k.txt'; if (!fs.existsSync(FQ)) { console.log('Häufigkeit übersprungen (tools/de_50k.txt fehlt)'); process.exit(0); }
const rank = {}; fs.readFileSync(FQ, 'utf8').split('\n').forEach((l, i) => { const w = l.split(' ')[0]; if (w && !(w in rank)) rank[w] = i + 1; });
const freq = {}, miss = [];
C.vocab.forEach(v => {
  let forms = [v.d]; if (v.p) forms.push(v.p); if (C.forms[v.d]) forms = forms.concat(C.forms[v.d].split(' '));
  const r = Math.min(...forms.map(f => rank[f.toLowerCase().replace(/[!]/g, '')] || 1e9));
  if (r < 1e9) freq[v.d] = r; else miss.push(v.d);
});
fs.writeFileSync(root + '/data/freq.js', '/* Häufigkeitsränge (kleiner = häufiger), abgeleitet aus FrequencyWords von Hermit Dave (OpenSubtitles 2018), Lizenz CC BY-SA 4.0: https://github.com/hermitdave/FrequencyWords */\nwindow.DT_CORE.freq = ' + JSON.stringify(freq) + ';\n');
console.log('Häufigkeit: ohne Rang', miss.join(', '));
