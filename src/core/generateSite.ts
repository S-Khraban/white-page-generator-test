import type { GeneratorInput } from "./input.js";
import type { Random } from "../random/random.js";

import { generateHome } from "./generateHome.js";
import { generateAbout } from "./generateAbout.js";
import { generateContact } from "./generateContact.js";

export function generateSite(input: GeneratorInput, rnd: Random) {
  const result: Record<string, string> = {};

  for (const page of input.pages) {
    if (page === "home") result["index.html"] = generateHome(rnd);
    if (page === "about") result["about.html"] = generateAbout(rnd);
    if (page === "contact") result["contact.html"] = generateContact(rnd);
  }

  return result;
}