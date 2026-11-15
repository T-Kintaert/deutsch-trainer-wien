/* Deutsch-Trainer Wien – Kerndaten (deutsche Übungssätze und Wortschatz)
   Alle Sätze sind für diese App neu geschrieben. Typen:
   puzzle: c = Satzteile in richtiger Reihenfolge, der erste Teil ist vorgegeben
   gap:    t = Satz mit ___, o = Optionen, o[0] ist richtig ("–" = kein Wort)
   pick:   ok = richtiger Satz, no = falsche Variante(n)
   l = Stufe (1 = A1, 2 = A2, 3 = B1) */
window.DT_CORE = {
  version: "1.0.0",
  modules: [
    { id: "v2", core: 1, icon: "2️⃣" },
    { id: "klammer", core: 1, icon: "🧲" },
    { id: "neben", core: 1, icon: "🔚" },
    { id: "genus", core: 1, icon: "🎨" },
    { id: "kasus", core: 1, icon: "🧩" },
    { id: "artikel", icon: "🏷️" },
    { id: "subjekt", icon: "🙋" },
    { id: "kopula", icon: "🟰" },
    { id: "negation", icon: "🚫" },
    { id: "haben", icon: "🤲" },
    { id: "plural", icon: "🔢" },
    { id: "verbform", icon: "🔧" },
    { id: "praep", icon: "📍" },
    { id: "perfekt", icon: "⏪" },
    { id: "adjektiv", icon: "✨" },
    { id: "tekamolo", icon: "🕒" },
    { id: "schrift", icon: "🔠" },
    { id: "laute", icon: "👂" }
  ],
  items: {
    v2: [
      { id: "v2_1", l: 1, c: ["Heute", "gehe", "ich", "in den Prater."] },
      { id: "v2_2", l: 1, c: ["Am Samstag", "fahren", "wir", "nach Graz."] },
      { id: "v2_3", l: 1, c: ["Jetzt", "trinke", "ich", "einen Kaffee."] },
      { id: "v2_4", l: 1, c: ["Morgen", "kommt", "meine Schwester", "nach Wien."] },
      { id: "v2_5", l: 2, c: ["In Wien", "fahren", "viele Leute", "mit der U-Bahn."] },
      { id: "v2_6", l: 2, c: ["Nach der Arbeit", "gehe", "ich", "einkaufen."] },
      { id: "v2_7", l: 2, c: ["Im Jänner", "ist", "es", "sehr kalt."] },
      { id: "v2_8", l: 2, c: ["Leider", "habe", "ich", "heute keine Zeit."] },
      { id: "v2_9", l: 3, c: ["Vielleicht", "können", "wir uns", "am Wochenende", "treffen."] },
      { id: "v2_10", l: 3, c: ["Seit zwei Jahren", "wohnt", "meine Familie", "in Ottakring."] }
    ],
    tekamolo: [
      { id: "tk_1", l: 1, c: ["Ich", "gehe", "heute", "ins Kino."] },
      { id: "tk_2", l: 1, c: ["Wir", "fahren", "am Sonntag", "nach Schönbrunn."] },
      { id: "tk_3", l: 2, c: ["Ich", "fahre", "morgen", "mit dem Zug", "nach Salzburg."] },
      { id: "tk_4", l: 2, c: ["Sie", "arbeitet", "seit Mai", "in einem Spital."] },
      { id: "tk_5", l: 2, c: ["Er", "fährt", "jeden Tag", "mit dem Rad", "zur Arbeit."] },
      { id: "tk_6", l: 3, c: ["Wir", "treffen uns", "um acht", "vor dem Stephansdom."] }
    ],
    klammer: [
      { id: "kl_1", l: 1, c: ["Ich", "habe", "gestern", "einen Film", "gesehen."] },
      { id: "kl_2", l: 1, c: ["Ich", "kann", "heute", "nicht", "kommen."] },
      { id: "kl_3", l: 1, c: ["Wir", "müssen", "jetzt", "nach Hause", "gehen."] },
      { id: "kl_4", l: 1, c: ["Der Zug", "fährt", "um neun Uhr", "ab."] },
      { id: "kl_5", l: 2, c: ["Ich", "rufe", "dich", "am Abend", "an."] },
      { id: "kl_6", l: 2, c: ["Sie", "ist", "letztes Jahr", "nach Wien", "gekommen."] },
      { id: "kl_7", l: 2, c: ["Ich", "stehe", "jeden Tag", "um sechs Uhr", "auf."] },
      { id: "kl_8", l: 2, c: ["Hast", "du", "das Formular", "schon ausgefüllt?"] },
      { id: "kl_9", l: 2, c: ["Wir", "kaufen", "am Samstag", "am Naschmarkt", "ein."] },
      { id: "kl_10", l: 3, c: ["Ich", "möchte", "nächstes Jahr", "die Prüfung", "machen."] },
      { id: "kl_11", l: 3, c: ["Die Wohnung", "wird", "nächste Woche", "renoviert."] },
      { id: "kl_12", l: 3, c: ["Kannst", "du", "mich", "morgen", "vom Bahnhof", "abholen?"] }
    ],
    neben: [
      { id: "nb_1", l: 1, c: ["Ich bleibe zu Hause,", "weil", "ich", "krank", "bin."] },
      { id: "nb_2", l: 1, c: ["Ich weiß,", "dass", "du", "müde", "bist."] },
      { id: "nb_3", l: 2, c: ["Ich lerne Deutsch,", "weil", "ich", "in Wien", "arbeiten", "möchte."] },
      { id: "nb_4", l: 2, c: ["Wir gehen spazieren,", "wenn", "die Sonne", "scheint."] },
      { id: "nb_5", l: 2, c: ["Ich glaube,", "dass", "er", "heute", "nicht", "kommt."] },
      { id: "nb_6", l: 2, c: ["Sie fragt,", "ob", "der Bus", "zum Hauptbahnhof", "fährt."] },
      { id: "nb_7", l: 2, c: ["Ich rufe dich an,", "wenn", "ich", "zu Hause", "bin."] },
      { id: "nb_8", l: 3, c: ["Ich weiß nicht,", "ob", "er", "das Buch", "gelesen", "hat."] },
      { id: "nb_9", l: 3, c: ["Er hat gesagt,", "dass", "er", "morgen", "später", "kommt."] },
      { id: "nb_10", l: 3, c: ["Obwohl", "es", "regnet,", "gehen", "wir", "in den Prater."] }
    ],
    kasus: [
      { id: "ka_1", l: 1, t: "Ich sehe ___ Mann.", o: ["den", "der", "dem"] },
      { id: "ka_2", l: 1, t: "Ich helfe ___ Frau.", o: ["der", "die", "den"] },
      { id: "ka_3", l: 1, t: "Das ist ___ Bruder.", o: ["mein", "meinen", "meinem"] },
      { id: "ka_4", l: 2, t: "Ich gebe ___ Kind einen Apfel.", o: ["dem", "das", "den"] },
      { id: "ka_5", l: 2, t: "Wir gehen in ___ Park.", o: ["den", "dem", "der"] },
      { id: "ka_6", l: 2, t: "Das Buch liegt auf ___ Tisch.", o: ["dem", "den", "der"] },
      { id: "ka_7", l: 2, t: "Ich lege das Buch auf ___ Tisch.", o: ["den", "dem", "der"] },
      { id: "ka_8", l: 2, t: "Ich fahre mit ___ Straßenbahn.", o: ["der", "die", "den"] },
      { id: "ka_9", l: 2, t: "Das Geschenk ist für ___ Mutter.", o: ["meine", "meiner", "meinem"] },
      { id: "ka_10", l: 3, t: "Ich wasche ___ die Hände.", o: ["mir", "mich", "mein"] },
      { id: "ka_11", l: 3, t: "Ich freue ___ auf das Wochenende.", o: ["mich", "mir", "sich"] },
      { id: "ka_12", l: 3, t: "Sie wohnt bei ___ Eltern.", o: ["ihren", "ihre", "ihrer"] }
    ],
    artikel: [
      { id: "ar_1", l: 1, t: "Ich habe ___ Bruder.", o: ["einen", "–", "den"] },
      { id: "ar_2", l: 1, t: "Das ist ___ Stephansdom.", o: ["der", "ein", "–"] },
      { id: "ar_3", l: 1, t: "Sie ist ___ Lehrerin.", o: ["–", "eine", "die"] },
      { id: "ar_4", l: 1, t: "Ich trinke gern ___ Kaffee.", o: ["–", "den", "einen"] },
      { id: "ar_5", l: 2, t: "___ Sonne scheint.", o: ["Die", "Eine", "–"] },
      { id: "ar_6", l: 2, t: "Ich brauche ___ neues Handy.", o: ["ein", "das", "–"] },
      { id: "ar_7", l: 2, t: "Wo ist ___ nächste U-Bahn-Station?", o: ["die", "eine", "–"] },
      { id: "ar_8", l: 2, t: "Ich gehe in ___ Schule.", o: ["die", "eine", "–"] },
      { id: "ar_9", l: 2, t: "Hast du ___ Zeit?", o: ["–", "die", "eine"] },
      { id: "ar_10", l: 3, t: "Sie kommt aus ___ Türkei.", o: ["der", "–", "die"] },
      { id: "ar_11", l: 3, t: "Ich wohne in ___ Österreich.", o: ["–", "dem", "das"] },
      { id: "ar_12", l: 3, t: "Gestern habe ich einen Film gesehen. ___ Film war sehr gut.", o: ["Der", "Ein", "–"] }
    ],
    subjekt: [
      { id: "su_1", l: 1, ok: "Ich gehe nach Hause.", no: ["Gehe nach Hause."] },
      { id: "su_2", l: 1, ok: "Es regnet.", no: ["Regnet."] },
      { id: "su_3", l: 1, ok: "Wie heißt du?", no: ["Wie heißt?"] },
      { id: "su_4", l: 2, ok: "Heute ist es kalt.", no: ["Heute ist kalt."] },
      { id: "su_5", l: 2, ok: "Wir sind müde.", no: ["Sind müde."] },
      { id: "su_6", l: 2, ok: "Es ist schon spät.", no: ["Ist schon spät."] },
      { id: "su_7", l: 2, ok: "Kommst du morgen?", no: ["Kommst morgen?"] },
      { id: "su_8", l: 3, ok: "Es gibt hier viele Kaffeehäuser.", no: ["Gibt hier viele Kaffeehäuser."] }
    ],
    kopula: [
      { id: "ko_1", l: 1, ok: "Das Haus ist groß.", no: ["Das Haus groß."] },
      { id: "ko_2", l: 1, ok: "Ich bin Student.", no: ["Ich Student."] },
      { id: "ko_3", l: 1, ok: "Sie ist meine Schwester.", no: ["Sie meine Schwester."] },
      { id: "ko_4", l: 1, ok: "Wir sind in Wien.", no: ["Wir in Wien."] },
      { id: "ko_5", l: 2, ok: "Mein Vater ist Arzt.", no: ["Mein Vater Arzt."] },
      { id: "ko_6", l: 2, ok: "Wo ist der Bahnhof?", no: ["Wo der Bahnhof?"] },
      { id: "ko_7", l: 2, ok: "Das Essen ist sehr gut.", no: ["Das Essen sehr gut."] },
      { id: "ko_8", l: 2, ok: "Wer ist das?", no: ["Wer das?"] }
    ],
    negation: [
      { id: "ng_1", l: 1, t: "Ich habe ___ Auto.", o: ["kein", "nicht", "nein"] },
      { id: "ng_2", l: 1, t: "Ich komme heute ___.", o: ["nicht", "kein", "nein"] },
      { id: "ng_3", l: 2, ok: "Ich habe nichts gesehen.", no: ["Ich habe nicht nichts gesehen."] },
      { id: "ng_4", l: 2, ok: "Ich war noch nie in Salzburg.", no: ["Ich war noch nie nicht in Salzburg."] },
      { id: "ng_5", l: 2, ok: "Niemand hat angerufen.", no: ["Niemand hat nicht angerufen."] },
      { id: "ng_6", l: 2, ok: "Ich gehe nicht.", no: ["Ich nicht gehe."] },
      { id: "ng_7", l: 2, t: "Das ist ___ gute Idee.", o: ["keine", "nicht", "nichts"] },
      { id: "ng_8", l: 3, ok: "Er sagt nie etwas.", no: ["Er sagt nie nichts."] },
      { id: "ng_9", l: 3, ok: "Ich kaufe das Auto nicht.", no: ["Ich nicht kaufe das Auto."] }
    ],
    haben: [
      { id: "hb_1", l: 1, ok: "Ich bin 25 Jahre alt.", no: ["Ich habe 25 Jahre."] },
      { id: "hb_2", l: 1, ok: "Ich habe ein Auto.", no: ["Bei mir ist ein Auto."] },
      { id: "hb_3", l: 1, t: "Ich ___ Hunger.", o: ["habe", "bin", "mache"] },
      { id: "hb_4", l: 2, ok: "Mir ist kalt.", no: ["Ich bin kalt."] },
      { id: "hb_5", l: 2, t: "Wir ___ zwei Kinder.", o: ["haben", "sind", "gibt"] },
      { id: "hb_6", l: 2, t: "Ich ___ keine Zeit.", o: ["habe", "bin", "mache"] },
      { id: "hb_7", l: 2, ok: "Hast du Geschwister?", no: ["Sind bei dir Geschwister?"] },
      { id: "hb_8", l: 2, t: "Wie alt ___ du?", o: ["bist", "hast", "machst"] },
      { id: "hb_9", l: 3, t: "Sie ___ Angst vor Hunden.", o: ["hat", "ist", "macht"] },
      { id: "hb_10", l: 2, t: "Du ___ recht.", o: ["hast", "bist", "machst"] }
    ],
    plural: [
      { id: "pl_1", l: 1, t: "Ich habe zwei ___.", o: ["Kinder", "Kind", "Kindern"] },
      { id: "pl_2", l: 1, t: "Auf dem Tisch liegen drei ___.", o: ["Bücher", "Buch", "Buchs"] },
      { id: "pl_3", l: 1, t: "Wir brauchen vier ___.", o: ["Tickets", "Ticket", "Ticketen"] },
      { id: "pl_4", l: 2, t: "Die Wohnung hat drei ___.", o: ["Zimmer", "Zimmers", "Zimmern"] },
      { id: "pl_5", l: 2, t: "Ich kaufe fünf ___.", o: ["Äpfel", "Apfel", "Apfels"] },
      { id: "pl_6", l: 2, t: "In Wien gibt es viele ___.", o: ["Kaffeehäuser", "Kaffeehaus", "Kaffeehäusern"] },
      { id: "pl_7", l: 2, t: "Er spricht drei ___.", o: ["Sprachen", "Sprache", "Sprachens"] },
      { id: "pl_8", l: 2, t: "Ich bleibe zwei ___ in Wien.", o: ["Wochen", "Woche", "Wochens"] },
      { id: "pl_9", l: 3, t: "Sie hat viele ___.", o: ["Freunde", "Freund", "Freunden"] },
      { id: "pl_10", l: 3, t: "Ich habe ein paar ___.", o: ["Fragen", "Frage", "Fragens"] }
    ],
    verbform: [
      { id: "vf_1", l: 1, t: "Ich ___ in Wien.", o: ["wohne", "wohnst", "wohnen"] },
      { id: "vf_2", l: 1, t: "Du ___ gut Deutsch.", o: ["sprichst", "sprechen", "spricht"] },
      { id: "vf_3", l: 1, t: "Er ___ aus Graz.", o: ["kommt", "kommen", "kommst"] },
      { id: "vf_4", l: 1, t: "Wir ___ Deutsch.", o: ["lernen", "lernt", "lerne"] },
      { id: "vf_5", l: 2, t: "Meine Schwester ___ jeden Tag mit der Bim.", o: ["fährt", "fahrt", "fahren"] },
      { id: "vf_6", l: 2, t: "Ihr ___ sehr nett.", o: ["seid", "sind", "bist"] },
      { id: "vf_7", l: 2, t: "Gestern ___ ich im Büro.", o: ["war", "bin", "waren"] },
      { id: "vf_8", l: 2, t: "Mein Bruder ___ gern Bücher.", o: ["liest", "lest", "lesen"] },
      { id: "vf_9", l: 2, t: "Was ___ du gern?", o: ["isst", "esst", "essen"] },
      { id: "vf_10", l: 3, t: "Die Kinder ___ im Park.", o: ["spielen", "spielt", "spielst"] },
      { id: "vf_11", l: 3, t: "___ Sie bitte hier!", o: ["Warten", "Wartet", "Wartest"] }
    ],
    praep: [
      { id: "pr_1", l: 1, t: "Ich gehe ___ Schule.", o: ["in die", "in der", "–"] },
      { id: "pr_2", l: 1, t: "Ich fahre ___ Graz.", o: ["nach", "zu", "in"] },
      { id: "pr_3", l: 1, t: "Ich komme ___ Italien.", o: ["aus", "von", "in"] },
      { id: "pr_4", l: 1, t: "Ich fahre ___ dem Bus.", o: ["mit", "–", "bei"] },
      { id: "pr_5", l: 2, t: "Ich gehe ___ Arzt.", o: ["zum", "beim", "nach"] },
      { id: "pr_6", l: 2, t: "Ich bin ___ Arzt.", o: ["beim", "zum", "nach"] },
      { id: "pr_7", l: 2, t: "Komm ___ mir!", o: ["zu", "bei", "nach"] },
      { id: "pr_8", l: 2, t: "Am Abend bin ich ___ Hause.", o: ["zu", "nach", "in"] },
      { id: "pr_9", l: 2, t: "Ich gehe jetzt ___ Hause.", o: ["nach", "zu", "in"] },
      { id: "pr_10", l: 2, t: "Ich warte ___ den Bus.", o: ["auf", "für", "–"] },
      { id: "pr_11", l: 3, t: "Ich denke oft ___ meine Familie.", o: ["an", "über", "auf"] },
      { id: "pr_12", l: 3, t: "Wir sprechen ___ das Wetter.", o: ["über", "von", "an"] },
      { id: "pr_13", l: 2, t: "Der Kurs beginnt ___ Montag.", o: ["am", "im", "um"] },
      { id: "pr_14", l: 2, t: "Der Kurs beginnt ___ acht Uhr.", o: ["um", "am", "im"] }
    ],
    perfekt: [
      { id: "pf_1", l: 1, t: "Ich ___ nach Wien gekommen.", o: ["bin", "habe", "werde"] },
      { id: "pf_2", l: 1, t: "Ich ___ Deutsch gelernt.", o: ["habe", "bin", "werde"] },
      { id: "pf_3", l: 1, t: "Wir ___ ins Kino gegangen.", o: ["sind", "haben", "seid"] },
      { id: "pf_4", l: 2, t: "Er ___ einen Brief geschrieben.", o: ["hat", "ist", "wird"] },
      { id: "pf_5", l: 2, t: "Sie ___ zu Hause geblieben.", o: ["ist", "hat", "wird"] },
      { id: "pf_6", l: 2, t: "___ du gut geschlafen?", o: ["Hast", "Bist", "Wirst"] },
      { id: "pf_7", l: 2, t: "Der Zug ___ pünktlich angekommen.", o: ["ist", "hat", "wird"] },
      { id: "pf_8", l: 2, t: "Ich ___ gestern viel gearbeitet.", o: ["habe", "bin", "werde"] },
      { id: "pf_9", l: 3, t: "Wann ___ du aufgestanden?", o: ["bist", "hast", "wirst"] },
      { id: "pf_10", l: 3, t: "Wir ___ mit dem Auto nach Italien gefahren.", o: ["sind", "haben", "seid"] }
    ],
    adjektiv: [
      { id: "aj_1", l: 1, ok: "Das ist ein gutes Buch.", no: ["Das ist ein Buch gut."] },
      { id: "aj_2", l: 1, ok: "Ich habe ein neues Auto.", no: ["Ich habe ein Auto neu."] },
      { id: "aj_3", l: 2, t: "Das ist ein ___ Film.", o: ["guter", "gute", "gutes"] },
      { id: "aj_4", l: 2, t: "Sie hat eine ___ Wohnung.", o: ["schöne", "schöner", "schönes"] },
      { id: "aj_5", l: 2, t: "Ich trinke einen ___ Kaffee.", o: ["kleinen", "kleine", "kleiner"] },
      { id: "aj_6", l: 2, t: "Der ___ Mann ist mein Opa.", o: ["alte", "alter", "alten"] },
      { id: "aj_7", l: 3, t: "Wir wohnen in einer ___ Stadt.", o: ["großen", "große", "großer"] },
      { id: "aj_8", l: 3, t: "Ich wünsche dir einen ___ Tag!", o: ["schönen", "schöne", "schöner"] },
      { id: "aj_9", l: 2, ok: "Die kleine Katze schläft.", no: ["Die Katze kleine schläft."] }
    ],
    schrift: [
      { id: "sc_1", l: 1, ok: "Der Hund ist im Garten.", no: ["Der hund ist im garten."] },
      { id: "sc_2", l: 1, ok: "Ich trinke Wasser.", no: ["Ich trinke wasser."] },
      { id: "sc_3", l: 1, ok: "Meine Mutter kocht heute.", no: ["Meine mutter kocht Heute."] },
      { id: "sc_4", l: 2, ok: "Wien ist eine schöne Stadt.", no: ["Wien ist eine Schöne stadt."] },
      { id: "sc_5", l: 2, ok: "Am Montag habe ich einen Termin.", no: ["Am montag habe Ich einen termin."] },
      { id: "sc_6", l: 2, ok: "Können Sie mir bitte helfen?", no: ["können sie mir Bitte helfen?"] }
    ]
  },
  /* Hörpaare: nur Audio, keine Übersetzung nötig */
  pairs: [
    ["Staat", "Stadt"], ["Miete", "Mitte"], ["Ofen", "offen"], ["Hüte", "Hütte"],
    ["fühlen", "füllen"], ["Höhle", "Hölle"], ["schon", "schön"], ["Bruder", "Brüder"],
    ["Mutter", "Mütter"], ["lesen", "lösen"], ["vier", "für"], ["kennen", "können"],
    ["Kuchen", "Küchen"], ["Tier", "Tür"], ["packen", "backen"], ["Bass", "Pass"]
  ],
  /* Wortschatz: d = Wort, g = Genus (m/f/n), p = Plural, c = Kategorie, de = Wort in Deutschland */
  vocab: [
    { d: "Mann", g: "m", p: "Männer", c: "n", l: 1 }, { d: "Frau", g: "f", p: "Frauen", c: "n", l: 1 },
    { d: "Kind", g: "n", p: "Kinder", c: "n", l: 1 }, { d: "Mutter", g: "f", p: "Mütter", c: "n", l: 1 },
    { d: "Vater", g: "m", p: "Väter", c: "n", l: 1 }, { d: "Bruder", g: "m", p: "Brüder", c: "n", l: 1 },
    { d: "Schwester", g: "f", p: "Schwestern", c: "n", l: 1 }, { d: "Freund", g: "m", p: "Freunde", c: "n", l: 1 },
    { d: "Familie", g: "f", p: "Familien", c: "n", l: 1 }, { d: "Name", g: "m", p: "Namen", c: "n", l: 1 },
    { d: "Haus", g: "n", p: "Häuser", c: "n", l: 1 }, { d: "Wohnung", g: "f", p: "Wohnungen", c: "n", l: 1 },
    { d: "Zimmer", g: "n", p: "Zimmer", c: "n", l: 1 }, { d: "Küche", g: "f", p: "Küchen", c: "n", l: 1 },
    { d: "Tür", g: "f", p: "Türen", c: "n", l: 1 }, { d: "Fenster", g: "n", p: "Fenster", c: "n", l: 1 },
    { d: "Tisch", g: "m", p: "Tische", c: "n", l: 1 }, { d: "Bett", g: "n", p: "Betten", c: "n", l: 1 },
    { d: "Schlüssel", g: "m", p: "Schlüssel", c: "n", l: 2 }, { d: "Stadt", g: "f", p: "Städte", c: "n", l: 1 },
    { d: "Straße", g: "f", p: "Straßen", c: "n", l: 1 }, { d: "Bahnhof", g: "m", p: "Bahnhöfe", c: "n", l: 1 },
    { d: "U-Bahn", g: "f", p: "U-Bahnen", c: "n", l: 1 }, { d: "Bus", g: "m", p: "Busse", c: "n", l: 1 },
    { d: "Zug", g: "m", p: "Züge", c: "n", l: 1 }, { d: "Auto", g: "n", p: "Autos", c: "n", l: 1 },
    { d: "Fahrrad", g: "n", p: "Fahrräder", c: "n", l: 1 }, { d: "Ticket", g: "n", p: "Tickets", c: "n", l: 1 },
    { d: "Arbeit", g: "f", p: "Arbeiten", c: "n", l: 1 }, { d: "Schule", g: "f", p: "Schulen", c: "n", l: 1 },
    { d: "Kurs", g: "m", p: "Kurse", c: "n", l: 1 }, { d: "Prüfung", g: "f", p: "Prüfungen", c: "n", l: 2 },
    { d: "Termin", g: "m", p: "Termine", c: "n", l: 2 }, { d: "Formular", g: "n", p: "Formulare", c: "n", l: 2 },
    { d: "Ausweis", g: "m", p: "Ausweise", c: "n", l: 2 }, { d: "Amt", g: "n", p: "Ämter", c: "n", l: 2 },
    { d: "Unterschrift", g: "f", p: "Unterschriften", c: "n", l: 2 }, { d: "Adresse", g: "f", p: "Adressen", c: "n", l: 1 },
    { d: "Arzt", g: "m", p: "Ärzte", c: "n", l: 1 }, { d: "Spital", g: "n", p: "Spitäler", c: "n", l: 2, de: "Krankenhaus" },
    { d: "Apotheke", g: "f", p: "Apotheken", c: "n", l: 2 }, { d: "Medikament", g: "n", p: "Medikamente", c: "n", l: 2 },
    { d: "Geld", g: "n", c: "n", l: 1 }, { d: "Geschäft", g: "n", p: "Geschäfte", c: "n", l: 1 },
    { d: "Markt", g: "m", p: "Märkte", c: "n", l: 2 }, { d: "Rechnung", g: "f", p: "Rechnungen", c: "n", l: 2 },
    { d: "Brot", g: "n", p: "Brote", c: "n", l: 1 }, { d: "Wasser", g: "n", c: "n", l: 1 },
    { d: "Milch", g: "f", c: "n", l: 1 }, { d: "Kaffee", g: "m", c: "n", l: 1 },
    { d: "Apfel", g: "m", p: "Äpfel", c: "n", l: 1 }, { d: "Fleisch", g: "n", c: "n", l: 1 },
    { d: "Gemüse", g: "n", c: "n", l: 1 }, { d: "Ei", g: "n", p: "Eier", c: "n", l: 1 },
    { d: "Käse", g: "m", c: "n", l: 1 }, { d: "Tag", g: "m", p: "Tage", c: "n", l: 1 },
    { d: "Woche", g: "f", p: "Wochen", c: "n", l: 1 }, { d: "Monat", g: "m", p: "Monate", c: "n", l: 1 },
    { d: "Jahr", g: "n", p: "Jahre", c: "n", l: 1 }, { d: "Uhr", g: "f", p: "Uhren", c: "n", l: 1 },
    { d: "Zeit", g: "f", c: "n", l: 1 }, { d: "Morgen", g: "m", c: "n", l: 1 },
    { d: "Abend", g: "m", p: "Abende", c: "n", l: 1 }, { d: "Nacht", g: "f", p: "Nächte", c: "n", l: 1 },
    { d: "Wetter", g: "n", c: "n", l: 1 }, { d: "Sonne", g: "f", c: "n", l: 1 },
    { d: "Regen", g: "m", c: "n", l: 1 }, { d: "Buch", g: "n", p: "Bücher", c: "n", l: 1 },
    { d: "Handy", g: "n", p: "Handys", c: "n", l: 1 }, { d: "Sprache", g: "f", p: "Sprachen", c: "n", l: 1 },
    { d: "Wort", g: "n", p: "Wörter", c: "n", l: 1 }, { d: "Frage", g: "f", p: "Fragen", c: "n", l: 1 },
    { d: "Antwort", g: "f", p: "Antworten", c: "n", l: 1 }, { d: "Problem", g: "n", p: "Probleme", c: "n", l: 1 },
    { d: "Hilfe", g: "f", c: "n", l: 1 },

    { d: "sein", c: "v", l: 1 }, { d: "haben", c: "v", l: 1 }, { d: "gehen", c: "v", l: 1 },
    { d: "kommen", c: "v", l: 1 }, { d: "fahren", c: "v", l: 1 }, { d: "machen", c: "v", l: 1 },
    { d: "arbeiten", c: "v", l: 1 }, { d: "lernen", c: "v", l: 1 }, { d: "sprechen", c: "v", l: 1 },
    { d: "verstehen", c: "v", l: 1 }, { d: "essen", c: "v", l: 1 }, { d: "trinken", c: "v", l: 1 },
    { d: "kaufen", c: "v", l: 1 }, { d: "bezahlen", c: "v", l: 1 }, { d: "wohnen", c: "v", l: 1 },
    { d: "schlafen", c: "v", l: 1 }, { d: "sehen", c: "v", l: 1 }, { d: "hören", c: "v", l: 1 },
    { d: "lesen", c: "v", l: 1 }, { d: "schreiben", c: "v", l: 1 }, { d: "fragen", c: "v", l: 1 },
    { d: "helfen", c: "v", l: 1 }, { d: "brauchen", c: "v", l: 1 }, { d: "suchen", c: "v", l: 1 },
    { d: "finden", c: "v", l: 1 }, { d: "geben", c: "v", l: 1 }, { d: "nehmen", c: "v", l: 1 },
    { d: "warten", c: "v", l: 1 }, { d: "anrufen", c: "v", l: 2 }, { d: "aufstehen", c: "v", l: 2 },

    { d: "gut", c: "a", l: 1 }, { d: "schlecht", c: "a", l: 1 }, { d: "groß", c: "a", l: 1 },
    { d: "klein", c: "a", l: 1 }, { d: "neu", c: "a", l: 1 }, { d: "alt", c: "a", l: 1 },
    { d: "schön", c: "a", l: 1 }, { d: "teuer", c: "a", l: 1 }, { d: "billig", c: "a", l: 1 },
    { d: "kalt", c: "a", l: 1 }, { d: "warm", c: "a", l: 1 }, { d: "müde", c: "a", l: 1 },
    { d: "krank", c: "a", l: 1 }, { d: "gesund", c: "a", l: 1 }, { d: "schnell", c: "a", l: 1 },
    { d: "langsam", c: "a", l: 1 }, { d: "wichtig", c: "a", l: 2 }, { d: "richtig", c: "a", l: 1 },
    { d: "falsch", c: "a", l: 1 }, { d: "schwer", c: "a", l: 2 },

    { d: "Jänner", g: "m", c: "at", l: 1, de: "Januar" }, { d: "Sackerl", g: "n", p: "Sackerl", c: "at", l: 1, de: "Tüte" },
    { d: "Paradeiser", g: "m", p: "Paradeiser", c: "at", l: 2, de: "Tomate" }, { d: "Erdapfel", g: "m", p: "Erdäpfel", c: "at", l: 2, de: "Kartoffel" },
    { d: "Marille", g: "f", p: "Marillen", c: "at", l: 2, de: "Aprikose" }, { d: "Topfen", g: "m", c: "at", l: 2, de: "Quark" },
    { d: "Semmel", g: "f", p: "Semmeln", c: "at", l: 1, de: "Brötchen" }, { d: "Schlagobers", g: "n", c: "at", l: 2, de: "Sahne" },
    { d: "Sessel", g: "m", p: "Sessel", c: "at", l: 1, de: "Stuhl" }, { d: "Kasten", g: "m", p: "Kästen", c: "at", l: 2, de: "Schrank" },
    { d: "Stiege", g: "f", p: "Stiegen", c: "at", l: 2, de: "Treppe" }, { d: "Mistkübel", g: "m", p: "Mistkübel", c: "at", l: 2, de: "Mülleimer" },
    { d: "Bim", g: "f", c: "at", l: 1, de: "Straßenbahn" }, { d: "Matura", g: "f", c: "at", l: 2, de: "Abitur" },
    { d: "Faschierte", g: "n", c: "at", l: 2, de: "Hackfleisch" }, { d: "Palatschinke", g: "f", p: "Palatschinken", c: "at", l: 2, de: "Pfannkuchen" },
    { d: "Jause", g: "f", p: "Jausen", c: "at", l: 2, de: "Zwischenmahlzeit" }, { d: "Kassa", g: "f", p: "Kassen", c: "at", l: 1, de: "Kasse" },
    { d: "Kaffeehaus", g: "n", p: "Kaffeehäuser", c: "at", l: 1, de: "Café" }, { d: "heuer", c: "at", l: 2, de: "dieses Jahr" },
    { d: "Servus!", c: "at", l: 1, de: "Hallo! / Tschüss!" }, { d: "Grüß Gott!", c: "at", l: 1, de: "Guten Tag!" }
  ],
  /* Gewichtung der Module pro Erstsprache (0–3). Kernmodule sind immer dabei. */
  profiles: {
    en: { artikel: 0, genus: 3, v2: 3, klammer: 3, neben: 3, kasus: 3, subjekt: 0, kopula: 0, negation: 1, haben: 2, plural: 0, verbform: 2, praep: 2, perfekt: 3, adjektiv: 2, tekamolo: 3, schrift: 1, laute: 2 },
    bks: { artikel: 3, genus: 2, v2: 2, klammer: 3, neben: 3, kasus: 2, subjekt: 3, kopula: 0, negation: 3, haben: 2, plural: 0, verbform: 1, praep: 3, perfekt: 3, adjektiv: 2, tekamolo: 1, schrift: 1, laute: 2 },
    tr: { artikel: 3, genus: 3, v2: 3, klammer: 2, neben: 2, kasus: 2, subjekt: 3, kopula: 3, negation: 2, haben: 3, plural: 3, verbform: 1, praep: 3, perfekt: 2, adjektiv: 2, tekamolo: 1, schrift: 1, laute: 2 },
    ar: { artikel: 2, genus: 2, v2: 3, klammer: 3, neben: 3, kasus: 3, subjekt: 3, kopula: 3, negation: 2, haben: 3, plural: 1, verbform: 1, praep: 2, perfekt: 3, adjektiv: 3, tekamolo: 1, schrift: 3, laute: 3 },
    pl: { artikel: 3, genus: 2, v2: 2, klammer: 3, neben: 3, kasus: 2, subjekt: 3, kopula: 1, negation: 3, haben: 2, plural: 0, verbform: 1, praep: 3, perfekt: 2, adjektiv: 2, tekamolo: 1, schrift: 1, laute: 3 },
    ro: { artikel: 2, genus: 2, v2: 3, klammer: 3, neben: 3, kasus: 2, subjekt: 3, kopula: 0, negation: 3, haben: 3, plural: 0, verbform: 1, praep: 2, perfekt: 3, adjektiv: 3, tekamolo: 1, schrift: 1, laute: 2 },
    uk: { artikel: 3, genus: 2, v2: 2, klammer: 3, neben: 3, kasus: 2, subjekt: 2, kopula: 3, negation: 3, haben: 3, plural: 1, verbform: 1, praep: 3, perfekt: 3, adjektiv: 2, tekamolo: 1, schrift: 3, laute: 3 },
    hu: { artikel: 1, genus: 3, v2: 3, klammer: 3, neben: 3, kasus: 3, subjekt: 3, kopula: 3, negation: 3, haben: 3, plural: 3, verbform: 1, praep: 3, perfekt: 3, adjektiv: 2, tekamolo: 1, schrift: 1, laute: 1 },
    fa: { artikel: 3, genus: 3, v2: 3, klammer: 2, neben: 2, kasus: 3, subjekt: 3, kopula: 1, negation: 3, haben: 1, plural: 3, verbform: 1, praep: 2, perfekt: 2, adjektiv: 3, tekamolo: 1, schrift: 3, laute: 3 }
  },
  /* Fragebogen für nicht erfasste Sprachen: Antwort w (ja oder nein) setzt Modul m auf Gewicht 3, sonst e */
  quiz: [
    { id: "q1", m: "artikel", w: "no", e: 1 }, { id: "q2", m: "genus", w: "no", e: 2 },
    { id: "q3", m: "v2", w: "yes", e: 2 }, { id: "q4", m: "subjekt", w: "yes", e: 0 },
    { id: "q5", m: "kopula", w: "yes", e: 0 }, { id: "q6", m: "negation", w: "yes", e: 1 },
    { id: "q7", m: "haben", w: "no", e: 1 }, { id: "q8", m: "plural", w: "yes", e: 0 },
    { id: "q9", m: "verbform", w: "no", e: 1 }, { id: "q10", m: "praep", w: "no", e: 2 },
    { id: "q11", m: "adjektiv", w: "yes", e: 2 }, { id: "q12", m: "schrift", w: "no", e: 1 },
    { id: "q13", m: "laute", w: "no", e: 1 }, { id: "q14", m: "kasus", w: "no", e: 2 }
  ],
  customBase: { klammer: 3, neben: 3, perfekt: 2, tekamolo: 1 },
  langs: [
    { id: "bks", name: "Bosanski / Hrvatski / Srpski" }, { id: "tr", name: "Türkçe" },
    { id: "ar", name: "العربية", rtl: 1 }, { id: "pl", name: "Polski" },
    { id: "ro", name: "Română" }, { id: "uk", name: "Українська" },
    { id: "hu", name: "Magyar" }, { id: "fa", name: "فارسی / دری", rtl: 1 },
    { id: "en", name: "English" }
  ]
};

