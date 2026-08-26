# UAT and Regression Matrix

Copy this matrix to the secured workspace and add test data, expected results, tester, date, status, defect link, and evidence. Defects belong in the external issue tracker; actionable Salesforce exceptions remain Tasks.

| Area | Required scenarios |
|---|---|
| Identity | ordinary fan under **None**; businessperson exception; no Person Account; first-sale conversion |
| Source/consent | each `LeadSource`; affirmative consent with source/date; missing evidence; opt-out preservation; no inferred consent |
| Duplicates | Lead-to-Lead, Contact-to-Contact, Lead-to-Contact; keep separate; merge; conversion; manual and noninteractive behavior |
| Channels | manual, Screen Flow, Web-to-Lead, Data Import Wizard/Data Loader, API/import integration, bulk/scheduled |
| Revenue | six inputs; zero/negative values; refund/correction; Amount reconciliation; product lines; zero-line allocation; rounding |
| OCR | exactly one primary purchasing-fan Opportunity Contact Role; retry; Contact attribution; no double counting |
| Tier/history | approved boundary values; blanks/caps/windows; Buyer to Repeat Buyer to True Fan/Patron; old/new history and emergence report |
| Lapse | approved inactivity boundary, recovery, independent tier behavior, repeat scheduled execution |
| Fan Growth | beginning/ending balances, snapshot or approved method, backdated/corrected record handling |
| Campaigns | hierarchy, statuses, livestream as `Show`, response, attendance, follow-up, revenue attribution |
| Membership/VIP | approved status, eligibility, renewal boundary, one reminder per period; blocked until rules approved |
| Cases | intake, assignment, priority, next action/due date, escalation, closure, security |
| Exceptions | Flow/intake/import fault; owned controlled-subject Task; useful message; diagnostic log; retry without duplicate Task |
| Reporting | KPI filters/formulas, drill-down, security, zero denominator, source reconciliation |
| Access | each role's allowed and denied actions, queue access, sensitive fields, reports, exports |
| Release | deployment order, activation, smoke test, rollback, post-rollback integrity |

## Regression rule

Run affected scenarios for every change and the full critical suite before release. Critical suite: consent, duplicate behavior by channel, Lead conversion, purchase/revenue/OCR, tier/lapse, exception Tasks, access, reporting control totals, and rollback. No production-equivalent release proceeds with unresolved critical defects or an unaccepted gate exception.
