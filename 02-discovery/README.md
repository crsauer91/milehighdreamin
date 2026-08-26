# Discovery

This section converts the approved Mile High Dreamin strategy into the smallest credible Salesforce pattern for an independent artist. Use it to confirm the artist's operating model, map the work, and collect evidence for the prebuild gates before configuration begins.

## Authority

Discovery refines implementation; it does not override approved strategy decisions. When documents conflict, use this order:

1. [Decision register](../01-strategy/05-decision-register.md)
2. [Org strategy](../01-strategy/01-org-strategy.md)
3. [Admin runbook](../01-strategy/03-admin-runbook-mile-high-dreamin-admin-playbook.md)
4. [Implementation plan](../01-strategy/02-implementation-plan.md)
5. Discovery artifacts in this section

The approved baseline is standard Account + Contact, canonical Contacts, the shared **None** Account for ordinary fans, no Person Accounts, explicit consent, duplicate flagging and human review, narrow Flows, and no code unless justified.

## Reading order

1. [Discovery questionnaire](01-discovery-questionnaire.md) — identify the best-fit persona, dominant revenue motion, constraints, risks, MVP exclusions, and weekly operating habit.
2. [Client briefs](02-client-briefs/README.md) — combine the general brief with one primary persona and one dominant business-model brief.
3. [Business process maps](01-business-process-maps/README.md) — validate the future-state processes and four-phase roadmap.
4. [Prebuild gates](02-prebuild-gates) — record status, evidence or decision, and owner before configuration begins.
5. [Strategy index](../01-strategy/README.md) and [wireframes](../03-design/02-wireframes/README.md) — confirm downstream alignment.

## Discovery output

For each implementation, retain one concise decision packet containing:

- selected persona and primary/secondary business models;
- current systems, data owners, weekly capacity, and Salesforce edition constraints;
- approved MVP and explicit exclusions;
- standard objects, narrow Flows, reports, dashboards, and external systems of record;
- consent, retention, duplicate-review, revenue, Campaign, and controlled-value decisions;
- source-data audit, field mapping, import template, and baseline metrics;
- risks, decisions, owners, UAT scenarios, deployment approach, and rollback approach;
- signed or explicitly accepted prebuild-gate exceptions.

Keep project-specific evidence outside the reusable framework when it contains personal or sensitive data.

## MVP guardrails

- Build only what improves revenue, retention, or trust.
- Prefer standard objects and fields; add custom objects only after a measured need.
- Capture affirmative consent with source and date; never infer it from a purchase, attendance, or record existence.
- Allow suspected duplicates to save where supported, then alert, report, and review them manually.
- Convert a Lead only upon the first qualifying sale.
- Keep external commerce, payment, email, ticketing, and membership platforms as systems of record where practical.
- Require every automation and dashboard to support a clear owner and weekly action.

## Completion check

Discovery is complete when the decision packet exists, required prebuild gates have evidence and owners, unresolved contradictions are recorded in the decision register, and the selected MVP can be traced from questionnaire to brief, process map, strategy, wireframe, UAT, and weekly dashboard.