/* ===================== Erweiterung 1.1.0 ===================== */
(function (C) {
  C.version = "1.2.0";
  C.modules.push({ id: "pronomen", icon: "👤" }, { id: "anrede", icon: "🤝" }, { id: "ff", icon: "🎭" });
  var add = function (m, a) { C.items[m] = (C.items[m] || []).concat(a); };
  add("v2", [
    { id: "v2_11", l: 1, c: ["Heute", "arbeite", "ich", "nicht."] },
    { id: "v2_12", l: 1, c: ["Am Abend", "sehen", "wir", "einen Film."] },
    { id: "v2_13", l: 1, c: ["Dann", "gehe", "ich", "nach Hause."] },
    { id: "v2_14", l: 2, c: ["Am Wochenende", "besuchen", "wir", "meine Großeltern."] },
    { id: "v2_15", l: 2, c: ["Um sieben Uhr", "frühstückt", "die Familie."] },
    { id: "v2_16", l: 2, c: ["Im Sommer", "fahren", "viele Wiener", "an den Neusiedler See."] },
    { id: "v2_17", l: 3, c: ["Deshalb", "muss", "ich", "heute", "länger arbeiten."] },
    { id: "v2_18", l: 3, c: ["Trotzdem", "ist", "er", "pünktlich", "gekommen."] }
  ]);
  add("klammer", [
    { id: "kl_13", l: 1, c: ["Ich", "möchte", "einen Tee", "trinken."] },
    { id: "kl_14", l: 1, c: ["Wir", "haben", "Brot", "gekauft."] },
    { id: "kl_15", l: 1, c: ["Kannst", "du", "mir", "helfen?"] },
    { id: "kl_16", l: 2, c: ["Der Kurs", "fängt", "um neun Uhr", "an."] },
    { id: "kl_17", l: 2, c: ["Ich", "habe", "meinen Schlüssel", "verloren."] },
    { id: "kl_18", l: 2, c: ["Du", "musst", "das Formular", "unterschreiben."] },
    { id: "kl_19", l: 2, c: ["Sie", "macht", "das Fenster", "zu."] },
    { id: "kl_20", l: 3, c: ["Ich", "habe", "mich", "für den Kurs", "angemeldet."] },
    { id: "kl_21", l: 1, ok: "Ich stehe um sieben Uhr auf.", no: ["Ich aufstehe um sieben Uhr."] },
    { id: "kl_22", l: 1, ok: "Wir kaufen heute ein.", no: ["Wir einkaufen heute."] },
    { id: "kl_23", l: 2, ok: "Der Bus kommt um acht an.", no: ["Der Bus ankommt um acht."] }
  ]);
  add("neben", [
    { id: "nb_11", l: 1, c: ["Ich komme nicht,", "weil", "ich", "keine Zeit", "habe."] },
    { id: "nb_12", l: 1, c: ["Ich hoffe,", "dass", "es", "dir", "gut geht."] },
    { id: "nb_13", l: 2, c: ["Er sagt,", "dass", "er", "in Favoriten", "wohnt."] },
    { id: "nb_14", l: 2, c: ["Ich bin müde,", "weil", "ich", "schlecht", "geschlafen", "habe."] },
    { id: "nb_15", l: 2, c: ["Weißt du,", "wann", "der Zug", "abfährt?"] },
    { id: "nb_16", l: 2, c: ["Wir bleiben zu Hause,", "wenn", "es", "regnet."] },
    { id: "nb_17", l: 3, c: ["Ich habe gehört,", "dass", "sie", "eine neue Arbeit", "gefunden", "hat."] },
    { id: "nb_18", l: 3, c: ["Kannst du mir sagen,", "wo", "ich", "ein Ticket", "kaufen", "kann?"] }
  ]);
  add("tekamolo", [
    { id: "tk_7", l: 1, c: ["Ich", "bin", "heute", "zu Hause."] },
    { id: "tk_8", l: 1, c: ["Wir", "essen", "am Abend", "im Restaurant."] },
    { id: "tk_9", l: 2, c: ["Sie", "fliegt", "nächste Woche", "nach Berlin."] },
    { id: "tk_10", l: 2, c: ["Die Kinder", "spielen", "am Nachmittag", "im Park."] },
    { id: "tk_11", l: 2, c: ["Ich", "gehe", "jeden Samstag", "mit meiner Freundin", "auf den Markt."] },
    { id: "tk_12", l: 3, c: ["Er", "ist", "gestern", "mit dem Auto", "nach Linz", "gefahren."] }
  ]);
  add("kasus", [
    { id: "ka_13", l: 1, t: "Ich habe ___ Hund.", o: ["einen", "ein", "einem"] },
    { id: "ka_14", l: 1, t: "Ich kaufe ___ Brot.", o: ["das", "den", "dem"] },
    { id: "ka_15", l: 2, t: "Ich danke ___ für die Hilfe.", o: ["dir", "dich", "du"] },
    { id: "ka_16", l: 2, t: "Kannst du ___ helfen?", o: ["mir", "mich", "ich"] },
    { id: "ka_17", l: 2, t: "Ich besuche ___ Freund.", o: ["meinen", "mein", "meinem"] },
    { id: "ka_18", l: 2, t: "Die Tasche gehört ___ Frau.", o: ["der", "die", "den"] },
    { id: "ka_19", l: 2, t: "Ich komme aus ___ Schule.", o: ["der", "die", "den"] },
    { id: "ka_20", l: 3, t: "Er stellt die Flasche in ___ Kühlschrank.", o: ["den", "dem", "der"] },
    { id: "ka_21", l: 3, t: "Der Sessel steht neben ___ Tür.", o: ["der", "die", "den"] }
  ]);
  add("artikel", [
    { id: "ar_13", l: 1, t: "Das ist ___ Buch.", o: ["ein", "–", "der"] },
    { id: "ar_14", l: 1, t: "Ich bin ___ Student.", o: ["–", "ein", "der"] },
    { id: "ar_15", l: 1, t: "Wir haben ___ Hunger.", o: ["–", "einen", "den"] },
    { id: "ar_16", l: 2, t: "Ich fahre in ___ Schweiz.", o: ["die", "–", "der"] },
    { id: "ar_17", l: 2, t: "___ Mond scheint heute hell.", o: ["Der", "Ein", "–"] },
    { id: "ar_18", l: 2, t: "Er ist ___ guter Arzt.", o: ["ein", "–", "der"] },
    { id: "ar_19", l: 2, t: "Ich spreche ___ Deutsch.", o: ["–", "das", "ein"] },
    { id: "ar_20", l: 3, t: "___ Donau fließt durch Wien.", o: ["Die", "Eine", "–"] },
    { id: "ar_21", l: 3, t: "Sie spielt gern ___ Fußball.", o: ["–", "den", "einen"] }
  ]);
  add("subjekt", [
    { id: "su_9", l: 1, ok: "Ich bin müde.", no: ["Bin müde."] },
    { id: "su_10", l: 1, ok: "Wo wohnst du?", no: ["Wo wohnst?"] },
    { id: "su_11", l: 2, ok: "Es schneit.", no: ["Schneit."] },
    { id: "su_12", l: 2, ok: "Wie geht es dir?", no: ["Wie geht dir?"] },
    { id: "su_13", l: 2, ok: "Morgen arbeite ich nicht.", no: ["Morgen arbeite nicht."] },
    { id: "su_14", l: 3, ok: "Ich glaube, dass er krank ist.", no: ["Ich glaube, dass krank ist."] }
  ]);
  add("kopula", [
    { id: "ko_9", l: 1, ok: "Das Wetter ist schön.", no: ["Das Wetter schön."] },
    { id: "ko_10", l: 1, ok: "Du bist nett.", no: ["Du nett."] },
    { id: "ko_11", l: 2, ok: "Meine Eltern sind in Graz.", no: ["Meine Eltern in Graz."] },
    { id: "ko_12", l: 2, ok: "Das ist kein Problem.", no: ["Das kein Problem."] },
    { id: "ko_13", l: 2, ok: "Heute ist Montag.", no: ["Heute Montag."] }
  ]);
  add("negation", [
    { id: "ng_10", l: 1, t: "Ich habe ___ Zeit.", o: ["keine", "nicht", "kein"] },
    { id: "ng_11", l: 1, t: "Das ist ___ richtig.", o: ["nicht", "kein", "keine"] },
    { id: "ng_12", l: 2, ok: "Ich verstehe nichts.", no: ["Ich verstehe nicht nichts."] },
    { id: "ng_13", l: 2, ok: "Wir haben keinen Hunger.", no: ["Wir haben nicht Hunger."] },
    { id: "ng_14", l: 2, ok: "Ich kenne hier niemanden.", no: ["Ich kenne hier nicht niemanden."] },
    { id: "ng_15", l: 3, ok: "Sie hat noch nie Schnitzel gegessen.", no: ["Sie hat noch nie kein Schnitzel gegessen."] }
  ]);
  add("haben", [
    { id: "hb_11", l: 1, t: "Ich ___ Durst.", o: ["habe", "bin", "mache"] },
    { id: "hb_12", l: 1, ok: "Mein Bruder ist zehn Jahre alt.", no: ["Mein Bruder hat zehn Jahre."] },
    { id: "hb_13", l: 2, t: "Mir ___ heiß.", o: ["ist", "bin", "habe"] },
    { id: "hb_14", l: 2, t: "___ Sie einen Ausweis?", o: ["Haben", "Sind", "Gibt"] },
    { id: "hb_15", l: 2, ok: "Ich habe Kopfschmerzen.", no: ["Mir ist Kopfschmerzen."] },
    { id: "hb_16", l: 3, t: "Ich ___ Lust auf einen Kaffee.", o: ["habe", "bin", "mache"] }
  ]);
  add("plural", [
    { id: "pl_11", l: 1, t: "Ich habe zwei ___.", o: ["Brüder", "Bruder", "Bruders"] },
    { id: "pl_12", l: 1, t: "Wir haben drei ___.", o: ["Katzen", "Katze", "Katzes"] },
    { id: "pl_13", l: 2, t: "Der Kurs dauert sechs ___.", o: ["Monate", "Monat", "Monats"] },
    { id: "pl_14", l: 2, t: "Ich brauche zwei ___.", o: ["Semmeln", "Semmel", "Semmels"] },
    { id: "pl_15", l: 2, t: "In der Klasse sind zwölf ___.", o: ["Schüler", "Schülers", "Schülern"] },
    { id: "pl_16", l: 3, t: "Sie hat schon viele ___ besucht.", o: ["Länder", "Land", "Lande"] }
  ]);
  add("verbform", [
    { id: "vf_12", l: 1, t: "Ich ___ Anna.", o: ["heiße", "heißt", "heißen"] },
    { id: "vf_13", l: 1, t: "Wo ___ du?", o: ["wohnst", "wohnt", "wohne"] },
    { id: "vf_14", l: 1, t: "Wir ___ aus Wien.", o: ["kommen", "kommt", "komme"] },
    { id: "vf_15", l: 2, t: "Mein Vater ___ in einem Hotel.", o: ["arbeitet", "arbeiten", "arbeite"] },
    { id: "vf_16", l: 2, t: "___ du mir helfen?", o: ["Kannst", "Kann", "Könnt"] },
    { id: "vf_17", l: 3, t: "Er ___ nicht, wo sie wohnt.", o: ["weiß", "weißt", "wissen"] }
  ]);
  add("praep", [
    { id: "pr_15", l: 1, t: "Ich wohne ___ Wien.", o: ["in", "nach", "zu"] },
    { id: "pr_16", l: 1, t: "Ich arbeite ___ Montag bis Freitag.", o: ["von", "aus", "am"] },
    { id: "pr_17", l: 2, t: "Wir gehen ___ Kino.", o: ["ins", "im", "nach"] },
    { id: "pr_18", l: 2, t: "Wir sind ___ Kino.", o: ["im", "ins", "nach"] },
    { id: "pr_19", l: 2, t: "Ich fahre ___ meiner Schwester.", o: ["zu", "nach", "bei"] },
    { id: "pr_20", l: 2, t: "Das Bild hängt ___ der Wand.", o: ["an", "auf", "in"] },
    { id: "pr_21", l: 3, t: "Ich interessiere mich ___ Musik.", o: ["für", "an", "über"] },
    { id: "pr_22", l: 3, t: "Sie hat Angst ___ der Prüfung.", o: ["vor", "von", "für"] },
    { id: "pr_23", l: 2, t: "Ich lerne Deutsch ___ zwei Jahren.", o: ["seit", "vor", "für"] }
  ]);
  add("perfekt", [
    { id: "pf_11", l: 1, t: "Ich ___ einen Kaffee getrunken.", o: ["habe", "bin", "werde"] },
    { id: "pf_12", l: 1, t: "Er ___ nach Hause gegangen.", o: ["ist", "hat", "wird"] },
    { id: "pf_13", l: 2, t: "Wir ___ lange gewartet.", o: ["haben", "sind", "seid"] },
    { id: "pf_14", l: 2, t: "Ich ___ um sieben Uhr aufgewacht.", o: ["bin", "habe", "werde"] },
    { id: "pf_15", l: 2, t: "Sie ___ das Buch gelesen.", o: ["hat", "ist", "wird"] },
    { id: "pf_16", l: 2, t: "Was ___ passiert?", o: ["ist", "hat", "wird"] },
    { id: "pf_17", l: 3, t: "Die Kinder ___ schnell eingeschlafen.", o: ["sind", "haben", "werden"] },
    { id: "pf_18", l: 3, t: "Ich ___ in Linz umgestiegen.", o: ["bin", "habe", "werde"] }
  ]);
  add("adjektiv", [
    { id: "aj_10", l: 1, ok: "Das ist eine schöne Stadt.", no: ["Das ist eine Stadt schöne."] },
    { id: "aj_11", l: 1, ok: "Ich trinke kaltes Wasser.", no: ["Ich trinke Wasser kaltes."] },
    { id: "aj_12", l: 1, ok: "Wir haben einen großen Garten.", no: ["Wir haben einen Garten großen."] },
    { id: "aj_13", l: 1, ok: "Sie kauft ein rotes Kleid.", no: ["Sie kauft ein Kleid rotes."] },
    { id: "aj_14", l: 2, ok: "Mein neuer Nachbar ist sehr nett.", no: ["Mein Nachbar neuer ist sehr nett."] },
    { id: "aj_15", l: 2, ok: "Wo ist mein blauer Pullover?", no: ["Wo ist mein Pullover blauer?"] },
    { id: "aj_16", l: 1, t: "Das ist ein ___ Hund.", o: ["kleiner", "kleine", "kleines"] },
    { id: "aj_17", l: 2, t: "Ich suche eine ___ Wohnung.", o: ["billige", "billiger", "billiges"] },
    { id: "aj_18", l: 2, t: "Er hat ein ___ Fahrrad.", o: ["neues", "neuer", "neue"] },
    { id: "aj_19", l: 3, t: "Mit dem ___ Auto fahren wir nicht mehr.", o: ["alten", "alte", "altes"] },
    { id: "aj_20", l: 3, t: "Sie arbeitet in einem ___ Büro.", o: ["kleinen", "kleines", "kleine"] }
  ]);
  add("schrift", [
    { id: "sc_7", l: 1, ok: "Das Kind spielt mit dem Ball.", no: ["Das kind spielt mit dem ball."] },
    { id: "sc_8", l: 1, ok: "Ich habe einen Bruder und eine Schwester.", no: ["Ich habe einen bruder und eine schwester."] },
    { id: "sc_9", l: 2, ok: "Wir fahren mit dem Zug nach Linz.", no: ["Wir Fahren mit dem zug nach linz."] },
    { id: "sc_10", l: 3, ok: "Das Essen schmeckt gut.", no: ["Das essen schmeckt Gut."] }
  ]);
  add("pronomen", [
    { id: "pn_1", l: 1, t: "Meine Mutter ist krank. ___ schläft.", o: ["Sie", "Er", "Es"] },
    { id: "pn_2", l: 1, t: "Das ist mein Bruder. ___ heißt Ali.", o: ["Er", "Sie", "Es"] },
    { id: "pn_3", l: 1, t: "Das Kind weint. ___ ist müde.", o: ["Es", "Er", "Sie"] },
    { id: "pn_4", l: 2, t: "Wo ist der Schlüssel? ___ liegt auf dem Tisch.", o: ["Er", "Sie", "Es"] },
    { id: "pn_5", l: 2, t: "Die Tasche ist neu. ___ war teuer.", o: ["Sie", "Er", "Es"] },
    { id: "pn_6", l: 2, t: "Mein Vater arbeitet viel. ___ ist Koch.", o: ["Er", "Sie", "Es"] }
  ]);
  add("anrede", [
    { id: "du_1", l: 1, ok: "Wie geht es Ihnen, Herr Huber?", no: ["Wie geht es dir, Herr Huber?"] },
    { id: "du_2", l: 1, ok: "Frau Novak, haben Sie Zeit?", no: ["Frau Novak, hast du Zeit?"] },
    { id: "du_3", l: 2, t: "Entschuldigung, können ___ mir helfen?", o: ["Sie", "du", "ihr"] },
    { id: "du_4", l: 2, t: "Herr Doktor, ich danke ___.", o: ["Ihnen", "dir", "euch"] },
    { id: "du_5", l: 2, ok: "Mama, kannst du mir helfen?", no: ["Mama, können Sie mir helfen?"] },
    { id: "du_6", l: 2, t: "Frau Berger, ist das ___ Tasche?", o: ["Ihre", "deine", "eure"] }
  ]);
  var N = function (d, g, p, l) { return { d: d, g: g, p: p || undefined, c: "n", l: l || 1 }; };
  var W = function (c, l, list) { return list.split(" ").map(function (d) { return { d: d, c: c, l: l }; }); };
  C.vocab = C.vocab.concat([
    N("Hund", "m", "Hunde"), N("Katze", "f", "Katzen"), N("Garten", "m", "Gärten"), N("Park", "m", "Parks"), N("Kino", "n", "Kinos"), N("Film", "m", "Filme"),
    N("Brief", "m", "Briefe"), N("Geschenk", "n", "Geschenke"), N("Eltern", "pl"), N("Leute", "pl"), N("Sohn", "m", "Söhne"), N("Tochter", "f", "Töchter"),
    N("Nachbar", "m", "Nachbarn"), N("Kollege", "m", "Kollegen", 2), N("Chef", "m", "Chefs", 2), N("Lehrer", "m", "Lehrer"), N("Schüler", "m", "Schüler"), N("Mensch", "m", "Menschen"),
    N("Büro", "n", "Büros"), N("Hotel", "n", "Hotels"), N("Restaurant", "n", "Restaurants"), N("Supermarkt", "m", "Supermärkte"), N("Bank", "f", "Banken"), N("Post", "f"),
    N("Polizei", "f"), N("Platz", "m", "Plätze"), N("Haltestelle", "f", "Haltestellen", 2), N("Flughafen", "m", "Flughäfen", 2), N("Land", "n", "Länder"), N("Berg", "m", "Berge"),
    N("Tasche", "f", "Taschen"), N("Flasche", "f", "Flaschen"), N("Glas", "n", "Gläser"), N("Kühlschrank", "m", "Kühlschränke", 2), N("Bild", "n", "Bilder"), N("Kleid", "n", "Kleider"),
    N("Hose", "f", "Hosen"), N("Schuh", "m", "Schuhe"), N("Jacke", "f", "Jacken"), N("Tee", "m"), N("Bier", "n"), N("Saft", "m", "Säfte"),
    N("Zucker", "m"), N("Salz", "n"), N("Obst", "n"), N("Suppe", "f", "Suppen"), N("Kuchen", "m", "Kuchen"), N("Frühstück", "n"),
    N("Hunger", "m"), N("Durst", "m"), N("Kopf", "m", "Köpfe"), N("Hand", "f", "Hände"), N("Fuß", "m", "Füße"), N("Auge", "n", "Augen"),
    N("Zahn", "m", "Zähne"), N("Wochenende", "n", "Wochenenden"), N("Sommer", "m"), N("Winter", "m"), N("Stunde", "f", "Stunden"), N("Preis", "m", "Preise", 2),
    N("Urlaub", "m", "", 2), N("Geburtstag", "m", "Geburtstage"), N("Vertrag", "m", "Verträge", 2), N("Miete", "f", "Mieten", 2)
  ], W("v", 1, "können müssen wollen wissen kennen sagen denken bleiben bringen kochen spielen beginnen vergessen verlieren besuchen unterschreiben einkaufen kosten heißen mögen"),
    W("a", 1, "lang kurz jung nett fertig frei voll leer sauber einfach pünktlich glücklich"),
    W("w", 1, "heute morgen gestern jetzt immer nie oft hier dort sehr vielleicht leider bitte danke"));
  /* Verbformen: nur zum Finden von Beispielsätzen */
  C.forms = {
    sein: "bin bist ist sind seid war", haben: "habe hast hat haben habt", gehen: "gehe gehst geht gehen gegangen", kommen: "komme kommst kommt kommen gekommen",
    fahren: "fahre fährst fährt fahren gefahren", machen: "mache machst macht machen gemacht", arbeiten: "arbeite arbeitest arbeitet arbeiten gearbeitet", lernen: "lerne lernst lernt lernen gelernt",
    sprechen: "spreche sprichst spricht sprechen gesprochen", verstehen: "verstehe verstehst versteht verstanden", essen: "esse isst essen gegessen", trinken: "trinke trinkst trinkt trinken getrunken",
    kaufen: "kaufe kaufst kauft kaufen gekauft", bezahlen: "bezahle bezahlt bezahlen", wohnen: "wohne wohnst wohnt wohnen gewohnt", schlafen: "schlafe schläfst schläft schlafen geschlafen",
    sehen: "sehe siehst sieht sehen gesehen", "hören": "höre hörst hört hören gehört", lesen: "lese liest lesen gelesen", schreiben: "schreibe schreibst schreibt schreiben geschrieben",
    fragen: "frage fragst fragt fragen gefragt", helfen: "helfe hilfst hilft helfen geholfen", brauchen: "brauche brauchst braucht brauchen", suchen: "suche suchst sucht suchen gesucht",
    finden: "finde findest findet finden gefunden", geben: "gebe gibst gibt geben gegeben", nehmen: "nehme nimmst nimmt nehmen genommen", warten: "warte wartest wartet warten gewartet",
    anrufen: "rufe rufst ruft angerufen", aufstehen: "stehe stehst steht aufgestanden", "können": "kann kannst können könnt", "müssen": "muss musst müssen", wollen: "will willst wollen",
    wissen: "weiß weißt wissen", kennen: "kenne kennst kennt kennen", sagen: "sage sagst sagt sagen gesagt", denken: "denke denkst denkt denken", bleiben: "bleibe bleibst bleibt bleiben geblieben",
    bringen: "bringe bringst bringt bringen", kochen: "koche kochst kocht kochen", spielen: "spiele spielst spielt spielen", beginnen: "beginne beginnt beginnen", vergessen: "vergesse vergisst",
    verlieren: "verliere verliert verloren", besuchen: "besuche besuchst besucht besuchen", unterschreiben: "unterschreibe unterschreibt unterschreiben", einkaufen: "einkaufen eingekauft",
    kosten: "kostet kosten", "heißen": "heiße heißt heißen", "mögen": "mag magst möchte möchtest mögen"
  };
  C.noEx = ["Morgen", "danke", "Bank", "Post"];
  /* Gewichte: neue Module und Anpassungen nach der Recherche */
  var P = C.profiles, set = function (id, o) { for (var k in o) P[id][k] = o[k]; };
  set("en", { pronomen: 2, anrede: 2 }); set("bks", { pronomen: 2, anrede: 1, schrift: 2 }); set("tr", { pronomen: 3, anrede: 1, schrift: 2 });
  set("ar", { pronomen: 2, anrede: 3, verbform: 2 }); set("pl", { pronomen: 2, anrede: 2, schrift: 2 }); set("ro", { pronomen: 2, anrede: 1, laute: 3 });
  set("uk", { pronomen: 2, anrede: 1 }); set("hu", { pronomen: 3, anrede: 2 }); set("fa", { pronomen: 3, anrede: 1 });
  P.sr = Object.assign({}, P.bks); P.prs = Object.assign({}, P.fa);
  var mk = function (s) { var k = "artikel genus v2 klammer neben kasus subjekt kopula negation haben plural verbform praep perfekt adjektiv tekamolo schrift laute pronomen anrede".split(" "), o = {}; s.split(" ").forEach(function (x, i) { o[k[i]] = +x; }); return o; };
  P.ru = mk("3 2 2 3 3 2 2 3 3 3 1 1 3 3 2 1 3 3 2 1");
  P.sk = mk("3 2 2 3 3 2 3 0 3 2 0 1 3 3 2 1 2 2 2 1"); P.cs = Object.assign({}, P.sk);
  P.sl = mk("3 2 2 3 3 2 3 0 3 1 0 1 3 3 2 1 2 2 2 1");
  P.bg = mk("2 2 2 3 3 3 3 0 3 2 1 1 2 3 2 1 3 3 2 1"); P.mk = Object.assign({}, P.bg);
  P.sq = mk("2 2 2 3 3 2 3 0 3 1 0 1 2 3 3 1 1 3 2 3");
  P.ku = mk("3 3 3 2 2 3 3 1 3 3 3 1 2 2 3 1 2 2 3 1");
  P.zh = mk("3 3 3 3 3 3 3 3 1 2 3 3 2 3 2 0 3 3 2 1");
  P.it = mk("1 2 3 3 3 3 3 0 3 3 0 1 2 1 3 2 2 2 2 1");
  P.es = mk("1 2 3 3 3 3 3 0 3 3 0 1 2 3 3 2 1 2 2 1"); P.pt = Object.assign({}, P.es);
  P.fr = mk("1 2 3 3 3 3 0 0 2 3 0 1 2 1 3 2 1 2 2 1");
  P.el = mk("1 1 3 3 3 2 3 0 3 1 0 1 2 3 1 1 3 3 2 1");
  C.langs = [
    { id: "bks", name: "Bosanski / Crnogorski / Hrvatski / Srpski", de: "Bosnisch / Montenegrinisch / Kroatisch / Serbisch (lateinisch)", en: "Bosnian / Montenegrin / Croatian / Serbian (Latin)" },
    { id: "sr", name: "Српски", de: "Serbisch (kyrillisch)", en: "Serbian (Cyrillic)" },
    { id: "tr", name: "Türkçe", de: "Türkisch", en: "Turkish" }, { id: "ar", name: "العربية", rtl: 1, de: "Arabisch", en: "Arabic" },
    { id: "pl", name: "Polski", de: "Polnisch", en: "Polish" }, { id: "ro", name: "Română", de: "Rumänisch", en: "Romanian" },
    { id: "uk", name: "Українська", de: "Ukrainisch", en: "Ukrainian" }, { id: "hu", name: "Magyar", de: "Ungarisch", en: "Hungarian" },
    { id: "fa", name: "فارسی", rtl: 1, de: "Persisch (Farsi)", en: "Persian (Farsi)" }, { id: "prs", name: "دری", rtl: 1, de: "Dari", en: "Dari" },
    { id: "ru", name: "Русский", de: "Russisch", en: "Russian" }, { id: "sk", name: "Slovenčina", de: "Slowakisch", en: "Slovak" },
    { id: "cs", name: "Čeština", de: "Tschechisch", en: "Czech" }, { id: "it", name: "Italiano", de: "Italienisch", en: "Italian" },
    { id: "sl", name: "Slovenščina", de: "Slowenisch", en: "Slovene" }, { id: "fr", name: "Français", de: "Französisch", en: "French" },
    { id: "es", name: "Español", de: "Spanisch", en: "Spanish" }, { id: "pt", name: "Português", de: "Portugiesisch", en: "Portuguese" },
    { id: "bg", name: "Български", de: "Bulgarisch", en: "Bulgarian" }, { id: "el", name: "Ελληνικά", de: "Griechisch", en: "Greek" },
    { id: "mk", name: "Македонски", de: "Mazedonisch", en: "Macedonian" }, { id: "sq", name: "Shqip", de: "Albanisch", en: "Albanian" },
    { id: "ku", name: "Kurdî", de: "Kurdisch (Kurmandschi)", en: "Kurdish (Kurmanji)" }, { id: "zh", name: "中文", de: "Chinesisch", en: "Chinese" },
    { id: "en", name: "English", de: "Englisch", en: "English" }
  ];
  /* Sprachen mit fertigem Profil, aber noch ohne eigene Erklärtexte */
  C.presets = [];
})(window.DT_CORE);

