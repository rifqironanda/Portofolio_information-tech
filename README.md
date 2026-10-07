# IT & AI Engineering Portfolio — Rifqi Afta Ronanda

A small, responsive portfolio aimed at IT and AI engineering recruitment, including companies in Japan. English copy focuses on business context, documented capabilities, and intended value. It does not claim measured impact without evidence.

## Run locally

No Node dependencies or build step are required.

```bash
python -m http.server 5173
```

Open http://localhost:5173. Serve the repository directory, not its parent.

## Features

- Five repository-backed case studies with IT / Web and AI / Data filters.
- Accessible case-study dialogs with implementation, evidence, limitations, and next evaluation.
- Direct PDF download with selectable text and clickable source links. The PDF follows the current project filter and is generated locally without third-party services.
- Responsive desktop and mobile layout, keyboard focus states, reduced-motion support.
- No tracking, API keys, authentication, or external fonts.

Pre-generated PDF samples are available under `downloads/`. See [docs/VALIDATION.md](docs/VALIDATION.md) for completed checks and the remaining browser smoke test.

## Make changes

Edit `content.js` to update profile links, project text, technologies, and evidence. Both the site and PDF use this content. Edit `styles.css` for visual changes. Figma remains hidden until a verified public URL is added to `figma`.

The PDF generator uses standard Helvetica fonts and ASCII English text. Non-Latin copy requires a Unicode font-capable PDF library; do not add Japanese PDF text without upgrading the generator.

## Evidence and attribution

See [docs/SOURCES.md](docs/SOURCES.md). Repository documentation supports described capabilities, but is not proof of production deployment or audited results. Project implementation may include assisted development; this version avoids asserting sole authorship. Confirm personal contribution before adding ownership claims.

LinkedIn has been located as a public profile link. Detailed employment history and certificates were not readable in this session, so they are not reproduced. Figma is pending a verified link.

## Publishing

This is a static site compatible with GitHub Pages, Netlify, or any static host. No hosting provider or deployment is configured in this first revision. To use GitHub Pages, merge the review branch and choose Settings → Pages → Deploy from a branch → main / root.

## Feedback

Start with the headline, the two strongest cases, and what you personally implemented. Replace intended impact with measured results when you can provide test reports or operational evidence. Add Figma and verified experience after review.
