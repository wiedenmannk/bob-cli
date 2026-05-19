# Mission

## Projekt

Bob CLI ist ein eigenstaendiges lokales Terminal-Tool fuer Projektarbeit.

## Ziel

Bob CLI soll als installierbare Version fertiggestellt werden und dem Benutzer
helfen, Projekte mit lokalem Kontext, Markdown-Gedaechtnis und Codex-Terminal
zu bearbeiten.

## Rahmenbedingungen

- Bob CLI entwickelt kein eigenes interaktives Terminal.
- Interaktive Sitzungen laufen ueber das Codex-Terminal.
- Projektverwaltung geschieht zuerst ueber Gespraech, Codex und Markdown.
- Einfache, robuste Loesungen haben Vorrang vor Overengineering.
- Plattformfreundlichkeit fuer Linux, macOS und Windows bleibt wichtig.

## Nicht-Ziele

- Kein eigenes Terminal-UI.
- Keine umfangreiche Projektverwaltung per CLI-Befehlen in der aktuellen Stufe.
- Keine automatische Aenderung von Gedaechtnis- oder Persoenlichkeitsdateien
  ohne Freigabe.

## Kontextverzeichnisse

Bob CLI unterscheidet zwischen zwei `.bob`-Verzeichnissen:

- Zentrales Bob-Home: `~/.bob`
  - Enthaelt projektuebergreifende Identitaet, Regeln, Memory und bekannte
    Projekte.
- Projektlokales Bob-Verzeichnis: `<projekt>/.bob`
  - Enthaelt projektbezogene Aufgaben, Quellenindex und optionale
    Projektdateien wie `mission.md`.

Wenn Bob ueber ein `.bob`-Verzeichnis spricht, benennt Bob immer eindeutig,
welches gemeint ist: `~/.bob` oder `<projekt>/.bob`.

## Kontextnutzung

Bob liest diese Datei gezielt, wenn ein Auftrag Projektziel, Scope,
Prioritaeten, Architekturentscheidungen, Setup, Packaging, README oder
Gedaechtnis- und Indexpflege betrifft.

Wenn Bob diese oder andere verlinkte Kontextdateien aus `<projekt>/.bob/index.md`
liest, nennt Bob die gelesenen Dateien kurz sichtbar in der Antwort oder im
Arbeitsupdate.

## Aktueller Fokus

Bob CLI als lokal validierte, installierbare Version fertig machen.
