# Decisions

## ADR-P01 — Static GitHub Pages portfolio

- Date: 2026-10-14.
- Background: the owner requested a personal GitHub homepage using the
  ZYYO666/homepage template and showcasing two existing projects for developer/IT
  applications.
- Decision: keep buildless HTML/CSS/JavaScript, with English and Traditional
  Chinese pages. Publish a dedicated public `chanbilly-lab.github.io` repository
  via GitHub Pages. Keep the two application repositories private.
- Reason: the template is already static, so a server, Docker service or framework
  adds no necessary behavior. Employers can read standalone case studies without
  private repository access.
- Alternatives: a new framework, paid PHP administration, or exposing application
  source repositories. None is required for the requested presentation.
- Impact: no changes to the applications, databases, credentials or hosting.
  Resume PDFs, telephone/address details and source research remain local.
  Current project status is shown separately from implemented features.

## ADR-P02 — Preserve source resumes

- Date: 2026-10-14.
- Background: supplied PDFs contain personal application details and variant
  employment titles; the request is to add a portfolio link for IT applications.
- Decision: add a clickable verified homepage URL to separate copies of the
  English developer, Traditional Chinese developer and AI customer engineer
  resumes. Preserve the original text, title wording, page count and layout.
- Reason: a link update does not authorize inventing career claims or resolving
  inconsistent titles. Full PDFs need not be publicly hosted.
- Alternatives: replace the originals or publish a resume download on the site.
  These are unnecessary for the requested link addition.
- Impact: outputs are delivered locally after visual review; sales and game
  planning originals are kept intact.
