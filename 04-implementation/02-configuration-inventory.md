# Configuration Inventory

Copy this blank inventory to the secured implementation workspace. Record org-specific names, owners, status, and evidence there; do not add deployable metadata or client data here.

| Area | Required configuration | Verification |
|---|---|---|
| Identity | Account, Lead, Contact, shared **None** Account, conversion mapping | Ordinary fans resolve to one canonical Contact under **None** |
| Source and consent | Standard `LeadSource`; consent status/date/source; channel opt-outs; Lead/Contact field history; secured long-term evidence export | Affirmative consent requires source and date; withdrawal and prior evidence remain auditable |
| Duplicates | Lead-to-Lead, Contact-to-Contact, Lead-to-Contact rules; Duplicate Record Sets; review Tasks | Saves remain allowed where supported; candidates are visible and manually reviewed |
| Campaigns | Campaign Type, hierarchy, statuses, Member statuses, market, offer, targets | Livestream uses `Show` unless a separate type is approved |
| Revenue | Original and separate negative adjustment Opportunities, six normalization inputs, Amount, Products, Price Book, OCR, external/adjustment keys | Net Amount reconciles, history is preserved, and one primary purchasing-fan OCR exists |
| Fan value | tier, score, purchase dates/count, lifetime revenue, lapsed flag | Approved rules are documented and repeatable |
| Tier history | Contact field history for tier; optional lapsed flag history; approved secured export before retention expiry when needed | Old/new values, actor, and timestamps remain reportable for the approved horizon |
| Membership/VIP | Contact fields, Products, Opportunities, Campaigns, Tasks | No custom membership object unless standard design is proven insufficient |
| Service | Case categories, priority, queues, next action/due date, related transaction | Unresolved work is owned and reportable |
| Exceptions | controlled-subject Tasks and shared fault mechanism | Retry does not duplicate an open exception Task |
| Reporting | reports, dashboards, list views; Reporting Snapshot only with approved custom target object | Every card drills to reconciled source records |
| Security | MFA, permission sets/profiles, sharing, queues, field access | Least privilege and sensitive-data access pass tests |

## Naming and ownership register

For each component record: business outcome, component/API name, type, owner, activation status, dependency, entry criteria, external/source key, fault path, test case, deployment order, rollback action, and evidence link.

Custom fields, objects, code, packages, or integrations require a recorded reason showing that standard Salesforce cannot answer an approved business question.
