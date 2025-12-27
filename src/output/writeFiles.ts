import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

export async function writePages(
  outDir: string,
  pages: Record<string, string>
): Promise<void> {
  await mkdir(outDir, { recursive: true });

  const entries = Object.entries(pages);

  await Promise.all(
    entries.map(([filename, content]) =>
      writeFile(join(outDir, filename), content, {
        encoding: "utf8",
      })
    )
  );
}
