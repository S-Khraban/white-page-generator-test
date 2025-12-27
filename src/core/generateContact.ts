import { Random } from "../random/random.js";
import { es } from "../dictionaries/lang/es.js";
import { ES } from "../dictionaries/geo/ES.js";
import { renderContactTemplate } from "../templates/contact.js";

export function generateContact(rnd: Random): string {
  return renderContactTemplate({
    title: es.common.siteName,
    headline: rnd.pick(["Contacto", "Escríbenos", "Ayuda y consultas", "Soporte"]),
    paragraph: rnd.pick(es.contact.paragraphs),
    email: ES.contact.email,
    footer: es.common.footerNote,
  });
}
