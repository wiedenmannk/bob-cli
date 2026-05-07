# Bob CLI Memory

## Stand

- Bob CLI entsteht als eigenstaendiges Projekt.
- V1 wird lokal entwickelt und lokal gestartet.
- V1 nutzt das vorhandene Codex-Terminal und baut kein eigenes Terminal.
- Die Bob-Persoenlichkeit liegt zentral in `BOB.md`.
- Dieses `memory.md` enthaelt dauerhaftes Bob-CLI-Gedaechtnis.
- `bob show` wurde lokal erfolgreich getestet.
- `bob init` wurde lokal erfolgreich getestet und startet Codex CLI interaktiv mit Bob-CLI-Kontext.
- Der Codex Trust-Dialog beim ersten Start im Bob-CLI-Projekt ist erwartbar.
- VS Code erkennt TypeScript/Node-Imports, ESLint und Prettier im Bob-CLI-Projekt.

## Ziel V1

- `bob show` zeigt den lokalen Bob-Kontext.
- `bob init` liest `BOB.md` und `memory.md`, baut einen Startprompt und startet Codex CLI interaktiv.
- Codex soll mit geerbtem Terminal laufen, damit der normale Codex-Prompt erhalten bleibt.
- V1 enthaelt eine kleine Hilfe und klare Fehlermeldung, wenn `codex` nicht im PATH liegt.

## Spaeter

- `bob setup` kann Zielprojekte vorbereiten.
- Bob CLI kann spaeter zentral arbeiten und mehrere Projekte betreuen, z.B. ueber eine `projects.md`.
- Projektdateien in Zielprojekten sollen Projektkontext, Aufgaben und Regeln enthalten, aber keine neue Bob-Persoenlichkeit.
- npm/npx oder globale Installation kommen erst nach lokal validierter V1.

## V2 Planung

- V2 soll ein Bob-Home einfuehren.
- Fuer V2 ist `~/.bob` als Bob-Home in Ordnung.
- Das Bob-Home soll zentrale Bob-Dateien enthalten, z.B. `BOB.md`, `memory.md` und `projects.md`.
- Das Bob-Home soll fuer V2 auch ein `first-setup.md` vorsehen.
- `BOB.md` enthaelt die zentrale Bob-Persoenlichkeit.
- `memory.md` enthaelt dauerhaftes Bob-CLI-Gedaechtnis.
- `projects.md` enthaelt bekannte Projekte und kann von Bob/Codex gepflegt werden.
- `first-setup.md` beschreibt, wie Bob den Benutzer beim ersten Setup fuehrt.
- Bob soll dem Benutzer erklaeren, dass Bob CLI zentral arbeiten und mehrere Projekte kennen kann.
- Bob soll den Benutzer fragen, ob er nur mit Bob CLI selbst arbeiten, ein bestehendes Projekt registrieren oder spaeter mehrere Projekte verwalten moechte.
- V2 soll kein programmiertes `bob project add`, `bob project use` oder `bob project list` bauen.
- Projektverwaltung soll zuerst ueber Codex, klare Regeln und einfache Markdown-Dateien laufen.
- `bob setup` soll das Bob-Home anlegen und fehlende Basisdateien erstellen.
- `bob setup` soll keine bestehenden Dateien ungefragt ueberschreiben.
- In V3 kann das Bob-Home per Setup konfigurierbar werden.
- Bob CLI soll langfristig plattformfreundlich unter Linux, macOS und Windows laufen.
- V2 soll deshalb Pfade ueber Node-APIs und das User-Home aufloesen, nicht ueber Shell-spezifische Annahmen.