/* --- 1.3.0 --- */
(function (C) {
  C.version = "1.3.0";
  var add = function (m, list) { C.items[m] = C.items[m].concat(list); };
  add("tekamolo", [
    { id: "tk_13", l: 1, c: ["Wir", "fahren", "morgen", "nach Graz."] },
    { id: "tk_14", l: 2, c: ["Sie", "kommt", "am Freitag", "aus Graz", "zurück."] },
    { id: "tk_15", l: 2, c: ["Mein Bruder", "arbeitet", "seit einem Jahr", "in Wien."] },
    { id: "tk_16", l: 3, c: ["Wir", "sind", "letzten Sommer", "mit dem Zug", "nach Kroatien", "gefahren."] }
  ]);
  add("subjekt", [
    { id: "su_15", l: 1, ok: "Er wohnt in Wien.", no: ["Wohnt in Wien."] },
    { id: "su_16", l: 2, ok: "Hier ist es sehr schön.", no: ["Hier ist sehr schön."] }
  ]);
  add("kopula", [
    { id: "ko_14", l: 1, ok: "Meine Schwester ist Lehrerin.", no: ["Meine Schwester Lehrerin."] },
    { id: "ko_15", l: 1, ok: "Der Kaffee ist heiß.", no: ["Der Kaffee heiß."] },
    { id: "ko_16", l: 2, ok: "Das Zimmer ist klein, aber schön.", no: ["Das Zimmer klein, aber schön."] }
  ]);
  add("negation", [
    { id: "ng_16", l: 2, ok: "Ich trinke keinen Kaffee.", no: ["Ich trinke nicht Kaffee."] }
  ]);
  add("schrift", [
    { id: "sc_11", l: 1, ok: "Die Katze trinkt Milch.", no: ["Die katze trinkt milch."] },
    { id: "sc_12", l: 1, ok: "Mein Bruder wohnt in Wien.", no: ["Mein bruder wohnt in wien."] },
    { id: "sc_13", l: 2, ok: "Am Abend lese ich ein Buch.", no: ["Am abend lese Ich ein buch."] },
    { id: "sc_14", l: 2, ok: "Frau Berger, kommen Sie bitte herein!", no: ["Frau Berger, kommen sie bitte herein!"] },
    { id: "sc_15", l: 2, ok: "Im Sommer fahren wir nach Italien.", no: ["Im sommer fahren Wir nach italien."] },
    { id: "sc_16", l: 3, ok: "Ich brauche einen Termin beim Arzt.", no: ["Ich brauche einen termin beim arzt."] }
  ]);
  add("pronomen", [
    { id: "pn_7", l: 1, t: "Das ist meine Schwester. ___ wohnt in Graz.", o: ["Sie", "Er", "Es"] },
    { id: "pn_8", l: 1, t: "Das Auto ist alt. ___ fährt aber gut.", o: ["Es", "Er", "Sie"] },
    { id: "pn_9", l: 1, t: "Der Kaffee ist heiß. ___ schmeckt gut.", o: ["Er", "Es", "Sie"] },
    { id: "pn_10", l: 2, t: "Die Wohnung ist klein. ___ hat nur ein Zimmer.", o: ["Sie", "Es", "Er"] },
    { id: "pn_11", l: 2, t: "Das Buch ist interessant. Ich lese ___ gern.", o: ["es", "ihn", "sie"] },
    { id: "pn_12", l: 2, t: "Wo ist mein Handy? ___ liegt in der Küche.", o: ["Es", "Er", "Sie"] },
    { id: "pn_13", l: 2, t: "Der Zug hat Verspätung. ___ kommt um neun.", o: ["Er", "Es", "Sie"] },
    { id: "pn_14", l: 2, t: "Die Suppe ist kalt. ___ schmeckt nicht.", o: ["Sie", "Es", "Er"] },
    { id: "pn_15", l: 3, t: "Der Film war lang. Ich habe ___ gestern gesehen.", o: ["ihn", "es", "sie"] },
    { id: "pn_16", l: 3, t: "Die Rechnung ist da. Ich bezahle ___ morgen.", o: ["sie", "ihn", "es"] }
  ]);
  add("anrede", [
    { id: "du_7", l: 1, t: "Papa, kommst ___ heute Abend?", o: ["du", "Sie", "ihr"] },
    { id: "du_8", l: 1, t: "Herr Maier, woher kommen ___?", o: ["Sie", "du", "ihr"] },
    { id: "du_9", l: 1, t: "Anna, wie alt bist ___?", o: ["du", "Sie", "ihr"] },
    { id: "du_10", l: 2, t: "Guten Tag! Was möchten ___ trinken?", o: ["Sie", "du", "ihr"] },
    { id: "du_11", l: 2, t: "Kinder, kommt ___ bitte zum Essen?", o: ["ihr", "Sie", "du"] },
    { id: "du_12", l: 2, t: "Herr Huber, ist das ___ Auto?", o: ["Ihr", "dein", "euer"] },
    { id: "du_13", l: 2, t: "Lisa, ist das ___ Handy?", o: ["dein", "Ihr", "euer"] },
    { id: "du_14", l: 2, t: "Frau Novak, ich rufe ___ morgen an.", o: ["Sie", "dich", "euch"] },
    { id: "du_15", l: 3, t: "Herr Berger, ich möchte ___ etwas fragen.", o: ["Sie", "dich", "euch"] },
    { id: "du_16", l: 3, t: "Opa, ich helfe ___ gern.", o: ["dir", "Ihnen", "euch"] }
  ]);
})(window.DT_CORE);

