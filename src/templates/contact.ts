type ContactTemplateInput = {
  title: string;
  headline: string;
  paragraph: string;
  email: string;
  footer: string;
};

export function renderContactTemplate(input: ContactTemplateInput): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>${input.title} — Contact</title>
  <meta name="description" content="${input.paragraph}" />
</head>
<body>
  <main>
    <h1>${input.headline}</h1>
    <p>${input.paragraph}</p>
    <p>Email: <a href="mailto:${input.email}">${input.email}</a></p>
  </main>
  <footer>
    <small>${input.footer}</small>
  </footer>
</body>
</html>`;
}
