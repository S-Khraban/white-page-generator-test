export type ContactTemplateInput = {
  lang: string;
  title: string;
  pageTitle: string;
  headline: string;
  paragraph: string;
  country: string;
  email: string;
  footer: string;
};

export function renderContactTemplate(input: ContactTemplateInput): string {
  return `<!DOCTYPE html>
<html lang="${input.lang}">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${input.title} — ${input.pageTitle}</title>
  <meta name="description" content="${input.paragraph}" />
</head>
<body>
  <header>
    <strong>${input.title}</strong>
    <nav>
      <a href="./index.html">Home</a>
      <a href="./about.html">About</a>
      <a href="./contact.html">${input.pageTitle}</a>
    </nav>
  </header>

  <main>
    <h1>${input.headline}</h1>
    <p>${input.paragraph}</p>

    <section>
      <p>${input.country}</p>
      <p>Email: <a href="mailto:${input.email}">${input.email}</a></p>
    </section>
  </main>

  <footer>
    <small>${input.footer}</small>
  </footer>
</body>
</html>`;
}
