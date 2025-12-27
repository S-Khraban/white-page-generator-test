import { es } from "./es.js";
import { en } from "./en.js";

export type LangDict = typeof es;

export function getLangDict(lang: string): LangDict {
  switch (lang) {
    case "en":
      return en;
    case "es":
    default:
      return es;
  }
}
