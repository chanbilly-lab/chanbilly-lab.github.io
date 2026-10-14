# PRIVACY-PUBLISH-01 — Clean application sources

Date: 2026-10-14 (Asia/Hong_Kong).

The owner explicitly approved preserving private histories and publishing clean
same-name versions after the source/privacy review.

| Project | New public ID | Public source | Original private/read-only archive |
| --- | --- | --- | --- |
| DocFlow | 1418914087 | https://github.com/chanbilly-lab/docflow | docflow-private-archive (ID 1366248864) |
| Admissions | 1418914840 | https://github.com/chanbilly-lab/study-admissions-agent | study-admissions-agent-private-archive (ID 1400234431) |

Public work uses D:/Projects/docflow-public and D:/Projects/study-public, on
codex/privacy-release with GitHub noreply metadata. Original checkouts and
original mirrors point to the private archives, retaining all work and history.
No force-push or old-history deletion occurred. Source privacy reports describe
actual redactions and preserved application/code/data bytes.

Both fresh repositories were reviewed while private, then made PUBLIC. Anonymous
metadata and project pages returned 200; private archive pages and original Git
object probes returned 404. Original-HEAD commit API probes returned 422 with
No commit found for SHA; the first 404-only expectation stopped on 422 and the
actual absence was then reviewed. Each new repository contains only clean history
and no original-history branch. Application CI runs remained zero.

Publication commits: DocFlow 654ffa278b9391de5b569159197501e8c8f09a9e;
admissions 1843d89cc6559af86b78bb2fcc84c1cb2ed3fc7b. Current public-source Gitleaks
runs returned exit 1 with the same 1/18 previously reviewed false positives;
finding fingerprints are unchanged. Static source comparison found no missing
original file or non-document/code change. Reviewed real-information categories
were absent; remaining matches are generic project paths and one public
dependency-maintainer contact. Private raw reports/maps remain outside all repos.

Both portfolio pages add GitHub source links and update private-source wording.
Homepage Pages publication/retrieval evidence is pending.

No application tests, lint, type check, local build, AWS call or application
deployment occurred. Public source does not establish live service or production
readiness. The homepage's own eight earlier private-email metadata occurrences
remain a separate pending cleanup and are not resolved by this operation.
