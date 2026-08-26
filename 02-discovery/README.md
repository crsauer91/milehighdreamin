# Discovery

This section converts the approved Mile High Dreamin strategy into a reusable, standard-first Salesforce execution framework for independent artists. It is intentionally broad enough for executors to tailor without reopening the underlying architecture.

## Authority

Discovery refines implementation; it does not override approved strategy decisions. When documents conflict, use this order:

1. [Decision register](../01-strategy/05-decision-register.md)
2. [Org strategy](../01-strategy/01-org-strategy.md)
3. [Admin runbook](../01-strategy/03-admin-runbook-mile-high-dreamin-admin-playbook.md)
4. [Implementation plan](../01-strategy/02-implementation-plan.md)
5. Discovery artifacts in this section

The approved baseline is standard Account + Contact, canonical Contacts, the shared **None** Account for ordinary fans, no Person Accounts, explicit consent, Salesforce duplicate matching and human review, narrow Flows, and no code unless justified.

## Reading order

1. [Discovery questionnaire](01-discovery-questionnaire.md) — assess the executor's client, data, constraints, and operating capacity.
2. [Client briefs](02-client-briefs/README.md) — compare focused persona and business-model patterns.
3. [Business process maps](01-business-process-maps/README.md) — validate the future-state processes and four-phase roadmap.
4. [Hybrid execution framework](03-execution-framework/README.md) — use the repository-wide framework defaults, mappings, governance, KPIs, and import templates.
5. [Prebuild gates](02-prebuild-gates) — record status, evidence or decision, and owner for the specific implementation.
6. [Strategy index](../01-strategy/README.md) and [wireframes](../03-design/02-wireframes/README.md) — confirm downstream alignment.

## Framework defaults

The reusable framework selects the **Multi-Channel Independent Artist-Operator**, a hybrid of the five persona briefs. Touring, merch, membership, crowdfunding, licensing/commissions, teaching/community, and digital offers are all available to an MVP executor.

Framework documents define recommended values and templates. They do not claim that an implementation has passed a gate. Prebuild Status, Evidence / Decision, and Owner cells remain blank until an executor applies the framework.

## MVP guardrails

- Build only what improves revenue, retention, or trust.
- Prefer standard Salesforce objects and fields; add custom fields only for repository-defined business questions.
- Capture affirmative consent with source and date; never infer it from a purchase, attendance, or record existence.
- Use standard duplicate matching where practical, allow and alert where supported, and route candidates to manual review.
- Convert a Lead only upon the first qualifying sale.
- Keep external commerce, payment, email, ticketing, and membership platforms as systems of record where practical.
- Require every automation and dashboard to support a clear weekly action.

## Completion check

The framework is ready to apply when its controlled values and mappings are configured, templates pass a test import, and selected capabilities trace from questionnaire to brief, process map, strategy, wireframe, UAT, and dashboard. The implementation is ready to build only after its own required prebuild gates are completed or exceptions are explicitly accepted.
