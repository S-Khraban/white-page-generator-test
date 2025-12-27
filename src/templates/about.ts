type AboutTemplateInput = {
  title: string;
  headline: string;
  paragraph: string;
  footer: string;
};

export function renderAboutTemplate(input: AboutTemplateInput): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>${input.title} — About</title>
  <meta name="description" content="${input.paragraph}" />
</head>
<body>
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
