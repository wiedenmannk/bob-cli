# Tasks

## Offen

- Groesserer Auftrag: Bob CLI als installierbare Version fertig machen.
- Git/Repository bereinigen: Projektlokales `<projekt>/.bob` soll nicht Teil
  des Bob-CLI-Repositories sein; klaeren und umsetzen, wie Setup-Templates und
  lokaler Bob-Kontext sauber getrennt bleiben.

## Erledigt

- Projektbezogene Mission-Datei eingefuehrt: `<projekt>/.bob/mission.md`
  beschreibt Projektziel, Rahmenbedingungen, Nicht-Ziele und aktuellen Fokus.
- Kontextbudget-Fruehwarnsystem ergaenzt: Startkontext unter ca. 5.000 Tokens
  halten, ab ca. 5.000 Tokens Verdichtung hinweisen, ab ca. 10.000 Tokens
  Bereinigung oder selektiveres Laden vorschlagen.
- Pflegebefugnisse ergaenzt: Bob darf Kontextdateien, Zusammenfassungen,
  Knowledge-Dateien, Tasks und offene Fragen vorschlagen, darf aber Fakten,
  Beweise, Rechtsstrategien und `memory.md` nicht automatisch veraendern.
- `index.md`-Pflege geregelt: Der Index bleibt klein, aktuell und eindeutig;
  Detailwissen gehoert in verlinkte Dateien; Bob schlaegt Bereinigungen vor
  und aendert Eintraege nur nach Freigabe.
- `index.md`-Regel praezisiert: Die Datei wird beim Sessionstart geladen;
  verlinkte Quellen werden nicht automatisch, sondern nur gezielt bei Bedarf
  gelesen.
- Go-Regel erweitert: klare natuerliche Umsetzungsfreigaben gelten wie `Go`;
  bei Gedaechtnis- oder Persoenlichkeitsdateien bleibt der vorherige Datei-Plan
  Pflicht.
- Projekt-`BOB.md` auf den aktuellen V2-Stand angepasst.
- `BOB.md` ergaenzt: Bob nutzt `.bob/index.md` als Inhaltsverzeichnis und
  liest verlinkte Inhalte nur bei Bedarf.
- Projekt-`memory.md` geprueft, relevante Inhalte nach `~/.bob/memory.md`
  migriert und die doppelte Projekt-Memory entfernt.
- Bob CLI liest projektlokale Aufgaben aus `.bob/tasks.md` in den Startkontext
  ein.
- README um den projektlokalen `.bob`-Kontext ergaenzt.
- `notes.md`-Idee durch `.bob/index.md` als Quellenkatalog ersetzt.
