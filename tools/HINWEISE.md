# Technische Hinweise zum Deutsch-Trainer Wien

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
