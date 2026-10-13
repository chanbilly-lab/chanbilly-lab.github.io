# PORTFOLIO-01 delivery record

Date: 2026-10-14.

## Site

- Public portfolio source repository: https://github.com/chanbilly-lab/chanbilly-lab.github.io
- Source branch and Pages root: `codex/portfolio`, `/`.
- Initial portfolio source commit: `c09a93d9691b848c49bc443d8a332763d0c7ba7f`.
- GitHub Pages site response: `status=built`, `https_enforced=true`.
- Native hosted deployment: completed / success.
- Deployment record: https://github.com/chanbilly-lab/chanbilly-lab.github.io/actions/runs/38435688991
- Ordinary retrieval of https://chanbilly-lab.github.io/: HTTP 200, title
  `Chen Zhi Peng | Software Developer`, 15,630 response bytes.
- Ordinary retrieval of https://chanbilly-lab.github.io/zh.html: HTTP 200, title
  `陳志鵬 | 軟件開發`, 14,870 response bytes.
- The rendered homepage was opened in the in-app browser. Basic English content
  and Traditional Chinese footer layout were observed. This was not a full
  responsive, accessibility, theme or browser-compatibility test.

Actual site operations included `gh repo create ... --public`, an ordinary
`git push -u origin codex/portfolio`, and the Pages REST create/get calls with
branch `codex/portfolio` and root `/`. No credentials appear in remote URLs or
tracked files. The static hosting deployment is separate from an application
test/build suite.

## Local resume deliverables

Three new private PDF copies were produced for English developer, Traditional
Chinese software developer and AI customer engineer applications. Each contains
`Portfolio: https://chanbilly-lab.github.io/` and one new clickable URI annotation.

The PDF operation marker ran successfully once before editing. Authoring used
ReportLab overlays and pypdf document cloning. Source hashes matched before and
after; page count, metadata and numerical page geometry were preserved. All three
final single-page PDFs were rendered with Poppler at 140 dpi and actually viewed.
Links are readable and do not overlap the original content. Font-substitution
warnings were inherited from the sources; no missing glyphs were seen in the
rendered output. Initial decimal-coordinate representation rejection was fixed
before any output was saved, and the retry completed.

PDFs and their private audit details are stored locally, not in this public
repository. Sales and game-planning resumes were not edited. No original was
overwritten, and no resume claims were rewritten.

## Limits

The GitHub account-profile website/name/bio update was attempted but returned
404 with a missing `user` credential-scope message. The profile fields remain
unchanged; no credential authorization was expanded. The verified homepage URL
can be entered manually into the account's Website field.

DocFlow and study-admissions-agent both remain PRIVATE. No changes, publication
or test runs were made in their source repositories during this task.
Application tests, lint, type checks, local builds and exhaustive UI/mobile/theme
verification were not run; historical application results are not reused as
new portfolio acceptance evidence.
