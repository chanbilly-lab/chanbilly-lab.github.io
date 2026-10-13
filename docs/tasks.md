# Portfolio tasks

## PORTFOLIO-02 — Owner's four page refinements

Status: [~] In progress (2026-10-14).

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
