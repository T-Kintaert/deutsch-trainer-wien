# Deutsch-Trainer Wien

Deutsch üben mit Übungen, die auf die eigene Muttersprache abgestimmt sind: Trainiert werden
genau die Fehler, die Sprecherinnen und Sprecher dieser Sprache im Deutschen häufig machen.
Version 1.8.1.

Vollständig übersetzt (25 Sprachen): Bosnisch/Kroatisch/Montenegrinisch/Serbisch (lateinisch), Serbisch (kyrillisch),
Türkisch, Arabisch, Polnisch, Rumänisch, Ukrainisch, Ungarisch, Persisch (Farsi), Dari, Russisch, Slowakisch,
Tschechisch, Italienisch, Slowenisch, Französisch, Spanisch, Portugiesisch, Bulgarisch, Griechisch, Mazedonisch,
Albanisch, Kurdisch (Kurmandschi, lateinische Schrift), Chinesisch (vereinfachte Schrift), Englisch.
Für jede andere Sprache gibt es den Fragebogen ("Andere Sprache").

Neu in 1.8.0: Übersichtsseite als "Liniennetz" (Linie 1: typische Fehler, Linie 2: weitere Übungen, eingeklappt),
einheitliche Linien-Icons statt Emojis, oben nur noch "Typische Fehler" und "Vokabeln"; Info-Fenster mit
Entstehung, Beta-Hinweis, Datenschutz und "Fortschritt löschen".

Neu in 1.7.0: Info- und Teilen-Knopf oben links, Vollbild und Hell/Dunkel oben rechts; beim Sätze-Ordnen wird
der Schlusspunkt automatisch gesetzt (kein Hinweis mehr auf das letzte Teil); Fortschritt wird pro Sprache gespeichert.

Neu in 1.6.0: 81 neue Wörter (jetzt 338), darunter Körperteile, Farben, Familie und weitere österreichische
Wörter; Mazedonisch, Albanisch, Kurdisch und Chinesisch Satz für Satz mit dem Deutschen verglichen.

Neu in 1.5.0: Mazedonisch, Albanisch, Kurdisch und Chinesisch vollständig; 36 neue A1-Sätze (jetzt 378),
sodass jede Übung auf A1 mindestens 12 Sätze hat.

Neu in 1.4.0: Portugiesisch, Bulgarisch und Griechisch vollständig; 19 neue A1-Sätze (jetzt 342) und 73 einfache
Sätze von A2 auf A1 umgestuft, sodass jede Übung schon auf A1 mindestens 10 Sätze hat; die Satzauswahl wechselt
jetzt reihum (zuerst früher falsch gelöste, dann die am seltensten gezeigten Sätze); der Regeltext zu du/Sie
erwähnt "ihr".

Neu in 1.3.0: Slowenisch, Französisch und Spanisch vollständig; 36 neue Übungssätze (jetzt 323), sodass jede
Übung mindestens 16 Sätze hat.

Neu in 1.2.0: Russisch, Slowakisch, Tschechisch und Italienisch vollständig; Vollbild-Knopf; Sprachkacheln
reagieren auf die Maus; Hinweis, auch die Übungen einer besser beherrschten Zweitsprache zu probieren.

## Dateien
- `index.html` – die App
- `data/core.js` – deutsche Übungssätze, Wortschatz, Sprachprofile, Fragebogen
- `data/freq.js` – Häufigkeitsränge für den Wortschatz
- `lang/xx.js` – Oberfläche, Erklärungen, Einführung und Übersetzungen pro Sprache
- `tools/gen.js` – erzeugt `lang/sr.js` (Serbisch kyrillisch) aus `lang/bks.js` und `lang/prs.js` (Dari) aus `lang/fa.js`

Alle Sätze und Wortlisten sind für diese App neu geschrieben.
Die Häufigkeitsränge sind aus „FrequencyWords“ von Hermit Dave abgeleitet (OpenSubtitles 2018,
Lizenz CC BY-SA 4.0, https://github.com/hermitdave/FrequencyWords).

## Auf GitHub veröffentlichen
Alle Dateien samt Ordnern in ein Repository laden, dann unter Settings → Pages den Hauptzweig
als Quelle wählen. Lokal testen: `index.html` doppelklicken.

## Einstellungen oben im Skript von `index.html`
- Statistik: auf goatcounter.com ein kostenloses Konto anlegen, dann `const STATS = { goatcounter: "dein-code" };`
  Gezählt wird: Seitenaufrufe, `neu-<sprache>`, `besuch-<sprache>`, `uebung-<modul>`, `teilen`, `feedback`.
- Feedback: `const FEEDBACK = { email: "adresse@example.org", url: "" };` oder die Adresse eines
  Formulars bei `url` (dort wird `{ref}` durch Version, Sprache und Satz-Kennung ersetzt).
  Erst dann erscheinen „Feedback geben“ im Info-Fenster und „Fehler melden“ nach jeder Aufgabe.

## Fortschritt
Gespeichert wird nur im Browser des Geräts (localStorage): gewählte Sprache und Stufe, pro Modul
das beste Ergebnis und die Zahl der Durchgänge sowie die falsch beantworteten Aufgaben.
Falsch beantwortete Aufgaben kommen im nächsten Durchgang bevorzugt wieder.

## Sprache ändern oder hinzufügen
- BKS ändern: `lang/bks.js` bearbeiten, dann `node tools/gen.js` (aktualisiert auch Serbisch).
- Persisch ändern: `lang/fa.js` bearbeiten, dann `node tools/gen.js` (aktualisiert auch Dari).
- Neue Sprache: `lang/en.js` kopieren, umbenennen, übersetzen; in `data/core.js` bei `langs`
  eintragen und aus `presets` entfernen. Das Profil steht bei `profiles` (Gewicht 0–3 je Modul).
