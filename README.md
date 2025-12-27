White-page Generator

CLI generator for multi-page white-page websites with randomized, Google Ads-safe content.

The purpose of this project is to demonstrate the ability to build an input-driven content generator, not static HTML pages.

Features

Generates multiple pages (home, about, contact)

Fully input-driven generation via CLI arguments

Stable page structure with randomized content

Optional seed-based deterministic randomization

Supports:

language (--lang)

GEO (--geo)

topic (--topic)

Neutral, Google Ads-safe content

Clear separation of responsibilities:

generation logic

templates

dictionaries (lang / geo / topic)

randomization

output layer

Tech Stack

Node.js

TypeScript

Commander (CLI)

Seedrandom (deterministic randomization)

Project Structure
src/
├── cli/           # CLI entry point
├── core/          # Page generation logic
├── templates/     # HTML templates
├── dictionaries/  # Language, GEO and topic dictionaries
│   ├── lang/
│   ├── geo/
│   └── topics/
├── random/        # Seed-based randomizer
├── output/        # File system writer
examples/          # Example input configs
generated/         # Generated output (gitignored)

Installation
npm install

Usage
Generate pages using CLI arguments
npm run dev -- \
  --lang es \
  --geo ES \
  --topic education \
  --pages home,about,contact \
  --out generated/run1

Randomized generation (no seed)

Run multiple times without a seed:

npm run dev -- --out generated/run1
npm run dev -- --out generated/run2


Result:

Same page structure

Different content on each run

Deterministic generation with seed
npm run dev -- --seed 42 --out generated/seed-42-a
npm run dev -- --seed 42 --out generated/seed-42-b


Result:

Identical content

Same HTML output for the same seed

Proof of Randomization
Different runs (no seed)
fc.exe generated\run1\index.html generated\run2\index.html
fc.exe generated\run1\about.html generated\run2\about.html
fc.exe generated\run1\contact.html generated\run2\contact.html


➡️ Content differs

Same seed
fc.exe generated\seed-42-a\index.html generated\seed-42-b\index.html
fc.exe generated\seed-42-a\about.html generated\seed-42-b\about.html
fc.exe generated\seed-42-a\contact.html generated\seed-42-b\contact.html


➡️ No differences found

Input Parameters
Parameter	Description
--lang	Language of generated content (es, en)
--geo	GEO context affecting localized data (ES, MX)
--topic	Topic defining semantic content (education, technology)
--pages	Pages to generate
--seed	Optional seed for deterministic output
--out	Output directory

All input parameters directly affect the generated result.

Output

Generated files:

index.html

about.html

contact.html

All output files:

encoded in UTF-8

valid HTML

open directly in the browser

Notes

This project focuses on generation logic, not UI styling

Content is intentionally neutral and informational

No frontend frameworks or UI libraries are used

License

MIT