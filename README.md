# Accessibility Refactor - University Portal

Static refactor of a university web portal with focus on accessibility improvements guided by WCAG 2.1 AA.

The project is part of an academic assignment and keeps the stack intentionally simple:
- HTML5 semantic markup
- CSS
- Vanilla JavaScript
- JSON as content source

## Goal

The repository starts from an intentionally flawed website and evolves it in phases:
- detect accessibility barriers
- document findings and fixes
- refactor structure, semantics, navigation, media, and forms
- keep the code maintainable without unnecessary frameworks

## Current Scope

Implemented so far:
- semantic reorganization of the home page
- shared header and footer across views
- contextual page titles
- consistent breadcrumbs in secondary pages
- normalized heading hierarchy
- careers page refactored from layout table to semantic sections
- rendering of news, careers, and secondary information from JSON
- semantic cleanup of forms and native controls
- basic honeypot on the student login form

Detected and intentionally left for later phases:
- visible focus styling across the full site
- contrast, typography, spacing, and zoom behavior
- full keyboard/focus handling in the modal
- accessible error handling and richer form validation
- CAPTCHA solutions requiring server-side verification

## Project Structure

```text
.
|-- css/
|   |-- navbar.css
|   `-- styles.css
|-- data/
|   |-- carreras.json
|   |-- info-blocks.json
|   `-- noticias.json
|-- images/
|-- js/
|   |-- load-partials.js
|   |-- render-careers.js
|   |-- render-home.js
|   |-- render-loader.js
|   `-- scripts.js
|-- media/
|-- partials/
|   |-- site-footer.html
|   `-- site-header.html
|-- carreras.html
|-- estudiantes.html
|-- index.html
|-- mapa.html
|-- novedades.html
`-- README.md
```

## Pages

- `index.html`: home page with institutional news and secondary info rendered from JSON
- `carreras.html`: academic offer with semantic filters and careers loaded from JSON
- `novedades.html`: institutional news and video content
- `estudiantes.html`: student access form
- `mapa.html`: site map and internal search prototype

## How To Run

Do not open the HTML files directly with `file://`.

The site uses `fetch()` for:
- shared partials
- JSON content

Run it with a local server instead. For example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Any equivalent local server also works, such as VS Code Live Server.

## Accessibility Notes

This repository mixes:
- issues already fixed
- issues still intentionally present for later phases of the assignment

That is expected. The repo is not meant to represent a finished production website, but an audited and progressively improved prototype.

## Report

The formal write-up and chapter-based documentation are maintained outside this repository in LaTeX/Overleaf.

