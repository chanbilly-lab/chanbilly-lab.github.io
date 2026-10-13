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

Source upload, first manual generation, asset retrieval and Pages publication
are pending. Record exact revision/run/HTTP results before marking complete.

No application unit/integration/browser test suite, lint, type check, local build
or original-project regression is executed (owner's instruction). Running the
requested generator and publishing/viewing its assets are distinct actions.
The future daily tick, all browsers and reduced-motion behavior remain
unverified. GitHub schedules may be delayed and may be disabled after inactivity.

Private application-source publication and earlier homepage commit-email cleanup
remain separate pending work. This task does not rewrite history or change any
application repository visibility.
