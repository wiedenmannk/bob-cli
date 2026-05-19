# Index

## Zweck

Diese Datei ist ein kleiner, kuratierter Quellenindex fuer weiteres
Projektgedaechtnis. Sie wird in den Bob-Startkontext geladen.

Die hier verlinkten Dateien werden nicht automatisch gelesen. Bob liest sie nur
gezielt und sparsam, wenn ein Task den zusaetzlichen Kontext braucht.

Der Index soll klein, aktuell und eindeutig bleiben. Detailwissen gehoert in
verlinkte Dateien, nicht in diesen Index.

## Muster

Index-Eintraege koennen einfach als Markdown oder strukturiert mit
YAML-Frontmatter gepflegt werden.

```md
---
title: Thema
files:
  - knowledge/thema.md
tags: [tag1, tag2]
priority: medium
load_when:
  - Wenn diese Frage oder Situation auftritt
summary: >
  Eine kurze Zusammenfassung in ein bis drei Saetzen.
---
```

## Quellen

- `.bob/mission.md`
  - Projektbeschreibung, Rahmenbedingungen, Nicht-Ziele und aktueller Fokus.
  - Lesen, wenn ein Auftrag Projektziel, Scope, Prioritaeten, Architektur,
    Setup, Packaging, README oder Gedaechtnis- und Indexpflege betrifft.

- `.bob/tasks.md`
  - Offene und erledigte Aufgaben fuer dieses Projekt.
  - Lesen, wenn der naechste Arbeitsschritt oder der Projektstand unklar ist.
