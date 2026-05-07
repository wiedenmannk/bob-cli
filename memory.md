# Bob CLI Memory

## Stand
- Bob CLI entsteht als eigenstaendiges Projekt.
- V1 wird lokal entwickelt und lokal gestartet.
- V1 nutzt das vorhandene Codex-Terminal und baut kein eigenes Terminal.
- Die Bob-Persoenlichkeit liegt zentral in `BOB.md`.
- Dieses `memory.md` enthaelt dauerhaftes Bob-CLI-Gedaechtnis.

## Ziel V1
- `bob show` zeigt den lokalen Bob-Kontext.
- `bob init` liest `BOB.md` und `memory.md`, baut einen Startprompt und startet Codex CLI interaktiv.
- Codex soll mit geerbtem Terminal laufen, damit der normale Codex-Prompt erhalten bleibt.

## Spaeter
- `bob setup` kann Zielprojekte vorbereiten.
- Bob CLI kann spaeter zentral arbeiten und mehrere Projekte betreuen, z.B. ueber eine `projects.md`.
- Projektdateien in Zielprojekten sollen Projektkontext, Aufgaben und Regeln enthalten, aber keine neue Bob-Persoenlichkeit.
- npm/npx oder globale Installation kommen erst nach lokal validierter V1.

