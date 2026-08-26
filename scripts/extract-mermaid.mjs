import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = process.argv[2];

if (!outputDirectory) {
  throw new Error("Output directory is required");
}

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await markdownFiles(path));
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(path);
  }

  return files;
}

await mkdir(outputDirectory, { recursive: true });
let diagramNumber = 0;

for (const path of await markdownFiles(".")) {
  const markdown = await readFile(path, "utf8");
  const diagrams = markdown.matchAll(/```mermaid\s*\n([\s\S]*?)\n```/g);
  for (const match of diagrams) {
    diagramNumber += 1;
    await writeFile(join(outputDirectory, `${diagramNumber}.mmd`), `${match[1]}\n`);
  }
}

if (diagramNumber === 0) {
  throw new Error("No Mermaid diagrams found");
}

console.log(`Extracted ${diagramNumber} Mermaid diagrams`);
