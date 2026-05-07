#!/usr/bin/env node

import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const usage = [
  "Bob CLI",
  "",
  "Nutzung:",
  "  bob show    Bob-CLI-Kontext anzeigen",
  "  bob init    Codex CLI mit Bob-CLI-Kontext starten",
  "  bob help    Hilfe anzeigen",
  "",
  "Lokale Entwicklung:",
  "  npm run bob:show",
  "  npm run bob:init",
].join("\n");

async function readTextFile(path: string): Promise<string> {
  return readFile(path, "utf8");
}

async function readBobContext(): Promise<string> {
  const bob = await readTextFile(resolve(rootDir, "BOB.md"));
  const memory = await readTextFile(resolve(rootDir, "memory.md"));

  return [
    "# Bob CLI Startkontext",
    "",
    "## BOB.md",
    bob.trim(),
    "",
    "## memory.md",
    memory.trim(),
    "",
  ].join("\n");
}

async function show(): Promise<void> {
  const context = await readBobContext();
  console.log(context);
}

function help(): void {
  console.log(usage);
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
