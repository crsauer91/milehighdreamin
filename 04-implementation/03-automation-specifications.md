# Automation Specifications

The MVP has **nine business outcomes, not necessarily nine Flow definitions**. Consent Validation requires separate Lead and Contact implementations. Shared subflows are limited to stable cross-cutting behavior such as exception Task creation.

Every automation must document owner, trigger, entry and exit criteria, dependencies, changed fields, bulk behavior, idempotency key, fault path, retry behavior, tests, deployment order, and rollback action.

| Outcome | Required behavior | Idempotency and exception checks |
|---|---|---|
| New Fan Intake | Manual Screen Flow validates/normalizes/reviews duplicates before Lead creation; Web/import/API create Leads without the Screen Flow and then run record-triggered consent, source, ownership, and duplicate controls | `Source_Record_Key__c` prevents repeat creation; actionable faults create one `Exception - Intake` Task |
| Lead Conversion Follow-Through | Run only after first qualifying sale; use **None** Account; initialize Contact; relate purchase and primary OCR; create one follow-up | Conversion or retry cannot create a second Contact, OCR, or open follow-up Task |
| Consent Validation | Separate Lead and Contact implementations require source/date for affirmative consent and preserve opt-outs | Never infer consent; failed action creates one related exception Task when human work is needed |
| Purchase Update | Normalize net Amount; preserve original sales; process post-sale refunds/corrections as separate negative adjustment Opportunities; maintain revenue, purchase dates/count, repeat-buyer and applicable membership fields | Original and adjustment external keys make upserts safe to rerun; rollups sum originals plus adjustments without double counting |
| Fan Tier Evaluation | Apply only approved inputs, weights, windows, caps, blanks, and thresholds | Same inputs yield same tier; field history records actual changes; unresolved rules block activation |
| Lapsed Fan Evaluation | Apply approved inactivity, high-value, recovery, and scheduling rules independently of tier | Re-evaluation does not duplicate work; unresolved rules block activation |
| Campaign Member Follow-Up | Create governed actions for significant responses | One open Task per member/outcome/window; no Task for unapproved or nonconsented outreach |
| Membership Renewal | Identify records in the approved window and create one reminder/follow-up | Unique member/renewal-period key prevents duplicates; unresolved window rules block activation |
| Case Triage | Assign queue/owner, priority, next action, due handling, and escalation | Repeat updates do not reopen or duplicate work without an approved condition |

## Standard exception pattern

Actionable Salesforce Flow, intake, and import failures become Tasks with controlled subjects `Exception - Flow`, `Exception - Intake`, or `Exception - Import`; Owner, Status, Priority, due date; related record where available; concise error, run/batch or source key, retry guidance, and occurrence time. Use an idempotency key to avoid duplicate open Tasks.

Automated-process email and logs remain diagnostics. Code, metadata, test-script, and deployment defects belong in the external implementation issue tracker, not Salesforce Tasks.

## Channel-specific acceptance

Test manual entry, Screen Flow, Web-to-Lead, Data Import Wizard/Data Loader, API/import integration, Lead conversion, scheduled/bulk execution, duplicate candidates, faults, and retries independently. Interactive **Allow + Alert** behavior does not prove noninteractive channels will avoid `DUPLICATES_DETECTED`.
