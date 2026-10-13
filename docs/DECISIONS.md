# Decisions

## ADR-P03 — Generate contribution SVGs on a separate branch

- Date: 2026-10-14.
- Background: the owner supplied a scheduled/manual GitHub Actions example for
  a contribution snake animation on the portfolio.
- Decision: use the requested Platane/snk svg-only v3 generator and a Node 24
  compatible crazy-max/ghaction-github-pages v5 publisher, both pinned to verified
  full commit SHAs. Only generated dist files go to output; keep_history=true
  preserves that branch through ordinary pushes. Keep the Pages source branch
  codex/portfolio and use public raw-content SVG URLs in the site/README.
- Reason: this adds the requested animation without publishing application code,
  replacing the website branch or requiring a PAT. Official publisher v3 declares
  Node 16, while current v5 declares Node 24. The existing repository-scoped
  GITHUB_TOKEN is sufficient; only the generation job gets contents:write.
- Alternatives: publish into the website source branch, force-replace output
  history or use an owner PAT. Those are unnecessary for this generated asset.
- Impact: daily UTC 00:00 / Hong Kong 08:00 generation and optional manual
  dispatch. Theme selection changes the SVG source; reduced-motion settings hide
  animation. The calendar requests contribution counts/dates/levels, not private
  project files, contact information or repository titles. No new local package
  dependency, application test or hosting-source switch is introduced.
- Official definitions:
  [generator](https://github.com/Platane/snk/blob/d8f6715049803e982ee5ff501b6b9b7d5deeb09b/svg-only/action.yml),
  [publisher](https://github.com/crazy-max/ghaction-github-pages/blob/1d6ee9b181a81033a16bd707a1401afa978daab4/action.yml).

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
- Background: supplied PDFs contain personal application details; the request is
  to add a portfolio link for IT applications.
- Decision: add a clickable verified homepage URL to separate copies of the
  English developer, Traditional Chinese developer and AI customer engineer
  resumes. Preserve the original text, title wording, page count and layout.
- Reason: a link update should leave existing career claims intact. Full PDFs
  need not be publicly hosted.
- Alternatives: replace the originals or publish a resume download on the site.
  These are unnecessary for the requested link addition.
- Impact: outputs are delivered locally after visual review; sales and game
  planning originals are kept intact.
