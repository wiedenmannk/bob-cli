# Bob CLI

Bob CLI ist ein eigenstaendiges lokales CLI-Projekt fuer Bob.
Bob CLI basiert auf ChatGPT Codex.

Bob CLI liest Konfigurationsdateien ein, damit er eine Persoenlichkeit hat und
nach einer bestimmten Arbeitsweise vorgeht.

V2 fuehrt ein zentrales Bob-Home unter `~/.bob` ein.
Bob CLI ist noch nicht global verfuegbar und wird lokal aus diesem Projekt
gestartet.

Bob CLI liest zusaetzlich projektlokalen Kontext aus `<projekt>/.bob`.
Aktuell werden dort `tasks.md` und `notes.md` beruecksichtigt.

## Voraussetzungen

- Node.js
- npm
- Codex CLI im `PATH`

## Lokale Entwicklung

```bash
npm install
npm run build
```

Bob-Kontext anzeigen:

```bash
npm run bob:setup
npm run bob:home
npm run bob:show
```

Codex CLI mit Bob-Kontext starten:

```bash
npm run bob:init
```

`bob:init` uebergibt den zentralen Kontext aus `~/.bob` und, falls vorhanden,
den projektlokalen Kontext aus `.bob/` an Codex.

Alternative:

```bash
npm run bob -- show
npm run bob -- init
npm run bob -- setup
npm run bob -- home
npm run bob -- help
```

## Checks

```bash
npm run build
npm run lint
npm run format:check
```

## V2-Grenzen

- kein eigenes Terminal
- kein npm-Publish
- kein globales `npx`
- kein programmiertes `bob project add/use/list`
- keine Bob-Server- oder Bob-Console-Integration
- Bob-Home ist fuer V2 fest `~/.bob`
