# MHD Salesforce Wireframes

Desktop-first, low-fidelity wireframes for every functional area in the broad Mile High Dreamin Salesforce strategy. They use the repository's existing terminology and favor standard Salesforce objects, focused Lightning pages, list views, reports, dashboards, and narrow Flows.

## Index

1. [Home](Home) - weekly system-health and action workspace.
2. [Fan Record Page](Fan%20Record%20Page) - canonical supporter profile and related history.
3. [New Fan Intake](New%20Fan%20Intake) - capture, consent, source, duplicate check, and conversion.
4. [Duplicate Review Queue](Duplicate%20Review%20Queue) - flag-not-block comparison and manual resolution.
5. [Campaign Workspace](Campaign%20Workspace) - release, tour, show, merch, crowdfunding, fan-club, and VIP audience operations.
6. [Opportunity Entry](Opportunity%20Entry) - products, purchases, fulfillment, rollups, and supporter-program updates.
7. [Fan Tier and Reactivation](Fan%20Tier%20and%20Reactivation) - tier/score/lapse evaluation and selective follow-up.
8. [Membership and VIP](Membership%20and%20VIP) - Phase 3 renewals, eligibility, offers, and fulfillment.
9. [Case Triage](Case%20Triage) - fan service assignment, escalation, resolution, and reporting.
10. [Reports and Dashboard Drilldown](Reports%20and%20Dashboard%20Drilldown) - weekly, campaign, and operations insight.

## Business-process coverage

| Strategy outcome | Primary wireframes | Existing process-map source |
|---|---|---|
| Fan Identity & Trust | New Fan Intake; Duplicate Review Queue; Fan Record Page | [Fan Intake Lead Management](../../02-discovery/1.%20Business%20Process%20Maps/Fan%20Intake%20Lead%20Management-2026-08-08-174014.pdf) |
| Fan Tiering | Fan Record Page; Fan Tier and Reactivation | [Fan Tier Assessment Pipeline](../../02-discovery/1.%20Business%20Process%20Maps/Fan%20Tier%20Assessment%20Pipeline-2026-08-08-174531.pdf) |
| Campaigns & Revenue | Campaign Workspace; Opportunity Entry | [Campaign Audience](../../02-discovery/1.%20Business%20Process%20Maps/Campaign%20Audience-2026-08-08-174203.pdf); [Direct Offer Purchase](../../02-discovery/1.%20Business%20Process%20Maps/Direct%20Offer%20Purchase-2026-08-08-174329.pdf) |
| Membership/VIP | Membership and VIP; Opportunity Entry; Campaign Workspace | Strategy and implementation plan |
| Touring & Activation | Campaign Workspace; Fan Record Page; Reports and Dashboard Drilldown | Campaign Audience |
| Service & Retention | Case Triage; Fan Tier and Reactivation | Strategy and implementation plan |
| Governance & Insight | Home; Reports and Dashboard Drilldown | [Artist Revenue Review](../../02-discovery/1.%20Business%20Process%20Maps/Artist%20Revenue%20Review-2026-08-08-174654.pdf) |

## Shared design rules

- Use the fan-profile model selected at the Contact-versus-Person-Account prebuild gate.
- Consent is affirmative, auditable, and never inferred from a purchase, attendance, interaction, email address, or import.
- Suspected duplicates alert, save, report, and route to human review; do not automatically merge or block.
- Standard objects first: Lead, Contact/Person Account, Campaign, Campaign Member, Opportunity, Opportunity Product, Product, Price Book, Case, and Task.
- One Flow per business outcome where practical; every Flow has an owner, description, test evidence, and fault path.
- External platforms may remain systems of record; Salesforce owns the relationship view and only the data needed for decisions.
- Every dashboard or score must drill down to understandable source records and a human action.

## End-to-end view

```mermaid
flowchart LR
  Intake[New Fan Intake] --> Dedupe[Duplicate Review]
  Dedupe --> Fan[Fan Record]
  Fan --> Campaign[Campaign / Tour / Show Audience]
  Campaign --> Purchase[Direct Purchase]
  Campaign --> Follow[Campaign Follow-Up]
  Purchase --> Program[Membership / VIP when active]
  Purchase --> Tier[Fan Tier and Lapsed Evaluation]
  Follow --> Tier
  Program --> Service[Case Triage when support is needed]
  Tier --> Dash[Weekly Dashboards]
  Service --> Dash
  Dash --> Tasks[Top Three Owned Actions]
```