/* --- 1.4.0 --- */
(function (C) {
  C.version = "1.4.0";
  /* Sätze, die schon auf A1 passen, von Stufe 2 auf Stufe 1 gesetzt */
  var a1 = ("v2_6 v2_7 v2_8 tk_9 tk_10 tk_14 kl_5 kl_7 kl_16 kl_19 kl_23 nb_5 nb_13 nb_16 ka_5 ka_9 ka_16 ka_17 ar_5 ar_8 ar_9 ar_19 " +
    "su_4 su_5 su_6 su_7 su_11 su_12 ko_5 ko_6 ko_7 ko_8 ko_13 ng_6 ng_7 ng_12 ng_13 ng_16 hb_5 hb_6 hb_7 hb_8 pl_4 pl_5 pl_7 pl_8 " +
    "vf_5 vf_6 vf_15 vf_16 pr_8 pr_9 pr_13 pr_14 pr_17 pf_6 pf_8 pf_13 pf_15 aj_3 aj_4 aj_9 sc_4 sc_9 sc_13 pn_4 pn_5 pn_6 pn_12 du_3 du_5 du_12 du_13").split(" ");
  Object.keys(C.items).forEach(function (m) { C.items[m].forEach(function (it) { if (a1.indexOf(it.id) >= 0) it.l = 1; }); });
  var add = function (m, list) { C.items[m] = C.items[m].concat(list); };
  add("tekamolo", [
    { id: "tk_17", l: 1, c: ["Wir", "gehen", "am Samstag", "ins Kino."] },
    { id: "tk_18", l: 1, c: ["Er", "ist", "jetzt", "im Büro."] }
  ]);
  add("neben", [
    { id: "nb_19", l: 1, c: ["Ich esse,", "weil", "ich", "Hunger", "habe."] },
    { id: "nb_20", l: 1, c: ["Ich weiß,", "dass", "du", "Zeit", "hast."] },
    { id: "nb_21", l: 1, c: ["Er sagt,", "dass", "er", "müde", "ist."] }
  ]);
  add("kasus", [
    { id: "ka_22", l: 1, t: "Ich sehe ___ Bus.", o: ["den", "der", "dem"] },
    { id: "ka_23", l: 1, t: "Sie kauft ___ Buch.", o: ["das", "den", "dem"] }
  ]);
  add("negation", [
    { id: "ng_17", l: 1, t: "Ich habe ___ Geld.", o: ["kein", "nicht", "nichts"] },
    { id: "ng_18", l: 1, ok: "Das ist nicht teuer.", no: ["Das ist kein teuer."] }
  ]);
  add("haben", [
    { id: "hb_17", l: 1, t: "Ich ___ müde.", o: ["bin", "habe", "mache"] },
    { id: "hb_18", l: 1, t: "Er ___ zwei Schwestern.", o: ["hat", "ist", "gibt"] },
    { id: "hb_19", l: 1, ok: "Sie ist 30 Jahre alt.", no: ["Sie hat 30 Jahre."] },
    { id: "hb_20", l: 1, t: "___ du Hunger?", o: ["Hast", "Bist", "Machst"] }
  ]);
  add("plural", [
    { id: "pl_17", l: 1, t: "Ich habe zwei ___.", o: ["Schwestern", "Schwester", "Schwesters"] },
    { id: "pl_18", l: 1, t: "Wir haben zwei ___.", o: ["Autos", "Auto", "Auten"] }
  ]);
  add("perfekt", [
    { id: "pf_19", l: 1, t: "Ich ___ Brot gekauft.", o: ["habe", "bin", "werde"] },
    { id: "pf_20", l: 1, t: "Sie ___ gestern gekommen.", o: ["ist", "hat", "wird"] }
  ]);
  add("anrede", [
    { id: "du_17", l: 1, t: "Max, wo wohnst ___?", o: ["du", "Sie", "ihr"] },
    { id: "du_18", l: 1, t: "Frau Huber, wo wohnen ___?", o: ["Sie", "du", "ihr"] }
  ]);
})(window.DT_CORE);

