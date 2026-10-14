# Changelog

## 2026-10-14 — PRIVACY-PUBLISH-01

- Purpose: reflect the owner's approved clean public source publication.
- Files: index.html, zh.html, README.md, docs/tasks.md, docs/CHANGELOG.md,
  docs/DECISIONS.md and docs/SOURCE_PUBLICATION.md.
- Added: actual GitHub source links for both project cards in both languages;
  source publication and clean-checkout handoff notes.
- Changed: private-source wording to reviewed public-source availability; preserve
  existing case studies, demo scopes, color palette, images and snake workflow.
- Removed: stale claims that the application source repositories remain private.
- Bug fixes: no application behavior changes.
- Checks: new application repo identities, clean history/tree, ordinary push and
  anonymous public access verified; private archives remain read-only and their
  old Git objects are unavailable under new public IDs. Homepage publication is
  pending, to be recorded in docs/SOURCE_PUBLICATION.md.
- Tests: application tests, lint, type checks and local builds unexecuted
  (owner's instruction); privacy scans and publication reads are separate actions.
- Known issues: earlier homepage email metadata still needs a separate authorised
  cleanup. Public source does not establish live deployment or production readiness.

## 2026-10-14 — PORTFOLIO-05

- Purpose: adapt the homepage palette to the owner's live zyyo.cc reference.
- Files: static/css/root.css, static/css/style.css, static/img/monogram.svg,
  index.html, zh.html, README.md, docs/tasks.md, docs/CHANGELOG.md and
  docs/DELIVERY_05.md.
- Added: a neutral image-frame token, static multicolor hero text and solid text
  fallbacks for forced colors/printing.
- Changed: shared light/dark background, text, action, card, badge, tag, border,
  shadow and favicon colors; versioned stylesheet/favicon links avoid stale
  palette assets. Small dark accents use lighter violet and light title cyan
  uses a deeper shade than the reference for text clarity.
- Removed: previous green palette values from the shared theme and favicon.
- Bug fixes: none observed; fallbacks and versioned links are preventive source
  measures, not verified compatibility results.
- Verification: root viewed the live reference and an independent agent read its
  actual inline/style.css colors. Source bb778f5 published successfully through
  native Pages run 38453491650. Both languages, both versioned stylesheets and
  favicon returned HTTP 200. Light/dark presentation was actually viewed and
  saved; the original dark preference was restored. See docs/DELIVERY_05.md.
- Tests: application unit/integration/browser test suites, lint, type checks,
  local builds and original-project regression unexecuted (owner's instruction).
- Known issues: broad device/print/forced-color behavior and quantified contrast
  are unverified. No content/layout/application/architecture/dependency change;
  no reference identity, images, fonts, analytics or scripts copied.

## 2026-10-14 — PORTFOLIO-04

- Purpose: add the requested daily contribution snake animation.
- Files: .github/workflows/snake.yml, index.html, zh.html,
  static/css/style.css, static/js/script.js, README.md, docs/tasks.md,
  docs/CHANGELOG.md, docs/DECISIONS.md and docs/DELIVERY_04.md.
- Added: scheduled/manual SVG generation, separate output publication, a
  bilingual contribution section and a theme-aware README picture.
- Changed: existing theme selection also selects the animation's light/dark
  image; narrow displays can scroll the calendar; reduced-motion users get a
  calendar link without the displayed animation.
- Removed: none.
- Bug fixes: during actual content viewing, the browser retained the older
  unversioned script and loaded a light SVG on a dark page. Updated style/script
  references include a version query so visitors receive the new theme behavior.
- Verification: official action definitions and source reviewed. First manual
  Snake run 38451791498 succeeded in 19 seconds, publishing the light/dark SVGs
  and .nojekyll to output. Both SVGs and both language pages returned HTTP 200.
  Source 83e5283 and cache-refresh repair 774e062 each published successfully.
  The existing dark-theme page now loads the dark SVG and its actual calendar
  and snake were viewed. Evidence is recorded in docs/DELIVERY_04.md.
- Tests: application unit/integration/browser test suites, lint, type checks,
  local builds and original-project regression unexecuted (owner's instruction).
  The requested animation generation is a publication operation.
- Known issues: daily runs can be delayed or disabled by GitHub inactivity;
  future schedule execution, every device and reduced-motion behavior are not
  yet observed. Prior private-email history and application-publication approval
  remain separate follow-ups. No application code or database changes.

## 2026-10-14 — PORTFOLIO-03

- Purpose: simplify the homepage copy and foreground actual project features in
  response to six browser comments.
- Files: index.html, zh.html, README.md, docs/tasks.md, docs/CHANGELOG.md and
  docs/DELIVERY_03.md.
- Added: a short admissions feature box covering the complete local synthetic
  core flow, four eligibility states, evidence, missing information, next steps
  and operation without a model API key.
- Changed: both personal introductions use everyday language; admissions
  delivery wording now describes demonstrable features and local demo use.
- Removed: the two selected DocFlow status paragraphs, its long screenshot note
  and the final admission-threshold comparison sentence. Provincial cutoff
  terminology and existing synthetic-image captions are retained.
- Bug fixes: none; this is a requested content refinement.
- Verification: source and diff review performed. Source `1c6e393` was pushed
  normally; its native Pages deployment completed successfully and Pages returned
  `built`. Both language URLs returned HTTP 200 with the new text; the refreshed
  in-app page shows the requested changes. Evidence is in docs/DELIVERY_03.md.
- Tests: unit/integration/browser test suites, lint, type checks, local builds
  and original application regression unexecuted (owner's instruction).
- Known issues: the local synthetic demo is supported by earlier actual startup
  evidence; full real-data public deployment readiness is not established. The
  separate source-publication approval is still pending. No new dependency,
  architecture, API, database or deployment decision is introduced.
  Upload review found eight private-email occurrences in earlier homepage commit
  metadata; new commits use GitHub noreply. Old-history cleanup is a separate
  privacy follow-up and is not performed by this copy task.

## 2026-10-14 — PORTFOLIO-02

- Purpose: apply the owner's four browser comments to both language pages.
- Files: index.html, zh.html, static/css/style.css, static/img/portrait.jpg,
  static/img/projects/admissions-profile-demo.png,
  static/img/projects/admissions-evidence-demo.png, README.md, docs/tasks.md,
  docs/CHANGELOG.md, docs/THIRD_PARTY.md and docs/DELIVERY_02.md.
- Added: owner's original portrait JPEG; two actual 2026-10-13 synthetic M0
  screenshots with dates/scope captions and native full-size image links.
- Changed: customer service experience names the Hong Kong Chinese visa service
  centre workplace. The portrait has display-only object-fit styling; broad
  screenshots use a readable single-column gallery.
- Removed: the visible template footer paragraph in both language pages;
  repository/source attribution is preserved. The initials favicon remains.
- Bug fixes: none; this is a requested presentation/content refinement.
- Verification: root and independent agents read the actual source portrait and
  two screenshots. Assets show no whole resume/contact fields, credentials or
  genuine student data. The source PDF hash is unchanged. Source `72d2454`
  deployment completed successfully and Pages returned `built`; both language
  pages and all three new image URLs returned HTTP 200. Updated HTML and the
  refreshed in-app page contain the four requested changes; rendered portrait
  was actually viewed. See docs/DELIVERY_02.md for the publication record.
- Tests: application unit/integration/browser test suites, lint, type checks,
  local builds and original-project regression are unexecuted. Ordinary hosted
  retrieval and viewing delivered content are recorded separately.
- Known issues: admissions images are the earlier synthetic M0 interface, not
  new school/program search or live admissions evidence. No new architecture,
  dependency, API, database or deployment decision is introduced.

## 2026-10-14 — PORTFOLIO-01

- Purpose: developer/IT portfolio based on the requested homepage template and
  local resume link updates.
- Files: entry pages, CSS/JS, initials mark, two synthetic screenshots,
  README, attribution and task/decision/delivery records; 36 initial repository
  paths plus the delivery record. Resume outputs are local and excluded.
- Added: English/Traditional Chinese content, two project case studies,
  accessible navigation and theme controls, static GitHub Pages configuration.
- Changed: template branding and content for Chen Zhi Peng's developer portfolio.
- Removed: template author's identity/media, third-party analytics, copied
  payment/contact links, unused fonts/assets and server deployment configuration.
- Bug fixes: remove restrictions on copying text, keyboard focus and zoom.
- Verification: GitHub Pages `built` and native deployment `success` for source
  commit `c09a93d`; English and Traditional Chinese URLs returned HTTP 200.
  Three local IT resume copies have clickable URI annotations, preserve source
  file hashes and have actually reviewed PNG renders without link overlap.
  First PDF authoring attempt stopped on decimal page-coordinate serialization;
  a numeric 0.001-point tolerance corrected the representation check. The retry
  completed. Poppler reported inherited font-substitution warnings; actual
  rendered text remains legible. No original PDF was overwritten.
- Tests: no application unit/integration/lint/type/local build, original project
  regression, keyboard/mobile/theme/compatibility test suite was run. Hosting
  publication and PDF authoring/visual review are separate actual operations.
- Known issues: applications are private engineering portfolios, not production
  services; source template has no standard LICENSE file, so attribution is retained without
  adding an invented license. The optional GitHub user-profile update returned
  404 with a missing `user` scope message; account fields were not changed and
  scopes were not expanded. The two application repositories remain PRIVATE.
