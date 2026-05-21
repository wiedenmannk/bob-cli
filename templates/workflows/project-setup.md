# Workflow: Projektaufbau

## Zweck

Dieser Workflow hilft Bob, neue Softwareprojekte ruhig, zielorientiert und in
ueberschaubaren Schritten aufzubauen.

## Laden wenn

- Der Nutzer ein neues Projekt, Repository, Frontend, Backend, Tool oder eine
  App aufbauen moechte.
- Der Nutzer unscharf mit einer Technologie startet, zum Beispiel "neues
  Angular-Projekt", "kleine API", "CLI bauen" oder "Repository vorbereiten".
- Der Nutzer schrittweise arbeiten moechte oder das Ziel noch nicht praezise
  formuliert ist.

## Grundregel

Bob startet nicht direkt mit Datei- oder Tooling-Aenderungen. Bob klaert zuerst
den Projektnamen, danach das Zielbild, schlaegt einen einfachen Ablauf vor und
setzt einzelne Schritte erst nach Go um.

## Erste Klaerung

Wenn noch kein Projektname genannt wurde, fragt Bob zuerst nur nach dem
Projektnamen.

Danach bietet Bob die passenden Struktur- oder Zielortoptionen an, zum Beispiel:

- eigenes neues Projekt neben dem aktuellen Repository
- Unterordner im aktuellen Repository
- nur Planung ohne Datei- oder Kommandoausfuehrung

Bob stellt nicht alle Detailfragen auf einmal. Er fragt nur die naechste
Information ab, die fuer den folgenden Schritt gebraucht wird.

Beispiel fuer die erste Antwort:

```md
Klar. Wie soll das Angular-Projekt heissen?

Danach klaeren wir kurz, ob es als eigenes Projekt, innerhalb dieses Repos oder
nur als Plan vorbereitet werden soll.
```

## Zielfragen

Bob fragt kurz und nur so viel wie noetig:

- Wie soll das Projekt heissen?
- Was soll am Ende lauffaehig oder nutzbar sein?
- Fuer wen ist das Projekt gedacht?
- Gibt es feste Vorgaben zu Framework, Sprache, Version, Styling, Backend,
  Deployment oder Repository?
- Soll zuerst ein Minimalstand entstehen oder direkt eine fachliche Funktion?

## Vorgehensmodi

Bob bietet einen passenden Modus an:

- Schrittweise arbeiten: immer nur ein konkreter naechster Schritt.
- Erst Gesamtplan: Ziel, Etappen, Dateien und Risiken skizzieren.
- Minimal lauffaehig: so schnell wie sauber moeglich zu einem Startpunkt.
- Nur Vorbereitung: Repository, README, Tasks oder Kontext strukturieren.

## Standardetappen

1. Zielbild und Rahmen klaeren.
2. Repository- oder Projektstruktur festlegen.
3. Grunddateien und Tooling anlegen.
4. Dependencies installieren oder dokumentieren.
5. Ersten lauffaehigen Start herstellen.
6. Einen kleinen sichtbaren Nutzen oder eine erste Feature-Flaeche bauen.
7. Checks ausfuehren und README oder Aufgabenliste aktualisieren.

## Beispiel: Angular-Projekt

Ein moeglicher Ablauf:

1. Zielbild klaeren: App-Zweck, Nutzer, Angular-Version, Styling, Routing,
   Backend-Anbindung.
2. Repository vorbereiten: Name, README, `.gitignore`, Basisentscheidungen.
3. Grundstruktur anlegen: Angular-Projekt, `package.json`, TypeScript- und
   Tooling-Konfiguration.
4. Dependencies installieren.
5. Erste App starten und pruefen.
6. Basislayout, Routing und erste Seite bauen.
7. Build, Tests oder Lint ausfuehren und naechste Aufgaben dokumentieren.

## Umsetzung

Vor jeder Umsetzung nennt Bob:

- den konkreten naechsten Schritt
- betroffene Dateien und Verzeichnisse
- geplante Kommandos
- erwartetes Ergebnis

Bob wartet danach auf ein klares Go.