/* --- 1.5.0 --- */
(function (C) {
  C.version = "1.5.0";
  var add = function (m, list) { C.items[m] = C.items[m].concat(list); };
  add("v2", [
    { id: "v2_19", l: 1, c: ["Morgen", "gehe", "ich", "in die Schule."] },
    { id: "v2_20", l: 1, c: ["Jetzt", "lerne", "ich", "Deutsch."] }
  ]);
  add("tekamolo", [
    { id: "tk_19", l: 1, c: ["Ich", "bin", "morgen", "in Graz."] },
    { id: "tk_20", l: 1, c: ["Wir", "essen", "heute", "zu Hause."] }
  ]);
  add("klammer", [
    { id: "kl_24", l: 1, c: ["Ich", "kann", "gut", "kochen."] },
    { id: "kl_25", l: 1, c: ["Wir", "wollen", "Deutsch", "lernen."] }
  ]);
  add("neben", [
    { id: "nb_22", l: 1, c: ["Ich komme,", "wenn", "ich", "Zeit", "habe."] },
    { id: "nb_23", l: 1, c: ["Sie sagt,", "dass", "sie", "Durst", "hat."] }
  ]);
  add("kasus", [
    { id: "ka_24", l: 1, t: "Ich brauche ___ Schlüssel.", o: ["den", "der", "dem"] },
    { id: "ka_25", l: 1, t: "Er hat ___ Schwester.", o: ["eine", "einer", "einen"] }
  ]);
  add("artikel", [
    { id: "ar_22", l: 1, t: "Das ist ___ Tisch.", o: ["ein", "eine", "–"] },
    { id: "ar_23", l: 1, t: "Ich wohne in ___ Wien.", o: ["–", "dem", "der"] }
  ]);
  add("subjekt", [
    { id: "su_17", l: 1, ok: "Sie kommt aus Polen.", no: ["Kommt aus Polen."] },
    { id: "su_18", l: 1, ok: "Es ist heute warm.", no: ["Ist heute warm."] }
  ]);
  add("kopula", [
    { id: "ko_17", l: 1, ok: "Das Kind ist klein.", no: ["Das Kind klein."] },
    { id: "ko_18", l: 1, ok: "Wir sind zu Hause.", no: ["Wir zu Hause."] }
  ]);
  add("negation", [
    { id: "ng_19", l: 1, t: "Ich habe ___ Bruder.", o: ["keinen", "nicht", "nichts"] },
    { id: "ng_20", l: 1, ok: "Ich arbeite heute nicht.", no: ["Ich nicht arbeite heute."] }
  ]);
  add("haben", [
    { id: "hb_21", l: 1, t: "Wir ___ Durst.", o: ["haben", "sind", "machen"] },
    { id: "hb_22", l: 1, t: "Wie alt ___ Sie?", o: ["sind", "haben", "machen"] }
  ]);
  add("plural", [
    { id: "pl_19", l: 1, t: "Ich kaufe zwei ___.", o: ["Bücher", "Buch", "Buchs"] },
    { id: "pl_20", l: 1, t: "Sie hat drei ___.", o: ["Brüder", "Bruder", "Bruders"] }
  ]);
  add("verbform", [
    { id: "vf_18", l: 1, t: "Wir ___ in Wien.", o: ["wohnen", "wohnt", "wohne"] },
    { id: "vf_19", l: 1, t: "Er ___ Deutsch.", o: ["lernt", "lernen", "lernst"] }
  ]);
  add("praep", [
    { id: "pr_24", l: 1, t: "Ich komme ___ Wien.", o: ["aus", "in", "nach"] },
    { id: "pr_25", l: 1, t: "Ich fahre ___ dem Zug.", o: ["mit", "auf", "bei"] }
  ]);
  add("perfekt", [
    { id: "pf_21", l: 1, t: "Wir ___ Pizza gegessen.", o: ["haben", "sind", "werden"] },
    { id: "pf_22", l: 1, t: "Ich ___ nach Hause gefahren.", o: ["bin", "habe", "werde"] }
  ]);
  add("adjektiv", [
    { id: "aj_21", l: 1, t: "Das ist ein ___ Haus.", o: ["großes", "großer", "große"] },
    { id: "aj_22", l: 1, t: "Sie hat eine ___ Katze.", o: ["kleine", "kleiner", "kleines"] }
  ]);
  add("schrift", [
    { id: "sc_17", l: 1, ok: "Ich habe einen Hund und eine Katze.", no: ["Ich habe einen hund und eine katze."] },
    { id: "sc_18", l: 1, ok: "Das Brot ist gut.", no: ["Das brot ist Gut."] }
  ]);
  add("pronomen", [
    { id: "pn_17", l: 1, t: "Das ist mein Vater. ___ heißt Karl.", o: ["Er", "Sie", "Es"] },
    { id: "pn_18", l: 1, t: "Das Haus ist alt. ___ ist groß.", o: ["Es", "Er", "Sie"] }
  ]);
  add("anrede", [
    { id: "du_19", l: 1, t: "Oma, hast ___ Zeit?", o: ["du", "Sie", "ihr"] },
    { id: "du_20", l: 1, t: "Herr Doktor, haben ___ Zeit?", o: ["Sie", "du", "ihr"] }
  ]);
})(window.DT_CORE);

