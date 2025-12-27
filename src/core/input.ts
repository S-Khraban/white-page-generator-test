export type GeneratorInput = {
  lang: string;
  geo: string;
  topic: string;
  pages: string[];
  seed?: string | null;
};

const SUPPORTED_PAGES = ["home", "about", "contact"];

export function normalizeInput(input: GeneratorInput): GeneratorInput {
  if (!input.lang || !input.geo || !input.topic) {
    throw new Error("Invalid input: lang, geo and topic are required");
  }

  const pages = input.pages.filter((p) => SUPPORTED_PAGES.includes(p));

  if (pages.length === 0) {
    throw new Error("Invalid input: no supported pages provided");
  }

  return {
    ...input,
    pages,
  };
}
