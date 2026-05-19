# Bob CLI Memory

## Stand

- Bob CLI nutzt ein zentrales Bob-Home unter `~/.bob`.
- Bob CLI nutzt fuer interaktive Sitzungen das Codex-Terminal.
- Bob CLI entwickelt kein eigenes interaktives Terminal.
- Die Bob-Persoenlichkeit liegt zentral in `BOB.md`.
- Dieses `memory.md` enthaelt dauerhaftes Bob-CLI-Gedaechtnis.
- Projektbezogener Kontext liegt in Zielprojekten unter `<projekt>/.bob`.
- Bekannte Projekte koennen in `~/.bob/projects.md` dokumentiert werden.

## Aktuell

- `bob setup` legt das Bob-Home an und erstellt fehlende Basisdateien.
- `bob setup` ist idempotent und ueberschreibt bestehende Dateien nicht.
- `bob home` zeigt den Bob-Home-Pfad.
- `bob show` zeigt den Bob-CLI-Kontext.
- `bob init` liest den Bob-CLI-Kontext und startet Codex CLI interaktiv.
- `bob show` und `bob init` lesen bevorzugt aus `~/.bob`.
- Falls vorhanden, lesen `bob show` und `bob init` zusaetzlich projektlokalen
  Kontext aus `<projekt>/.bob/tasks.md` und `<projekt>/.bob/index.md`.
- `.bob/index.md` ist ein kleines Inhaltsverzeichnis fuer weitere
  Projektquellen; verlinkte Inhalte werden nur bei Bedarf gelesen.
- Projektmissionen koennen unter `<projekt>/.bob/mission.md` liegen und werden
  bei Bedarf ueber `<projekt>/.bob/index.md` gefunden.
- Projektbezogene Erinnerung soll nicht als zweite `memory.md` im Projekt-Root
  gepflegt werden.

## Arbeitsregeln fuer Gedaechtnis

- Bob darf wichtige neue Erkenntnisse fuer `BOB.md`, `memory.md`, `tasks.md`
  oder `index.md` vorschlagen.
- Bob fragt vor Aenderungen an Gedaechtnis- oder Persoenlichkeitsdateien nach.
- Zentrale, projektuebergreifende Fakten gehoeren nach `~/.bob/memory.md`.
- Projektbezogene Aufgaben gehoeren nach `<projekt>/.bob/tasks.md`.
- Projektbezogene Quellen und optionale Zusatzinformationen gehoeren als
  Verweise nach `<projekt>/.bob/index.md`.

## Technik

- Bob CLI soll plattformfreundlich unter Linux, macOS und Windows bleiben.
- Pfade sollen ueber Node-APIs und das User-Home aufgeloest werden, nicht ueber
  Shell-spezifische Annahmen.

## Kontextbudget

- Bob achtet darauf, dass der Startkontext klein bleibt.
- Zielwert fuer den Startkontext ist unter ca. 5.000 Tokens.
- Ab ca. 5.000 Tokens weist Bob auf moegliche Verdichtung hin.
- Ab ca. 10.000 Tokens schlaegt Bob aktiv Bereinigung, Verdichtung oder
  selektiveres Laden vor.
- `tasks.md` soll keine Chronik werden.
- `memory.md` soll zentrale Erkenntnisse verdichtet halten.
- `index.md` soll ein knapper Quellenindex bleiben.

## Spaeter

- Bob CLI kann spaeter zentral mehrere Projekte betreuen.
- Das Bob-Home kann spaeter per Setup konfigurierbar werden.
