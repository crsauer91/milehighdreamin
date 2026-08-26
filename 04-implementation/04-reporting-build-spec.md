# Reporting Build Specification

Use the [KPI dictionary](../02-discovery/04-execution-framework/06-kpi-dictionary.md) as metric authority. Every dashboard component must drill to one governed report and reconciled source records.

## Required report families

- Fans by Tier; Repeat Buyers; Lapsed High-Value Fans.
- True Fan Emergence from Contact tier field-history transitions into True Fan or Patron caused by approved qualifying spend.
- Fan Growth as ending canonical fan count minus beginning count.
- Direct Revenue by Campaign, Channel, Market, Offer/Drop, and Product.
- Membership Renewals/Churn and VIP Uptake after their decision gates pass.
- Campaign response, attendance, post-show conversion, and market.
- Case backlog, aging, due work, and resolution.
- Duplicate Review from unresolved Duplicate Record Sets and review Tasks.
- Salesforce Exceptions from open controlled-subject Tasks.
- Consent by source and invalid affirmative-consent records.

## History decisions

Enable Contact Field History Tracking for `Fan_Tier__c`; evaluate tracking `Lapsed_Fan_Flag__c` against retention and reporting needs. Verify old value, new value, timestamp, and user/process identity. When the approved analysis horizon exceeds available standard retention, export the minimum transition evidence to the approved secured analytics archive before expiry.

For Fan Growth, record the selected beginning-balance method before activation. Use native historical reporting where reproducible. A Salesforce Reporting Snapshot stores results in a custom target object: configure one only after Gate 33 explicitly approves the object, target fields, cadence, retention, owner, security, and reconciliation. Do not add any other custom history object until standard reporting and the approved secured export are proven insufficient.

## Revenue by Product spike

1. Reconcile Opportunity Amount to gross, tax, fees, refunds/chargebacks, and shipping inputs.
2. Allocate net Amount proportionally by qualifying Opportunity Product extended selling price.
3. If qualifying line total is zero, leave allocation unattributed and route for review.
4. Round to currency precision and put the remainder on the largest qualifying line.
5. Prove whether standard reporting can produce the result. If not, document the smallest derived field/Flow design, idempotent handling for refunds/corrections, and reconciliation before building.

## Acceptance

For each report record purpose, filters, grouping, formula, owner, refresh/cadence, security visibility, zero-denominator convention, sample-record proof, control total, and dashboard consumer. Totals must reconcile to source systems where Salesforce is not the financial system of record.
