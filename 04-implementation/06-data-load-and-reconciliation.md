# Data Load and Reconciliation

External commerce, payment, ticketing, membership, email-delivery, and accounting platforms remain systems of record where defined. Salesforce stores governed relationship and reporting values.

## Before load

- Inventory sources, owners, extraction dates, record counts, keys, consent evidence, and financial control totals.
- Preserve protected source backups in the secured workspace.
- Map to canonical fields and controlled values; use standard `LeadSource`.
- Generate stable composite `Source_Record_Key__c` and `External_Order_Key__c` values.
- Profile blanks, invalid values, duplicate candidates, encoding, dates, currencies, refunds, and relationships.
- Define rollback for both configuration and data before loading.

## Load sequence

1. Reference data, shared **None** Account, Products, and active Standard Price Book entries.
2. Leads and Contacts with consent and source evidence; do not infer opt-in.
3. Campaigns and Campaign Members.
4. Opportunities with all six revenue inputs, external keys, Products, and one primary purchasing-fan Opportunity Contact Role.
5. Cases and open operational Tasks where in scope.

Run a small reversible pilot first. Separate create from update, preserve result files, and stop on unexpected duplicate, consent, ownership, relationship, or financial behavior.

## Channel tests

Test manual entry, Screen Flow, Web-to-Lead, Data Import Wizard/Data Loader, API/import integration, and Lead conversion separately. Record whether each channel allows, alerts, rejects, or returns `DUPLICATES_DETECTED`; route rejected rows to review without blocking valid records unnecessarily.

## Reconciliation

Reconcile input, success, rejection, duplicate, and net-created/updated counts. Sample consent, source, owner, **None** Account, Lead conversion, Campaign membership, Products, primary OCR, Cases, and Tasks. For revenue, prove:

`Amount = Gross - Tax - Fees - Refunds/Chargebacks - MIN(Shipping Collected, Shipping Cost)`

Reconcile Opportunity Amount and product allocation independently to the source. Verify repeated files, retries, refunds, and corrections are idempotent and do not duplicate records, OCRs, Tasks, revenue, or product allocation.

Create one batch-level `Exception - Import` Task for actionable failures; use record-level Tasks only when individual work is required. Keep rejected-row files in the secured workspace.
