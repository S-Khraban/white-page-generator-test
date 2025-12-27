# White-page Generator

CLI generator for multi-page **white-page websites** with randomized, Google Ads-safe content.

The goal of this project is to demonstrate the ability to **build a content generator**, not static pages.

---

## Features

- Generates **multiple pages** (`home`, `about`, `contact`)
- Input-driven generation via **CLI arguments**
- Optional **seed-based randomization**
- Stable page structure with randomized content
- Supports **language** and **GEO**
- Neutral, Google Ads-safe content
- Clear separation of responsibilities:
  - generation logic
  - templates
  - dictionaries
  - randomization
  - output layer

---

## Tech Stack

- Node.js
- TypeScript
- Commander (CLI)
- Seedrandom (deterministic randomization)

---

## Project Structure

src/
├── cli/ # CLI entry point
├── core/ # Page generation logic
├── templates/ # HTML templates
├── dictionaries/ # Language / GEO content
├── random/ # Seed-based randomizer
├── output/ # File system writer
examples/ # Example input configs
generated/ # Generated output (gitignored)

---

## Installation

```bash
npm install
Usage
Generate pages using CLI arguments

npm run dev -- \
  --lang es \
  --geo ES \
  --topic education \
  --pages home,about,contact \
  --out generated/run1
Generate with randomized content
Run multiple times without seed:


npm run dev -- --out generated/run1
npm run dev -- --out generated/run2
Result:

Same structure

Different content

Deterministic generation with seed

npm run dev -- --seed 42 --out generated/seed-42-a
npm run dev -- --seed 42 --out generated/seed-42-b
Result:

Identical content

Same HTML output for the same seed

Proof of Randomization
Different runs (no seed)
powershell
Копировать код
fc.exe generated\run1\index.html generated\run2\index.html
fc.exe generated\run1\about.html generated\run2\about.html
fc.exe generated\run1\contact.html generated\run2\contact.html
➡️ Content differs

Same seed

fc.exe generated\seed-42-a\index.html generated\seed-42-b\index.html
fc.exe generated\seed-42-a\about.html generated\seed-42-b\about.html
fc.exe generated\seed-42-a\contact.html generated\seed-42-b\contact.html
➡️ No differences found

Output
Generated files:

index.html
about.html
contact.html
All files:

encoded in UTF-8

valid HTML

open directly in the browser

Notes
This project focuses on generation logic, not UI styling

Content is intentionally neutral and informational

No frameworks or frontend libraries are used

License
MIT