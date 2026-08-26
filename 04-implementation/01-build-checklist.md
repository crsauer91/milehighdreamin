# Build Checklist

Use this dependency order only after all required [prebuild gates](../02-discovery/05-prebuild-gates.md) pass or have accepted exceptions. Record owners, decisions, and evidence in the secured implementation workspace.

## 1. Approve the build

- [ ] Freeze MVP scope and confirm the standard-first boundary.
- [ ] Resolve every item in the Tier, Lapse, VIP, and Renewal decision gate before activating dependent automation.
- [ ] Confirm source systems, external keys, reconciliation owners, security model, duplicate policy, and deployment path.
- [ ] Capture baseline fan, revenue, repeat-buyer, lapsed-fan, and campaign measures.

## 2. Foundation and access

- [ ] Configure the shared **None** Account and Contact-centered fan model; keep Person Accounts disabled.
- [ ] Configure least-privilege access, MFA, queues, sharing, object/field permissions, and sensitive-data restrictions.
- [ ] Configure controlled values, fields, layouts, validation, list views, and ownership.
- [ ] Configure Lead-to-Lead, Contact-to-Contact, and Lead-to-Contact matching and duplicate rules as **Allow + Alert** where supported.
- [ ] Confirm standard `LeadSource` is the sole acquisition source; do not create `Acquisition_Channel__c`.

## 3. Campaign, revenue, and service

- [ ] Configure Campaigns, Campaign Member statuses, Products, Standard Price Book, Opportunities, Opportunity Products, Cases, and Tasks.
- [ ] Treat livestreams as Campaign Type `Show` unless approved reporting proves a separate `Livestream` value is necessary.
- [ ] Require one primary purchasing-fan Opportunity Contact Role for every ordinary fan purchase.
- [ ] Configure and reconcile all six revenue-normalization inputs and net Opportunity Amount.
- [ ] Preserve original sales and configure separate related negative `Refund / Adjustment` Opportunities with stable adjustment keys and idempotent rollups.
- [ ] Prove Direct Revenue by Product with standard reporting; if insufficient, document the smallest derived allocation solution before building it.

## 4. Data and automation

- [ ] Run a small, reversible load and reconcile counts, consent, duplicates, relationships, revenue, products, and rejected rows.
- [ ] Implement the nine business outcomes in [Automation Specifications](03-automation-specifications.md). They are outcomes, not necessarily nine Flow definitions.
- [ ] Implement actionable Salesforce exceptions as owned Tasks; track implementation defects externally.
- [ ] Enforce source-key idempotency and retry safety for records, Tasks, revenue, and scheduled work.

## 5. History, reporting, and release

- [ ] Enable history for Lead/Contact consent fields and Contact `Fan_Tier__c`; assess `Lapsed_Fan_Flag__c`; configure approved secured exports before required evidence exceeds available retention.
- [ ] Select and document the historical fan-count method; explicitly approve the required custom target object before using a Salesforce Reporting Snapshot.
- [ ] Build and reconcile governed reports, dashboards, and drill-downs.
- [ ] Complete security validation, channel-specific UAT/regression, deployment, smoke testing, and rollback rehearsal.
- [ ] Index evidence, record accepted exceptions, and hand the completed org to the [admin runbook](../01-strategy/03-admin-runbook.md).

## Definition of done

All required gates are resolved; configuration and automation meet approved specifications; channel tests, UAT, regression, reconciliation, security, reporting, deployment smoke tests, and rollback readiness pass; evidence is indexed without client data in this repository; and operating ownership is accepted.
