# Discovery

This section converts the approved Mile High Dreamin strategy into a reusable, standard-first Salesforce execution framework for independent artists.

## Reading order

1. [Discovery questionnaire](01-discovery-questionnaire.md) — assess the client, data, constraints, revenue motions, and operating capacity.
2. [Client briefs](02-client-briefs/README.md) — compare focused persona and business-model patterns.
3. [Business process maps](03-business-process-maps/README.md) — validate future-state processes and the four-phase roadmap.
4. [Hybrid execution framework](04-execution-framework/README.md) — apply the repository-wide persona, controlled values, mappings, governance, KPIs, duplicate policy, and import templates.
5. [Prebuild gates](05-prebuild-gates.md) — record implementation-specific status, evidence or decision, and owner before configuration.
6. [End-to-end traceability matrix](06-traceability-matrix.md) — connect each capability to its decision, process, configuration, experience, automation, test, and report.

## Authority

Discovery refines implementation; it does not override approved strategy decisions. When documents conflict, use this order:

1. [Decision register](../01-strategy/05-decision-register.md)
2. [Org strategy](../01-strategy/01-org-strategy.md)
3. [Implementation plan](../01-strategy/02-implementation-plan.md)
4. [Implementation](../04-implementation/README.md) for build, UAT, release, rollback, and evidence
5. [Admin runbook](../01-strategy/03-admin-runbook.md) for post-handoff operations and maintenance
6. Discovery artifacts in this section

The approved baseline is standard Account + Contact, canonical Contacts, the shared **None** Account for ordinary fans, no Person Accounts, explicit consent, Salesforce duplicate matching and human review, nine narrow automation outcomes, and no code unless justified.

## Framework boundary

The reusable framework selects the **Multi-Channel Independent Artist-Operator**, a hybrid of the five persona briefs. Touring, merch, membership, crowdfunding, licensing/commissions, teaching/community, and digital offers are available to the MVP.

Framework documents define defaults and templates. They do not claim that an implementation has passed a gate. Prebuild Status, Evidence / Decision, and Owner cells remain blank until an executor applies the framework.

## MVP guardrails

- Build only what improves revenue, retention, or trust.
- Prefer standard Salesforce objects and fields.
- Capture affirmative consent with source and date; never infer it from a purchase, attendance, or record existence.
- Use standard duplicate matching where practical, allow and alert where supported, and route candidates to manual review.
- Convert a Lead only upon the first qualifying sale.
- Treat Lapsed as a separate flag, never as a fan tier.
- Keep external commerce, payment, email, ticketing, and membership platforms as systems of record where practical.
- Require every automation and dashboard to support a clear weekly action.

## Completion check

The framework is ready to apply when controlled values and mappings are configured, templates pass a test import, and selected capabilities are complete in the [traceability matrix](06-traceability-matrix.md). An implementation is ready to build only after its required prebuild gates are completed or exceptions are explicitly accepted.
