import { Command } from "commander";
import { normalizeInput } from "../core/input.js";
import { createRandom } from "../random/random.js";
import { generateSite } from "../core/generateSite.js";
import { writePages } from "../output/writeFiles.js";

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
  .option("--out <out>", "Output directory", "generated")
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

const pages = generateSite(input, rnd);

await writePages(options.out, pages);

console.log(
  JSON.stringify(
    {
      out: options.out,
      pages: Object.keys(pages),
      seed: input.seed,
    },
    null,
    2
  )
);
