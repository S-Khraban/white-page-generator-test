import { Command } from "commander";
import { normalizeInput } from "../core/input.js";
import { createRandom } from "../random/random.js";

const program = new Command();

program
  .name("white-page-generator")
  .description("CLI generator for multi-page white-page websites")
  .option("--lang <lang>", "Language code", "es")
  .option("--geo <geo>", "GEO code", "ES")
  .option("--topic <topic>", "Topic name", "education")
  .option(
    "--pages <pages>",
    "Comma-separated list of pages",
    "home,about,contact"
  )
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

const rnd = createRandom(input.seed);

const randomDemo = {
  headlineVariant: rnd.pick(["A", "B", "C", "D"]),
  paragraphVariant: rnd.pick(["one", "two", "three", "four"]),
  randomNumber: rnd.int(1, 100),
};

console.log("White-page Generator | Normalized Input:");
console.log(JSON.stringify(input, null, 2));

console.log("White-page Generator | Random Demo:");
console.log(JSON.stringify(randomDemo, null, 2));
