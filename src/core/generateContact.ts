import type { Random } from "../random/random.js";
import type { GeneratorInput } from "./input.js";
import { getLangDict } from "../dictionaries/lang/index.js";
import { getGeoDict } from "../dictionaries/geo/index.js";
import { getTopicDict } from "../dictionaries/topics/index.js";
import { renderContactTemplate } from "../templates/contact.js";

export function generateContact(input: GeneratorInput, rnd: Random): string {
  const lang = getLangDict(input.lang);
  const geo = getGeoDict(input.geo);
  const topic = getTopicDict(input.topic);

  const siteName =
    lang.common.siteName || topic.defaultSiteName || "Site";

  return renderContactTemplate({
    lang: input.lang,
    title: siteName,
    pageTitle: lang.common.pages.contact.title,
    headline: rnd.pick(["Contacto", "Escríbenos", "Ayuda y consultas", "Soporte"]),
    paragraph: rnd.pick(topic.contact.paragraphs),
    country: geo.contact.country,
    email: geo.contact.email,
    footer: lang.common.footerNote,
  });
}
