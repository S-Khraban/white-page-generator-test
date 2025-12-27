import { Random } from "../random/random.js";
import { es } from "../dictionaries/lang/es.js";
import { renderAboutTemplate } from "../templates/about.js";

export function generateAbout(rnd: Random): string {
  return renderAboutTemplate({
    title: es.common.siteName,
    headline: rnd.pick([
      "Sobre este sitio",
      "Nuestra idea",
      "Cómo usamos el contenido",
      "Enfoque educativo",
    ]),
    paragraph: rnd.pick(es.about.paragraphs),
    footer: es.common.footerNote,
  });
}
