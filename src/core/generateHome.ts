
import type { Random } from "../random/random.js";
import { es } from "../dictionaries/lang/es.js";
import { renderHomeTemplate } from "../templates/home.js";

export function generateHome(rnd: Random): string {
  return renderHomeTemplate({
    title: es.common.siteName,
    headline: rnd.pick(es.home.headlines),
    paragraph: rnd.pick(es.home.paragraphs),
    footer: es.common.footerNote,
  });
}
