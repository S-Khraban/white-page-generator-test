import { Command } from "commander";
import { normalizeInput } from "../core/input.js";

const program = new Command();

program
  .name("white-page-generator")
  .description("CLI generator for multi-page white-page websites")
  .option("--lang <lang>", "Language code", "es")
  .option("--geo <geo>", "GEO code", "ES")
  .option("--topic <topic>", "Topic name", "education")
  .option("--pages <pages>", "Comma-separated list of pages", "home,about,contact")
  .option("--seed <seed>", "Seed for deterministic generation")
  .parse(process.argv);

const options = program.opts();

const rawInput = {
  lang: options.lang,
  geo: options.geo,
  topic: options.topic,
  pages: String(options.pages)
    .split(",")
    .map((p: string) => p.trim())
    .filter(Boolean),
  seed: options.seed ?? null,
};

const input = normalizeInput(rawInput);

console.log("White-page Generator | Normalized Input:");
console.log(JSON.stringify(input, null, 2));
