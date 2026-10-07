# Validation — first revision

- JavaScript syntax checked with Node for content.js, app.js, and pdf.js.
- HTML parser checks: unique IDs, existing DOM IDs used by app.js, local asset paths, and internal section links.
- All three PDF variants generated from the actual pdf.js and content.js in a Node harness using PDF-standard Helvetica measurements in place of browser canvas.
- PyMuPDF reopened the files, checked page counts, extracted selectable text, and found clickable source annotations. Rendered PDF pages inspected for clipping and overlaps.
- PDFs: combined 4 pages, IT 2 pages, AI 3 pages.
- Full browser interaction and responsive visual checks could not run: Playwright's browser executable was missing and its download returned invalid archives under this environment's network restrictions. Filters, dialogs, browser download events, and mobile layouts still need a browser smoke test.
- No project model benchmarks were run for this portfolio. Project capabilities are based on the linked READMEs, not production verification.

Local browser smoke test: open localhost:5173, switch all three filters, open/close each case with mouse and Escape, download PDFs for each filter, and inspect widths 375px, 768px, and desktop.
