# Implementation

This section is the reusable framework for building, testing, releasing, rolling back, and evidencing the Mile High Dreamin design in a Salesforce org.

It contains specifications and blank evidence structures, not deployable org-specific metadata. Credentials, client data, completed gate/UAT evidence, named owners, production exports, and implementation defects belong in the executor's secured workspace and source-control or issue-tracking process.

## Authority

- [Org strategy](../01-strategy/01-org-strategy.md) controls scope and architecture.
- [Implementation plan](../01-strategy/02-implementation-plan.md) controls outcomes and phases.
- [Decision register](../01-strategy/05-decision-register.md) controls approved decisions.
- [Prebuild gates](../02-discovery/05-prebuild-gates.md) must pass or have accepted exceptions before configuration.
- [Controlled values](../02-discovery/04-execution-framework/02-controlled-values.md), [field mappings](../02-discovery/04-execution-framework/03-field-mappings.md), and the [KPI dictionary](../02-discovery/04-execution-framework/06-kpi-dictionary.md) control configuration and reporting meaning.
- [Business process maps](../02-discovery/03-business-process-maps/README.md) control future-state flow.
- [Solution design](../03-design/01-solution-design.md) controls implementation mechanics.
- [Wireframes](../03-design/02-wireframes/README.md) validate the intended desktop experience.
- The [admin runbook](../01-strategy/03-admin-runbook.md) governs operation and maintenance **after** the implementation handoff.

If sources conflict, stop and resolve the governing decision before building.

## Sequence

1. Confirm authoritative decisions and complete prebuild gates.
2. Review controlled values, mappings, process maps, Solution Design, and wireframes.
3. Execute the dependency-ordered build checklist.
4. Configure and test the nine automation outcomes and supporting configuration.
5. Complete UAT, regression, data/revenue reconciliation, security, and reporting validation.
6. Deploy, smoke test, and confirm rollback readiness.
7. Index evidence and hand the completed implementation to the admin runbook and weekly operating ritual.

The nine automations are **business outcomes, not necessarily nine Flow definitions**. Consent Validation has separate Lead and Contact implementations; shared subflows are limited to stable cross-cutting behavior.

## Artifacts

1. [Build checklist](01-build-checklist.md)
2. [Configuration inventory](02-configuration-inventory.md)
3. [Automation specifications](03-automation-specifications.md)
4. [Reporting build specification](04-reporting-build-spec.md)
5. [Security and access checklist](05-security-and-access-checklist.md)
6. [Data load and reconciliation](06-data-load-and-reconciliation.md)
7. [UAT and regression matrix](07-uat-and-regression-matrix.md)
8. [Deployment checklist](08-deployment-checklist.md)
9. [Rollback checklist](09-rollback-checklist.md)
10. [Implementation evidence index](10-implementation-evidence-index.md)

## Framework decisions

- Standard `LeadSource` is the single acquisition-source field. Add a separate field only for a clearly defined, approved, reportable business question.
- Livestream Campaigns use Type `Show` unless reporting proves a distinct Type is needed.
- Actionable Salesforce exceptions use owned Tasks; implementation defects use the external issue tracker.
- Tier, lapse, VIP, and renewal values remain unactivated until their decision gates define inputs, thresholds, windows, blank handling, recovery, cadence, ownership, and evidence.
- Purchase processing requires net-revenue normalization, one primary purchasing-fan Opportunity Contact Role, stable external keys, and idempotent retries.
- Tier history and fan-growth persistence are explicit build and reporting decisions.

## Definition of done

All required gates are resolved; build and automation specifications are met; channel-specific tests, UAT, regression, security, reconciliation, reporting, smoke testing, and rollback readiness pass; evidence is indexed; and operating ownership accepts the handoff.

[Repository home](../README.md)
