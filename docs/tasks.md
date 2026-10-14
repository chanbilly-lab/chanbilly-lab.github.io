# Portfolio tasks

## PRIVACY-PUBLISH-01 — Link the clean public application sources

Status: [~] In progress (2026-10-14); application repositories public,
homepage publication pending.

Goal: complete the owner's approved private-history/clean-public-source strategy
and update the portfolio's source audience statements and project links.

Scope here: index.html, zh.html, README.md, docs/tasks.md, docs/CHANGELOG.md,
docs/DECISIONS.md and docs/SOURCE_PUBLICATION.md. Baseline 72d6025, clean tree/index.

Acceptance: both language project cards link the actual new public repositories;
source-private wording is updated without claiming live application service.
Native Pages publication and ordinary hosted retrieval must confirm the links.
Original application repositories remain PRIVATE/read-only archives; no old
history is imported into the fresh public repositories. Detailed source privacy
and handoff results live in each application's report.

Checks: source/diff and actual repository/hosting reads. Application tests, lint,
type checks and local builds are unexecuted (owner's instruction). The homepage's
eight earlier private-email metadata occurrences remain a separate follow-up;
this task's approval names the two application repositories only.

## PORTFOLIO-05 — Palette inspired by the live Zyyo reference

Status: Completed (2026-10-14).

Goal: adapt the requested reference's light/dark color direction to the existing
portfolio, without changing its content, layout, portrait or contribution job.

Scope: static/css/root.css, static/css/style.css, static/img/monogram.svg,
index.html, zh.html, README.md, docs/tasks.md, docs/CHANGELOG.md and
docs/DELIVERY_05.md. Baseline is
`cafc62af36ae95a7b40f0f1ca0873e699c5622f3`; working tree/index were clean.

Acceptance: light blue/white and charcoal background palettes, purple actions
and links, static multicolor hero text, coordinated neutral cards/tags/image
frames and favicon. Both entry pages share versioned CSS links; existing theme
selection and contribution SVG sources remain intact. Actual Pages publication
and viewing the delivered palette must be recorded.

Verification: actual reference screenshot and source colors reviewed; source/diff
review, native hosting publication, ordinary hosted retrieval and presentation
viewing. Application tests, lint, type checks and local builds remain unexecuted
(owner's instruction). No automated contrast or compatibility claim is made.

Actual results: source bb778f5 published successfully through native Pages run
38453491650. Both language pages, both versioned stylesheets and the versioned
favicon returned HTTP 200. Light and dark palettes were actually viewed and
saved as presentation screenshots; the original dark preference was restored
and temporary reference/preview tabs closed. See [DELIVERY_05](DELIVERY_05.md).

Known limits: all devices, forced-color/print behavior and quantified contrast
remain unverified. Earlier private-email history and application-publication
approval remain separate pending work. No architecture/dependency/API/DB change.

## PORTFOLIO-04 — Daily contribution snake animation

Status: Completed (2026-10-14).

Goal: generate the owner's contribution snake daily and display light/dark
versions in the English/Traditional Chinese site and repository README.

Scope: .github/workflows/snake.yml, index.html, zh.html, static/css/style.css,
static/js/script.js, README.md, docs/tasks.md, docs/CHANGELOG.md,
docs/DECISIONS.md and docs/DELIVERY_04.md. Baseline is
`e57e9e7481fa04be41cd48a18487972a5757f68d`; working tree and index were clean.

Acceptance: daily UTC 00:00 schedule plus manual dispatch; generated light/dark
SVGs on a separate output branch with normal history-preserving publication;
existing Pages source unchanged; website theme selects the corresponding SVG;
reduced-motion visitors have a calendar link without displayed animation;
first manual generation and website publication have actual success records.

Verification: source/action definition review, requested first-generation run,
native Pages publication, ordinary hosted retrieval and viewing delivered
content. Application tests, lint, type checks and local builds are unexecuted
(owner's instruction). Future scheduled runs and all accessibility/device cases
cannot be claimed as observed.

Actual results: first manual Snake run 38451791498 succeeded in 19 seconds and
published two SVGs plus .nojekyll on output. Both language pages and both SVGs
returned HTTP 200. Source 83e5283 and cache-refresh repair 774e062 each published
successfully. The existing dark-theme browser now uses the dark SVG; its actual
calendar and snake were viewed in the contribution section. No theme-click or
reduced-motion test suite was run. See [DELIVERY_04](DELIVERY_04.md).

Known limits: GitHub schedules may be delayed or disabled by inactivity; SVG
delivery depends on GitHub's raw-content host. Private source-publication and
old homepage metadata cleanup remain separate pending work.

## PORTFOLIO-03 — Simpler copy and clearer project features

Status: Completed (2026-10-14).

Goal: apply the owner's six browser comments to both languages, simplify the
personal introduction and highlight concrete admissions features.

Scope: index.html, zh.html, README.md, docs/tasks.md, docs/CHANGELOG.md and
docs/DELIVERY_03.md. Baseline is
`bbf65308ebd61782dcfc9465fd922889edd69551`; working tree and index were clean.

Acceptance: simpler English and Traditional Chinese introductions; the two
specified DocFlow status paragraphs and its long screenshot note removed; the
specified final cutoff sentence removed while keeping provincial terminology;
admissions box explains profiles, options, four-state checks, evidence, draft
plans and key-free local demo use. Actual public-service readiness is not
invented. GitHub Pages must publish the edited source successfully.

Verification: source/diff review, native hosting deployment status, ordinary
hosted page retrieval and viewing the changed content. Application tests, lint,
type checks and local builds remain unexecuted (owner's instruction).

Actual results: source `1c6e393` was pushed normally and its native Pages
deployment completed successfully. Both language URLs returned HTTP 200 with the
new introduction and feature box. The refreshed in-app page shows the requested
deletions and new Traditional Chinese text. See [DELIVERY_03](DELIVERY_03.md).

Known limits: actual evidence supports the synthetic local core demo; real
directory coverage, live model calls and public admissions service are not
established. The separate privacy repository-promotion approval remains pending.
No application repository, resume, asset or hosting architecture changes here.

Upload review also found eight private-email occurrences in earlier homepage
author/committer metadata. This task's commits use the GitHub noreply identity;
old-history cleanup is recorded as a separate privacy follow-up, not performed.

## PORTFOLIO-02 — Owner's four page refinements

Status: Completed (2026-10-14).

Goal: apply the four owner comments to both language pages: use the owner's
resume portrait, name the Hong Kong Chinese visa service centre workplace,
remove the visible template footer paragraph, and add actual admissions demo
screenshots. Preserve repository source attribution and existing resume files.

Scope: two entry pages, display CSS, three existing image assets copied after
visual review, README and task/change/delivery notes. Baseline is
`d0604046ffa34b89de3864e3efa39127489914c4`; working tree and index were clean.

Acceptance: the same four changes appear in English and Traditional Chinese;
portrait is the owner's unmodified source photo; admissions images come from
the 2026-10-13 local synthetic M0 demonstration, are captioned as the earlier
interface and can be opened at full size; no private application source or
whole resume is published. Actual GitHub Pages update must complete.

Verification: source and asset visual review, hosting publication status and
ordinary URL retrieval. Application tests/lint/type/local builds and original
project regression remain unexecuted.

Actual results: source `72d2454` published successfully; Pages returned `built`.
Both language pages and three new image URLs returned HTTP 200. The refreshed
in-app page shows the portrait, named workplace, two demo links/captions and
single-line personal footer. Actual avatar rendering was viewed. Evidence and
the unexecuted test scope are recorded in [DELIVERY_02](DELIVERY_02.md).

## PORTFOLIO-01 — Developer portfolio and resume link

Status: Completed (2026-10-14).

Goal: adapt the requested ZYYO homepage into an English/Traditional Chinese
developer portfolio with two evidence-based project case studies; publish the
personal GitHub Pages site; add its verified URL to new local copies of relevant
IT resumes.

Scope: HTML, theme/layout CSS, lightweight JavaScript, original initials mark,
selected synthetic project images, attribution and maintenance documentation.
Personal resumes are local deliverables and are excluded from this repository.

Acceptance: both languages describe DocFlow and the admissions workspace;
private source repositories remain private; project limitations are explicit;
no template author's profile, payment codes or analytics remain in the site;
GitHub Pages publication has an actual success result and reachable URL; three
new IT resume copies retain their source layouts and contain a clickable link.

Verification: source/document review completed. GitHub Pages returned `built`
and its deployment returned `success`; both language URLs returned HTTP 200.
Three local IT resume copies contain a visible, clickable URL, retain one page,
and preserve the original source-file hashes. Their rendered pages were actually
viewed and show a clear link without overlap or clipping. See [delivery](DELIVERY.md).
No application unit/integration/lint/type/build
test suite is planned for this buildless site. Existing project tests are not
rerun or claimed as verification of this portfolio.

Known limitation: the optional account-profile website/name/bio update failed
because the existing CLI credential lacks the `user` scope. No credential scope
was expanded. The standalone portfolio site and resume URLs are complete.

Next task: optional role-specific resume rewrite. It is not part of this task.
