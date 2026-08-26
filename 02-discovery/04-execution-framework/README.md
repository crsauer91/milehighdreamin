# Hybrid Execution Framework

This directory supplies reusable discovery decisions for a broad Salesforce MVP. It uses the whole Mile High Dreamin repository as the source and keeps executor-specific gate status, evidence, and ownership blank.

## Selected persona

[Multi-Channel Independent Artist-Operator](01-hybrid-persona-and-mvp.md) combines the shared needs of touring artists, bands, producers, online creators, and composer/educators. It is a framework persona, not a claim about a specific client.

## Index

1. [Hybrid persona and MVP](01-hybrid-persona-and-mvp.md)
2. [Controlled values](02-controlled-values.md)
3. [Field mappings](03-field-mappings.md)
4. [Consent, channel, and retention](04-consent-channel-retention.md)
5. [Duplicate management](05-duplicate-management.md)
6. [KPI dictionary](06-kpi-dictionary.md)
7. [Import templates](import-templates/README.md)

## Standard-first baseline

Use Account, Lead, Contact, Campaign, Campaign Member, Opportunity, Opportunity Contact Role, Product, Price Book, Opportunity Product, Case, and Task. Contacts are canonical fans under the shared **None** Account. External platforms remain systems of record for payments, commerce, ticketing, email delivery, membership delivery, and accounting where practical.

Custom fields are limited to the fan, consent, revenue, membership, Campaign, source-key, and service questions already required by strategy. Use reports, dashboards, list views, validation rules, Duplicate Management, and narrow Flow before considering code or custom objects.

## Executor use

1. Copy the import templates; do not add client data to this repository.
2. Confirm the configured API names and picklist values.
3. Replace configurable defaults only when the client has a documented business or legal requirement.
4. Test a small import, duplicate behavior, consent validation, totals, and relationships.
5. Complete the [prebuild gates](../05-prebuild-gates.md) for the client implementation.

This directory is the canonical source for framework mappings and controlled values. Other documents should link here instead of copying the full tables.
