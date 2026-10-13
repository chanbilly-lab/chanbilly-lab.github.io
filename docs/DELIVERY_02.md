# PORTFOLIO-02 delivery record

Date: 2026-10-14.
Baseline: `d0604046ffa34b89de3864e3efa39127489914c4`, clean working tree/index.
Source branch / static Pages root: `codex/portfolio`, `/`.

## Four requested changes

1. Owner's portrait replaces the visible initials avatar in both language pages.
   The source JPEG was extracted as original image bytes from the supplied resume,
   with no image editing or redraw: 480×640, 23,430 bytes. Source PDF remained
   unchanged. The owner explicitly requested using their photo on the public site.
2. Work experience now identifies 香港中國簽證服務中心; English uses the company
   name already given in the owner's English resume. The general customer-service
   role and dates are retained; no new formal job title is inferred.
3. The template paragraph is removed from both visible footers. Attribution stays
   in the repository README, THIRD_PARTY and source comments.
4. Two admissions images show the genuine 2026-10-13 local synthetic M0 interface:
   a student-profile workspace and a rule-evidence dialog. Both are 1440×1000;
   all displayed names, institutions, scores and rules are DEMO fixtures. Root and
   an independent agent viewed the pixels before public copying. No private
   credentials, whole resume, contact fields, real student or official raw source
   is included. Captions identify the earlier interface; selecting an image opens
   its original size in a new tab. No new application screenshot was manufactured.

## Publication and limits

Source commit `72d245495f50494bfe1fd9678572dd16ee46b8bc` was published successfully.
Native deployment record:
https://github.com/chanbilly-lab/chanbilly-lab.github.io/actions/runs/38438314822
returned `completed / success`; GitHub Pages returned `built`.

Actual ordinary retrievals:

| URL path | HTTP | Response bytes | Content type |
| --- | --- | --- | --- |
| `/` | 200 | 17,403 | text/html; charset=utf-8 |
| `/zh.html` | 200 | 16,469 | text/html; charset=utf-8 |
| `/static/img/portrait.jpg` | 200 | 23,430 | image/jpeg |
| `/static/img/projects/admissions-profile-demo.png` | 200 | 102,781 | image/png |
| `/static/img/projects/admissions-evidence-demo.png` | 200 | 169,332 | image/png |

Returned page content and the refreshed in-app browser show the new portrait,
named workplace, two demo image links/captions and single personal footer line.
The rendered portrait was actually observed. Local presentation screenshots are
kept in ignored cache and are not application test results. Full-size image-link
navigation, all devices and browser compatibility were not exhaustively tested.

Existing resume links remain valid because the canonical homepage URL is
unchanged; no PDFs need another edit. This task does not modify the two private
application repositories.

No application unit/integration/browser test suite, lint, type check, local build,
new service startup, database operation or original project regression is run.
Source/media review and hosted publication are separate actual operations.