/* --- 1.6.0 --- */
(function (C) {
  C.version = "1.8.2";
  C.vocab = C.vocab.concat([
    {d: "Oma", g: "f", p: "Omas", c: "n", l: 1},
    {d: "Opa", g: "m", p: "Opas", c: "n", l: 1},
    {d: "Großeltern", g: "pl", c: "n", l: 1},
    {d: "Geschwister", g: "pl", c: "n", l: 2},
    {d: "Mädchen", g: "n", p: "Mädchen", c: "n", l: 1},
    {d: "Pullover", g: "m", p: "Pullover", c: "n", l: 1},
    {d: "Ball", g: "m", p: "Bälle", c: "n", l: 1},
    {d: "Pizza", g: "f", p: "Pizzen", c: "n", l: 1},
    {d: "Musik", g: "f", c: "n", l: 1},
    {d: "Angst", g: "f", p: "Ängste", c: "n", l: 2},
    {d: "See", g: "m", p: "Seen", c: "n", l: 2},
    {d: "Verspätung", g: "f", p: "Verspätungen", c: "n", l: 2},
    {d: "Teller", g: "m", p: "Teller", c: "n", l: 1},
    {d: "Nase", g: "f", p: "Nasen", c: "n", l: 1},
    {d: "Mund", g: "m", p: "Münder", c: "n", l: 1},
    {d: "Ohr", g: "n", p: "Ohren", c: "n", l: 1},
    {d: "Bein", g: "n", p: "Beine", c: "n", l: 1},
    {d: "Arm", g: "m", p: "Arme", c: "n", l: 1},
    {d: "Bauch", g: "m", p: "Bäuche", c: "n", l: 2},
    {d: "Rücken", g: "m", p: "Rücken", c: "n", l: 2},
    {d: "Fieber", g: "n", c: "n", l: 2},
    {d: "Schmerz", g: "m", p: "Schmerzen", c: "n", l: 2},
    {d: "Rezept", g: "n", p: "Rezepte", c: "n", l: 2},
    {d: "Frühling", g: "m", c: "n", l: 1},
    {d: "Herbst", g: "m", c: "n", l: 1},
    {d: "Farbe", g: "f", p: "Farben", c: "n", l: 1},
    {d: "Pass", g: "m", p: "Pässe", c: "n", l: 1},
    {d: "E-Mail", g: "f", p: "E-Mails", c: "n", l: 1},
    {d: "Nummer", g: "f", p: "Nummern", c: "n", l: 1},
    {d: "Telefon", g: "n", p: "Telefone", c: "n", l: 1},
    {d: "Mittagessen", g: "n", c: "n", l: 1},
    {d: "Abendessen", g: "n", c: "n", l: 1},
    {d: "fliegen", c: "v", l: 2},
    {d: "aufmachen", c: "v", l: 1},
    {d: "zumachen", c: "v", l: 1},
    {d: "waschen", c: "v", l: 1},
    {d: "schicken", c: "v", l: 2},
    {d: "bekommen", c: "v", l: 2},
    {d: "erklären", c: "v", l: 2},
    {d: "wiederholen", c: "v", l: 2},
    {d: "treffen", c: "v", l: 2},
    {d: "abholen", c: "v", l: 2},
    {d: "ausfüllen", c: "v", l: 2},
    {d: "umsteigen", c: "v", l: 3},
    {d: "schmecken", c: "v", l: 1},
    {d: "glauben", c: "v", l: 2},
    {d: "leben", c: "v", l: 1},
    {d: "sitzen", c: "v", l: 1},
    {d: "heiß", c: "a", l: 1},
    {d: "laut", c: "a", l: 1},
    {d: "leise", c: "a", l: 1},
    {d: "dunkel", c: "a", l: 2},
    {d: "rot", c: "a", l: 1},
    {d: "blau", c: "a", l: 1},
    {d: "grün", c: "a", l: 1},
    {d: "gelb", c: "a", l: 1},
    {d: "schwarz", c: "a", l: 1},
    {d: "weiß", c: "a", l: 1},
    {d: "offen", c: "a", l: 2},
    {d: "geschlossen", c: "a", l: 2},
    {d: "auch", c: "w", l: 1},
    {d: "noch", c: "w", l: 1},
    {d: "schon", c: "w", l: 1},
    {d: "nur", c: "w", l: 1},
    {d: "wieder", c: "w", l: 2},
    {d: "gern", c: "w", l: 1},
    {d: "zusammen", c: "w", l: 2},
    {d: "links", c: "w", l: 1},
    {d: "rechts", c: "w", l: 1},
    {d: "geradeaus", c: "w", l: 1},
    {d: "später", c: "w", l: 2},
    {d: "früh", c: "w", l: 2},
    {d: "Bub", g: "m", p: "Buben", c: "at", l: 1, de: "Junge"},
    {d: "Karfiol", g: "m", c: "at", l: 2, de: "Blumenkohl"},
    {d: "Fisolen", g: "pl", c: "at", l: 2, de: "grüne Bohnen"},
    {d: "Kukuruz", g: "m", c: "at", l: 2, de: "Mais"},
    {d: "Zwetschke", g: "f", p: "Zwetschken", c: "at", l: 2, de: "Pflaume,  Zwetschge"},
    {d: "Ribisel", g: "f", p: "Ribiseln", c: "at", l: 3, de: "Johannisbeere"},
    {d: "Trafik", g: "f", p: "Trafiken", c: "at", l: 2, de: "Tabakladen,  Kiosk"},
    {d: "Gehsteig", g: "m", p: "Gehsteige", c: "at", l: 2, de: "Bürgersteig"},
    {d: "Baba!", c: "at", l: 1, de: "Tschüss!"}
  ]);
  Object.assign(C.forms, {
    fliegen: "fliege fliegst fliegt fliegen geflogen", aufmachen: "aufmachen aufgemacht", zumachen: "zumachen zugemacht",
    waschen: "wasche wäschst wäscht waschen gewaschen", schicken: "schicke schickst schickt schicken geschickt",
    bekommen: "bekomme bekommst bekommt bekommen", erklären: "erkläre erklärst erklärt erklären",
    wiederholen: "wiederhole wiederholst wiederholt wiederholen", treffen: "treffe triffst trifft treffen getroffen",
    abholen: "abholen abgeholt", ausfüllen: "ausfüllen ausgefüllt", umsteigen: "umsteigen umgestiegen",
    schmecken: "schmeckt schmecken geschmeckt", glauben: "glaube glaubst glaubt glauben geglaubt",
    leben: "lebe lebst lebt leben gelebt", sitzen: "sitze sitzt sitzen gesessen"
  });
  C.noEx = C.noEx.concat(["weiß"]);
})(window.DT_CORE);
