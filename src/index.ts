#!/usr/bin/env node

import { spawn } from "node:child_process";
import { constants } from "node:fs";
import { access, copyFile, mkdir, readFile } from "node:fs/promises";
import { homedir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const bobHome = join(homedir(), ".bob");
const projectBobDir = resolve(process.cwd(), ".bob");
const templateDir = resolve(rootDir, "templates");
const bobFiles = ["BOB.md", "memory.md", "projects.md", "first-setup.md"];
const workflowFiles = ["project-setup.md"];
const projectBobFiles = ["tasks.md", "index.md"];
const usage = [
  "Bob CLI",
  "",
  "Nutzung:",
  "  bob setup   Bob-Home unter ~/.bob anlegen",
  "  bob home    Bob-Home-Pfad anzeigen",
  "  bob show    Bob-CLI-Kontext anzeigen",
  "  bob init    Codex CLI mit Bob-CLI-Kontext starten",
  "  bob help    Hilfe anzeigen",
].join("\n");

async function readTextFile(path: string): Promise<string> {
  return readFile(path, "utf8");
}

async function fileExists(path: string): Promise<boolean> {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function readOptionalTextFile(path: string): Promise<string | null> {
  if (!(await fileExists(path))) {
    return null;
  }

  return readTextFile(path);
}

async function readContextFiles(baseDir: string): Promise<string> {
  const sections = await Promise.all(
    bobFiles.map(async (file) => {
      const content = await readOptionalTextFile(resolve(baseDir, file));

      if (!content) {
        return null;
      }

      return [`## ${file}`, content.trim(), ""].join("\n");
    }),
  );

  return sections
    .filter((section): section is string => Boolean(section))
    .join("\n");
}

async function readBobContext(): Promise<string> {
  const homeReady =
    (await fileExists(resolve(bobHome, "BOB.md"))) &&
    (await fileExists(resolve(bobHome, "memory.md")));
  const projectContext = await readProjectContext();

  if (homeReady) {
    return [
      "# Bob CLI Startkontext",
      "",
      `Quelle: ${bobHome}`,
      "",
      await readContextFiles(bobHome),
      projectContext,
    ].join("\n");
  }

  return [
    "# Bob CLI Startkontext",
    "",
    "Hinweis: Bob-Home wurde nicht gefunden oder ist unvollstaendig.",
    "Fuehre `bob setup` aus, um ~/.bob anzulegen.",
    "Nutze lokalen Entwicklungs-Kontext aus dem bob-cli-Projekt.",
    "",
    await readContextFiles(rootDir),
    projectContext,
    "",
  ].join("\n");
}

async function readProjectContext(): Promise<string> {
  const context = await readContextFilesFromList(
    projectBobDir,
    projectBobFiles,
  );

  if (!context) {
    return "";
  }

  return [
    "# Bob CLI Projektkontext",
    "",
    `Quelle: ${projectBobDir}`,
    "",
    context,
  ].join("\n");
}

async function readContextFilesFromList(
  baseDir: string,
  files: string[],
): Promise<string> {
  const sections = await Promise.all(
    files.map(async (file) => {
      const content = await readOptionalTextFile(resolve(baseDir, file));

      if (!content) {
        return null;
      }

      return [`## ${file}`, content.trim(), ""].join("\n");
    }),
  );

  return sections
    .filter((section): section is string => Boolean(section))
    .join("\n");
}

async function show(): Promise<void> {
  const context = await readBobContext();
  console.log(context);
}

function help(): void {
  console.log(usage);
}

function home(): void {
  console.log(bobHome);
}

async function setup(): Promise<void> {
  await mkdir(bobHome, { recursive: true });

  console.log(`Bob Home: ${bobHome}`);

  for (const file of bobFiles) {
    const target = resolve(bobHome, file);

    if (await fileExists(target)) {
      console.log(`exists  ${basename(target)}`);
      continue;
    }

    await copyFile(resolve(templateDir, file), target);
    console.log(`created ${basename(target)}`);
  }

  const workflowDir = resolve(bobHome, "workflows");
  await mkdir(workflowDir, { recursive: true });

  for (const file of workflowFiles) {
    const target = resolve(workflowDir, file);

    if (await fileExists(target)) {
      console.log(`exists  workflows/${basename(target)}`);
      continue;
    }

    await copyFile(resolve(templateDir, "workflows", file), target);
    console.log(`created workflows/${basename(target)}`);
  }
}

async function init(): Promise<void> {
  const context = await readBobContext();
  const prompt = [
    context,
    "Initialisiere Bob CLI fuer diese Session.",
    "Antworte danach kurz mit dem aktuellen Stand und warte auf meinen Task.",
  ].join("\n\n");

  const child = spawn("codex", [prompt], {
    stdio: "inherit",
  });

  await new Promise<void>((resolvePromise, reject) => {
    child.once("error", (error: NodeJS.ErrnoException) => {
      if (error.code === "ENOENT") {
        reject(
          new Error(
            "Codex CLI wurde nicht gefunden. Bitte pruefe, ob `codex` im PATH liegt.",
          ),
        );
        return;
      }

      reject(error);
    });
    child.once("exit", (code) => {
      if (code && code !== 0) {
        reject(new Error(`Codex wurde mit Exit-Code ${code} beendet.`));
        return;
      }

      resolvePromise();
    });
  });
}

async function main(): Promise<void> {
  const command = process.argv[2] ?? "show";

  if (command === "help" || command === "--help" || command === "-h") {
    help();
    return;
  }

  if (command === "home") {
    home();
    return;
  }

  if (command === "setup") {
    await setup();
    return;
  }

  if (command === "show") {
    await show();
    return;
  }

  if (command === "init") {
    await init();
    return;
  }

  console.error(`Unbekannter Befehl: ${command}`);
  console.error("");
  console.error(usage);
  process.exitCode = 1;
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exitCode = 1;
});
