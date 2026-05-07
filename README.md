# Bob CLI

Bob CLI ist ein eigenstaendiges lokales CLI-Projekt fuer Bob.
Bob CLI basiert auf ChatGPT Codex.

Bob CLI liest Konfigurationsdateien ein, damit er eine Persoenlichkeit hat und
nach einer bestimmten Arbeitsweise vorgeht.

V1 ist der erste Schritt:
Projekte muessen aktuell noch manuell ausgewaehlt werden.
Bob CLI ist noch nicht global verfuegbar und muss im Projektordner gestartet
werden.

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
npm run bob:show
```

Codex CLI mit Bob-Kontext starten:

```bash
npm run bob:init
```

Alternative:

```bash
npm run bob -- show
npm run bob -- init
npm run bob -- help
```

## Checks

```bash
npm run build
npm run lint
npm run format:check
```

## V1-Grenzen

- kein eigenes Terminal
- kein `bob setup`
- kein npm-Publish
- kein globales `npx`
- keine Projektverwaltung
- keine Bob-Server- oder Bob-Console-Integration
