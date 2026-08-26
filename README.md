# Mile High Dreamin

A lean, standard-first Salesforce framework for independent musicians based on Kevin Kelly's [1,000 True Fans](https://kk.org/thetechnium/1000-true-fans/) model.

Trust and data quality come first. Automation is narrow and secondary. The architecture favors standard Salesforce, explicit consent, human duplicate review, and the smallest maintainable design that improves revenue, retention, or trust.

## Project status

**Framework complete; org implementation not represented here.** This repository is a reusable specification for discovery, design, build, UAT, release, rollback, and post-handoff operation. It is not Salesforce metadata, a deployed org, or proof that any client implementation has passed its gates. Executors record client data, credentials, owners, decisions, evidence, and deployment artifacts in a secured implementation workspace.

## Repository order

1. [Strategy](01-strategy/README.md) — authoritative scope, architecture, delivery outcomes, post-handoff operations, risks, and decisions.
2. [Discovery](02-discovery/README.md) — questionnaire, client briefs, process maps, reusable execution framework, prebuild gates, mappings, KPIs, and import templates.
3. [Design](03-design/README.md) — solution architecture and desktop Salesforce wireframes translating approved strategy and discovery into implementation-ready design.
4. [Implementation](04-implementation/README.md) — reusable build, test, release, rollback, and implementation-evidence framework.

## Strategy

- [Org strategy](01-strategy/01-org-strategy.md)
- [Implementation plan](01-strategy/02-implementation-plan.md)
- [Admin runbook](01-strategy/03-admin-runbook.md)
- [Risk register](01-strategy/04-risk-register.md)
- [Decision register](01-strategy/05-decision-register.md)

## Discovery

- [Discovery questionnaire](02-discovery/01-discovery-questionnaire.md)
- [Client briefs](02-discovery/02-client-briefs/README.md)
- [Business process maps](02-discovery/03-business-process-maps/README.md)
- [Hybrid execution framework](02-discovery/04-execution-framework/README.md)
- [Prebuild gates](02-discovery/05-prebuild-gates.md)
- [End-to-end traceability matrix](02-discovery/06-traceability-matrix.md)

## Design

- [Design index](03-design/README.md)
- [Solution design](03-design/01-solution-design.md)
- [Salesforce wireframes](03-design/02-wireframes/README.md)

## Implementation

- [Implementation index](04-implementation/README.md)
- [Build checklist](04-implementation/01-build-checklist.md)
- [UAT and regression matrix](04-implementation/07-uat-and-regression-matrix.md)
- [Deployment checklist](04-implementation/08-deployment-checklist.md)

This repository is a reusable framework. Client data, credentials, completed gate evidence, named implementation owners, and deployable org-specific metadata belong in the executor's secured implementation workspace.

Released under the [MIT License](LICENSE).
