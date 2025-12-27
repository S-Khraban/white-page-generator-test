import type { Random } from "../random/random.js";
import type { GeneratorInput } from "./input.js";
import { getLangDict } from "../dictionaries/lang/index.js";
import { getTopicDict } from "../dictionaries/topics/index.js";
import { renderAboutTemplate } from "../templates/about.js";

export function generateAbout(input: GeneratorInput, rnd: Random): string {
  const lang = getLangDict(input.lang);
  const topic = getTopicDict(input.topic);

  const siteName =
    lang.common.siteName || topic.defaultSiteName || "Site";

  return renderAboutTemplate({
    lang: input.lang,
    title: siteName,
    pageTitle: lang.common.pages.about.title,
    headline: rnd.pick([
      "Sobre este sitio",
      "Nuestra idea",
      "Cómo usamos el contenido",
      "Enfoque educativo",
    ]),
    paragraph: rnd.pick(topic.about.paragraphs),
    footer: lang.common.footerNote,
  });
}
