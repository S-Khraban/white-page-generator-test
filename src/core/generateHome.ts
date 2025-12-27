import type { Random } from "../random/random.js";
import type { GeneratorInput } from "./input.js";
import { getLangDict } from "../dictionaries/lang/index.js";
import { getTopicDict } from "../dictionaries/topics/index.js";
import { renderHomeTemplate } from "../templates/home.js";

export function generateHome(input: GeneratorInput, rnd: Random): string {
  const lang = getLangDict(input.lang);
  const topic = getTopicDict(input.topic);

  const siteName =
    lang.common.siteName || topic.defaultSiteName || "Site";

  return renderHomeTemplate({
    lang: input.lang,
    title: siteName,
    pageTitle: lang.common.pages.home.title,
    headline: rnd.pick(topic.home.headlines),
    paragraph: rnd.pick(topic.home.paragraphs),
    footer: lang.common.footerNote,
  });
}
