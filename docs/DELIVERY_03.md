# PORTFOLIO-03 delivery record

Date: 2026-10-14.
Baseline: `bbf65308ebd61782dcfc9465fd922889edd69551`, clean working tree/index.
Source branch / static Pages root: `codex/portfolio`, `/`.

## Requested copy changes

1. The introduction now says directly what tools are used and how the work helps
   users organise information and documents.
2. The DocFlow paragraph about historical AWS journeys is removed.
3. The next DocFlow paragraph about production readiness is removed.
4. The long DocFlow screenshot/source note is removed. The requested images and
   their short synthetic-demonstration captions remain.
5. The final sentence comparing provincial lines with university thresholds is
   removed. The reference data is still explicitly identified as three 2026
   Zhejiang provincial cutoff records.
6. The admissions status box now describes the complete local synthetic core
   demo, deterministic four-state checks, evidence, missing information, draft
   planning and key-free operation. A universal ready-to-deploy public service
   claim is not made: the existing evidence establishes local synthetic M0 use.

Both English and Traditional Chinese pages carry corresponding changes.
No application code, image, resume, database, API or deployment setup changes.
The original application repositories remain private while the separate
repository-promotion decision awaits the owner's answer.

## Publication and limits

Source commit `1c6e393d87e58c1235688d6445c4ee760550ac95` was pushed normally and
published successfully. Native Pages deployment
https://github.com/chanbilly-lab/chanbilly-lab.github.io/actions/runs/38450568406
returned `completed / success` for that exact revision. Pages returned `built`.

Actual ordinary retrievals with Cache-Control: no-cache:

| URL path | HTTP | UTF-8 response bytes | Content type |
| --- | --- | --- | --- |
| `/` | 200 | 16,747 | text/html; charset=utf-8 |
| `/zh.html` | 200 | 15,880 | text/html; charset=utf-8 |

Returned HTML contains the updated introduction and admissions feature box in
both languages. The refreshed in-app Traditional Chinese page shows the simpler
introduction, the specified paragraph removals, provincial terminology and new
core-feature text. Presentation evidence is stored in ignored local cache.

No unit/integration/browser test suite, lint, type check, local build or
original-project regression is executed (owner's instruction). Source review,
publishing this static site and viewing delivered content are separate actions.
Existing resume links remain valid because the canonical homepage URL is unchanged.

## Privacy follow-up found during upload review

The homepage's pre-existing commit metadata contains eight author/committer
occurrences of the owner's private email address. No address is reproduced here.
The new source commit uses the GitHub-provided noreply identity. This copy update
does not rewrite old history. Cleaning the already public metadata requires a
separate authorised history/repository operation, in addition to the pending
private application source-publication decision.
