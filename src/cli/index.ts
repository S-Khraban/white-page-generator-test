import { Command } from "commander";
import { normalizeInput } from "../core/input.js";
import { createRandom } from "../random/random.js";
import { generateSite } from "../core/generateSite.js";
import { writePages } from "../output/writeFiles.js";

const parsePages = (value: string): string[] =>
  value
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);

const program = new Command();

program
  .name("white-page-generator")
  .description("CLI generator for multi-page white-page websites")
  .option("--lang <lang>", "Language code", "es")
  .option("--geo <geo>", "GEO code", "ES")
  .option("--topic <topic>", "Topic name", "education")
  .option("--pages <pages>", "Comma-separated list of pages", parsePages, [
    "home",
    "about",
    "contact",
  ])
  .option("--seed <seed>", "Seed for deterministic generation")
  .option("--out <out>", "Output directory", "generated")
  .addHelpText(
    "after",
    `
Examples:
  white-page-generator --lang es --geo ES --topic education
  white-page-generator --lang en --geo ES --pages home,about --out dist
  white-page-generator --seed 123 --out generated
`
  );

program.parse(process.argv);

const options = program.opts<{
  lang: string;
  geo: string;
  topic: string;
  pages: string[];
  seed?: string;
  out: string;
}>();

const main = async () => {
  const input = normalizeInput({
    lang: options.lang.toLowerCase(),
    geo: options.geo.toUpperCase(),
    topic: options.topic,
    pages: options.pages,
    seed: options.seed ?? null,
  });

  const rnd = createRandom(input.seed);
  const pages = generateSite(input, rnd);

  await writePages(options.out, pages);

  console.log(
    JSON.stringify(
      {
        out: options.out,
        pages: Object.keys(pages),
        seed: input.seed,
        lang: input.lang,
        geo: input.geo,
      },
      null,
      2
    )
  );
};

await main();
