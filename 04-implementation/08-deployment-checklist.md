# Deployment Checklist

## Pre-deployment

- [ ] Approved scope, gates, change set/manifest, owners, window, communications, and rollback trigger are recorded.
- [ ] Source and target capabilities, licenses, settings, controlled values, API names, dependencies, and access are compared.
- [ ] Configuration inventory, automation versions, reports, dashboards, layouts, permissions, and data steps are reviewed.
- [ ] UAT/regression and reconciliation pass; unresolved defects and accepted exceptions are explicit.
- [ ] Backups and data-load files are secured; no client data or credentials are committed here.
- [ ] Automations have documented activation order, idempotency, bulk behavior, fault Tasks, and retry plan.
- [ ] Rollback is rehearsed or otherwise proven feasible.

## Deploy

1. Apply foundation, fields, controlled values, security, and ownership.
2. Apply duplicate, Campaign, product/revenue, Case, report, and dashboard configuration.
3. Deploy inactive automation and validate dependencies.
4. Load reference and business data in the approved sequence.
5. Activate automation in dependency order.
6. Record actual versions, timestamps, operator, results, and evidence links.

## Smoke test

- [ ] Manual intake, Screen Flow, Web-to-Lead, import/API, and conversion behave as approved.
- [ ] Consent and all three duplicate pair types work by channel.
- [ ] Purchase normalization, Products, primary OCR, tier/lapse, and exception Tasks work without duplication.
- [ ] Livestream Campaigns report as `Show`.
- [ ] Cases, queues, least privilege, reports, dashboards, tier history, and fan-growth method work.
- [ ] Source counts and financial totals reconcile.

## Close

Obtain release acceptance, index evidence, confirm monitoring and owners, schedule the first weekly review, and hand off to the admin runbook. Keep implementation defects in the external issue tracker and operational Salesforce work in Tasks/Cases.
