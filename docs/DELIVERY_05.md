# PORTFOLIO-05 delivery record

Date: 2026-10-14.
Baseline: `cafc62af36ae95a7b40f0f1ca0873e699c5622f3`, clean working tree/index.
Source branch / static Pages root: `codex/portfolio`, `/`.

## Reference and implementation

The owner requested the colors of https://zyyo.cc/. Its actual rendered light
page was viewed. An independent source review found light theme tokens in the
page's inline theme style and dark overrides in its actually linked
https://zyyo.cc/static/css/style.css. Only palette/style observations are used.
No reference identity, image, font, tracking code or script is copied.

| Element | Portfolio light | Portfolio dark |
| --- | --- | --- |
| Background | #f9fbff to #f2f6ff | #0f1115 to #0b0e13 |
| Main text | #111111 | #ffffff |
| Accent | #6d28d9 | #a78bfa |
| Title gradient | violet / red / deeper cyan | violet / pink / cyan |
| Cards | translucent white | translucent charcoal |
| Secondary text | #4b5563 | #b4b9c4 |

Light title cyan is deeper than the reference's #22d3ee; small dark accents are
lighter than its #8b5cf6. These are readability-oriented choices, not a claim of
measured accessibility compliance. The title gradient is static. A solid accent
remains as the unsupported-clip fallback; forced-color and print rules specify
solid text. Demo image frames and the original initials favicon are recolored.

Both languages share the same CSS and receive versioned CSS/favicon URLs.
The existing lowercase data-theme contract, local theme preference, contribution
SVG selection, workflow, content, layouts, portrait and screenshots are retained.
No package/dependency, database, API, architecture or deployment change occurs;
DECISIONS.md therefore needs no new architecture decision for this color edit.

## Publication and limits

Source `bb778f50e8e76704c83f866231bbf09d16a69e7e` was pushed normally.
Native Pages deployment
https://github.com/chanbilly-lab/chanbilly-lab.github.io/actions/runs/38453491650
completed successfully (the deploy step took 2m20s). Pages returned built and
continues to serve codex/portfolio at /.

Ordinary retrievals with Cache-Control: no-cache:

| Asset | HTTP | UTF-8 response bytes | Content type |
| --- | --- | --- | --- |
| English `/` | 200 | 18,142 | text/html; charset=utf-8 |
| Traditional Chinese `/zh.html` | 200 | 17,257 | text/html; charset=utf-8 |
| versioned root.css | 200 | 2,013 | text/css; charset=utf-8 |
| versioned style.css | 200 | 13,796 | text/css; charset=utf-8 |
| versioned monogram.svg | 200 | 532 | image/svg+xml |

Both delivered palettes were actually viewed in a temporary ordinary preview.
The dark page shows charcoal background, purple action, muted gray text, neutral
cards and violet/pink/cyan title. Using the existing theme control for presentation,
the light page shows the pale blue/white background, black/gray text, purple
action, white cards and violet/red/deeper-cyan title. Both actual screenshots are
kept in ignored cache. The original dark preference was restored, temporary tabs
closed and the owner's existing page refreshed. No formal browser test suite or
accessibility compliance result is claimed.

No application unit/integration/browser test suite, lint, type check, local build
or original-project regression is executed (owner's instruction). Source/reference
review, publishing the static site and viewing its presentation are separate
actions. Quantified contrast, all devices, print and forced-color cases remain
unverified. This color task does not resolve earlier private history cleanup or
private application-source publication decisions.
