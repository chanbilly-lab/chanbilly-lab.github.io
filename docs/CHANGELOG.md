# Changelog

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
