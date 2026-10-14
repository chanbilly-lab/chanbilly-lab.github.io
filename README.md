# Chen Zhi Peng — Developer Portfolio

Personal developer/IT portfolio, adapted from
[ZYYO666/homepage](https://github.com/ZYYO666/homepage). The requested template's
sidebar, project cards and theme structure are retained with new portfolio
content. Attribution and upstream license limitations are documented in
[THIRD_PARTY](docs/THIRD_PARTY.md).

Published canonical URL: **https://chanbilly-lab.github.io/**.
English: `index.html`; Traditional Chinese: `zh.html`.

Published on 2026-10-14. GitHub Pages returned `built`, with a completed successful
deployment, and both language URLs returned HTTP 200. See [delivery evidence](docs/DELIVERY.md).

The owner's four follow-up refinements are recorded under
[PORTFOLIO-02](docs/tasks.md): portrait, named workplace, a simpler page footer and
two actual earlier M0 demonstration images. Publication evidence for this update
is recorded separately in [DELIVERY_02](docs/DELIVERY_02.md).

The six follow-up copy comments are handled under
[PORTFOLIO-03](docs/DELIVERY_03.md). Both languages use a simpler introduction,
remove the specified DocFlow paragraphs and describe admissions through its
actual local synthetic demo features. Provincial reference data remains labelled
as provincial records; the copy does not promise a ready public admissions service.

The color palette now takes its direction from the owner's live reference
[zyyo.cc](https://zyyo.cc/): pale blue/white and charcoal backgrounds, neutral
cards, purple accents and static violet/red/cyan title gradients. Small dark-mode
accents are lightened and the light-mode cyan is deepened for clearer text.
Colors are shared across both languages; the existing theme/snake behavior is
retained. See [PORTFOLIO-05](docs/DELIVERY_05.md).

## Featured engineering work

- **DocFlow** — AWS event-driven document review: cases, immutable requirements,
  private files, human review, transactional audit/outbox and asynchronous
  notifications. Its React interface is a synthetic in-memory demonstration.
  A limited historical AWS backend session is documented in the project;
  resources have been retired, and full cloud acceptance was not completed.
- **Admissions Planning Workspace** — Vue 3, FastAPI and PostgreSQL modular
  monolith. A synthetic demo covers profile confirmation, project selection,
  deterministic four-state eligibility, evidence and draft plans. A limited
  Zhejiang reference-data loop exists locally; the national directory and public
  service are not enabled. New search-selection source is unverified.

The two application repositories now publish privacy-reviewed clean source:
[DocFlow](https://github.com/chanbilly-lab/docflow) and
[admissions](https://github.com/chanbilly-lab/study-admissions-agent).
The complete original histories remain in private read-only archives. This
portfolio links the public source and publishes selected synthetic screenshots;
unsanitized evidence, private reports, resumes and credentials are not included.
Descriptions do not claim production readiness or fabricate users, employment
outcomes, performance or admission facts. See [source publication](docs/SOURCE_PUBLICATION.md).

## Content and assets

- `index.html`, `zh.html`: public profile, two case studies, skills and education.
- `static/css/root.css`: light/dark design tokens.
- `static/css/style.css`: responsive sidebar and content layout.
- `static/js/script.js`: lightweight optional theme controls.
- `static/img/monogram.svg`: original initials mark.
- `static/img/portrait.jpg`: the owner's original photo, extracted unchanged from
  a supplied resume and published at the owner's explicit request. No whole PDF
  or other resume contact details are included.
- `static/img/projects/`: two DocFlow synthetic frontend screenshots from
  September 2026 and two admissions synthetic M0 screenshots from 13 October
  2026. Captions explain scope and dates; the earlier admissions images do not
  show the newly added school/program search. These two images open at full size.
- `docs/`: task, change, decision and attribution records.

No third-party analytics, remote fonts, package installation or application build
is needed. Full resume PDFs, phone/address details and private source research are
not published here. Relevant supplied IT resumes receive a homepage link in new
local PDF copies; their original text and layouts are preserved.

## Contribution snake

Both language pages display an animated SVG from the owner's GitHub contribution
calendar. `.github/workflows/snake.yml` generates light/dark SVGs daily at
00:00 UTC (08:00 Asia/Hong_Kong), and supports manual `workflow_dispatch`.
Scheduled Actions can be delayed and depend on GitHub keeping the workflow active.

Only generated files in `dist` are published to the separate `output` branch.
The existing Pages source remains `codex/portfolio`; it is not replaced by that
branch. The publishing action keeps output history and uses the GitHub Actions
bot identity. No personal access token or additional secret is required.

Generator v3 and publisher v5 are pinned to verified full commit SHAs. The
publisher is updated from the supplied v3 example because its current v5 supports
the hosted runner's Node 24 runtime. See [ADR-P03](docs/DECISIONS.md).

The website follows its existing theme toggle for light/dark SVG selection,
supports horizontal scrolling on narrow screens, and hides the animated SVG for
visitors who request reduced motion. A GitHub calendar link remains available.
The README also embeds both palettes using GitHub's theme-aware picture syntax.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/chanbilly-lab/chanbilly-lab.github.io/output/github-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/chanbilly-lab/chanbilly-lab.github.io/output/github-snake.svg">
  <img alt="Snake animation of chanbilly-lab's GitHub contribution calendar" src="https://raw.githubusercontent.com/chanbilly-lab/chanbilly-lab.github.io/output/github-snake.svg">
</picture>

First-generation and publication results are recorded in
[DELIVERY_04](docs/DELIVERY_04.md). Application tests remain unexecuted; running
the requested animation generator is a publishing operation.

## Maintain and publish

Edit both language pages together and keep project status statements accurate.
Do not replace an unknown fact with a plausible claim. A case study is independent
of whether a private repository can be accessed by a visitor.

GitHub Pages serves this repository's selected branch from `/`; `.nojekyll`
ensures plain static content. Publication setup and actual verification results
are tracked under [PORTFOLIO-01](docs/tasks.md) and [CHANGELOG](docs/CHANGELOG.md).
An ordinary push updates the selected source branch. Do not publish personal
resume files or change the visibility of the two application repositories.

No application unit/integration/lint/type/build test suite is run as part of this
portfolio task. Source review, actual publication status, ordinary URL retrieval
and PDF visual review are recorded separately and are not regression-test claims.
