# 05-decision-register

[Strategy index](README.md) · [Org strategy](01-org-strategy.md) · [Implementation plan](02-implementation-plan.md) · [Admin runbook](03-admin-runbook.md) · [Risk register](04-risk-register.md)

This register records authoritative strategy decisions. A later decision supersedes an earlier one; do not silently rewrite decision history.

| ID | Decision | Rationale | Authority | Decision Date | Status | Supersedes |
|---|---|---|---|---|---|---|
| DEC-001 | Membership/VIP and Cases are in MVP scope | The published implementation framework includes premium-supporter tracking and fan service | Project owner | 2026-08-25 | Approved | — |
| DEC-002 | Use standard Accounts + Contacts; Contacts are canonical fans; do not use Person Accounts; ordinary fans use the shared Account **None**; another Account is created manually only for a businessperson or organization | Keeps standard Lead conversion implementable without creating an Account per fan | Project owner | 2026-08-25 | Approved | — |
| DEC-003 | Implement in a Salesforce Developer org | Supports the low-cost proof-of-concept framework; sandbox workflow is deferred until a production implementation | Project owner | 2026-08-25 | Approved | — |
| DEC-004 | Direct revenue means take-home revenue after fees and taxes; annual goal is $100,000 | Measures revenue the artist retains rather than gross transaction volume | Project owner | 2026-08-25 | Approved | — |
| DEC-005 | Use documented Salesforce-aligned privacy retention and deletion procedures | Protects fan trust while preserving records required for legitimate operational or legal purposes | Project owner | 2026-08-25 | Approved | — |
| DEC-006 | Keep the risk register blank until executors identify implementation-specific risks | This repository is an execution framework, not a completed project assessment | Project owner | 2026-08-25 | Approved | — |
| DEC-007 | Leave prebuild Status, Evidence / Decision, and Owner fields blank | Executors complete the gates for their implementation; the framework supplies complete criteria | Project owner | 2026-08-25 | Approved | — |
| DEC-008 | Convert a Lead only upon the first qualifying sale | Keeps pre-purchase prospects in Lead intake and makes purchase the unambiguous Contact conversion event | Project owner | 2026-08-25 | Approved | — |
| DEC-009 | Store transaction-level take-home direct revenue in Opportunity Amount using the documented tax, fee, refund, chargeback, and shipping equation | Makes the $100,000 annual goal auditable and prevents gross sales from overstating retained revenue | Project owner | 2026-08-25 | Approved | — |
| DEC-010 | Treat Lapsed as a separate Contact checkbox flag, never as a Fan Tier value | Preserves the relationship tier while independently identifying inactivity and recovery | Project owner | 2026-08-25 | Approved | — |
| DEC-011 | Use nine core automation outcomes: New Fan Intake, Lead Conversion Follow-Through, Consent Validation, Purchase Update, Fan Tier Evaluation, Lapsed Fan Evaluation, Campaign Member Follow-Up, Membership Renewal, and Case Triage | Aligns strategy, runbook, process maps, consent controls, and narrow one-outcome automation | Project owner | 2026-08-25 | Approved | — |
