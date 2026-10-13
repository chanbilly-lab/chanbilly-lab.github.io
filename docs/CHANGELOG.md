# Changelog

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
