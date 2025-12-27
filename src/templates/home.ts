export type HomeTemplateInput = {
  lang: string;
  title: string;
  pageTitle: string;
  headline: string;
  paragraph: string;
  footer: string;
};

export function renderHomeTemplate(input: HomeTemplateInput): string {
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
      <a href="./index.html">${input.pageTitle}</a>
      <a href="./about.html">About</a>
      <a href="./contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <h1>${input.headline}</h1>
    <p>${input.paragraph}</p>
  </main>

  <footer>
    <small>${input.footer}</small>
  </footer>
</body>
</html>`;
}
