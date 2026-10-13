# PORTFOLIO-04 delivery record

Date: 2026-10-14.
Baseline: `e57e9e7481fa04be41cd48a18487972a5757f68d`, clean working tree/index.
Default branch / static Pages root: `codex/portfolio`, `/`.

## Implementation

The owner's requested `0 0 * * *` schedule means UTC 00:00, or 08:00 in Hong Kong.
The same workflow supports manual dispatch. It generates two SVGs for the owner
from the contribution calendar, then publishes only dist to output. Publication
keeps history, does not force-push, and does not alter the Pages source branch.

Official generator v3 SHA: `d8f6715049803e982ee5ff501b6b9b7d5deeb09b`.
Official publisher v5 SHA: `1d6ee9b181a81033a16bd707a1401afa978daab4`.
The publisher is updated from the supplied v3 example for Node 24 compatibility.
Actions were actually enabled with allowed_actions=all at source review; output
was absent (the ref API returned 404). No PAT or new secret is installed.

Both language pages add a contribution section before contact. The existing
theme toggle chooses the light/dark SVG. The SVG can scroll horizontally on
narrow displays; reduced-motion CSS hides it and displays a calendar-link note.
The repository README embeds both palettes using a picture element. The site
loads the generated SVG as an image with no referrer, not as executable markup.

The SVG generator uses the repository's GITHUB_TOKEN for a contribution-calendar
GraphQL request. Its reviewed query requests dates, counts and levels; no private
repository code, project title, resume or contact data is published by this task.

## Actual publication

Source `83e5283232b684b72b0808c80a5e99f5af6e74ee` was pushed normally.
The requested first manual run completed successfully in 19 seconds:
https://github.com/chanbilly-lab/chanbilly-lab.github.io/actions/runs/38451791498.
Both generation and publication steps completed successfully.

Output revision: `e8ed77d7389a492ea0d1def4cd02666f1cea80e7`. Its root contains only
github-snake.svg, github-snake-dark.svg and the publisher's .nojekyll marker.
Native Pages deployment for source 83e5283 also completed successfully:
https://github.com/chanbilly-lab/chanbilly-lab.github.io/actions/runs/38451774121.
Pages returned built and still serves codex/portfolio at /.

Ordinary hosted retrievals with Cache-Control: no-cache:

| Asset | HTTP | UTF-8 response bytes | Content type |
| --- | --- | --- | --- |
| English `/` | 200 | 18,077 | text/html; charset=utf-8 |
| Traditional Chinese `/zh.html` | 200 | 17,192 | text/html; charset=utf-8 |
| output/github-snake.svg | 200 | 19,424 | image/svg+xml |
| output/github-snake-dark.svg | 200 | 19,424 | image/svg+xml |

Both SVGs declare width 880, height 192 and viewBox -16 -32 880 192. Both language
responses contain the new contribution section. No future scheduled tick is
claimed as executed.

During content viewing, the existing browser had dark theme but the new image
still used its light default source. The loaded image width was 880, so the SVG
was reachable; this was consistent with retaining the earlier unversioned script.
Both entry pages now version their updated stylesheet and script URLs to refresh
these cached assets. Repair source `774e06232d2c667014017d1f34ac911637b59334`
published successfully through Pages run:
https://github.com/chanbilly-lab/chanbilly-lab.github.io/actions/runs/38452273467.

After repair, ordinary retrieval still returned HTTP 200 for both pages:
English 18,111 UTF-8 bytes; Traditional Chinese 17,226. Both responses include the
versioned style.css and script.js references. The refreshed browser's existing
dark theme now selects github-snake-dark.svg. Its actual rendered calendar and
snake were viewed; a presentation screenshot is retained in ignored local cache.
Output commit author is github-actions[bot] with GitHub noreply metadata; the
source/repair commits use the owner's GitHub noreply identity. No old-history
cleanup is implied by these new commits.

No application unit/integration/browser test suite, lint, type check, local build
or original-project regression is executed (owner's instruction). Running the
requested generator and publishing/viewing its assets are distinct actions.
The future daily tick, all browsers and reduced-motion behavior remain
unverified. GitHub schedules may be delayed and may be disabled after inactivity.

Private application-source publication and earlier homepage commit-email cleanup
remain separate pending work. This task does not rewrite history or change any
application repository visibility.
