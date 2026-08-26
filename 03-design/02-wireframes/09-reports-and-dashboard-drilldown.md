# Reports and Dashboard Drilldown

## Purpose

Turn the weekly artist review into a short, traceable decision workflow across business results and operating health.

## Weekly review process

```mermaid
flowchart LR
  A[Open Weekly Artist Dashboard] --> B[Check intake, duplicate, import, Flow, and consent exceptions]
  B --> C[Review new fans and conversions]
  C --> D[Review Repeat Buyers, True Fans, Patrons, and renewals]
  D --> E[Review lapsed high-value fans]
  E --> F[Review campaign, product, show, and direct-revenue outcomes]
  F --> G[Pick top three actions]
  G --> H[Assign Tasks and due dates]
```

## Desktop wireframe

```mermaid
flowchart TB
  H[Dashboard header<br/>Period - Campaign - Product - Market - Owner - Refresh time]
  H --> W[Weekly Artist<br/>Revenue - Fan Count/Growth - Spend-driven True Fan Emergence - Repeat Buyers - Lapsed - Renewals - Open Cases]
  H --> C[Campaign<br/>Release/Show/Merch/VIP response - attendance - conversion - revenue]
  H --> O[Operations<br/>New Leads - Duplicate Record Sets/review Tasks - Follow-Ups - Cases - open exception Tasks]
  W --> D[Drilldown panel<br/>Filtered report/list - metric definition - source records - export]
  C --> D
  O --> D
  D --> A[Action: Open Record - Assign Task - Correct Exception]
```

## Governed reports

- Fans by Tier; Fan Count/Growth; Spend-Driven True Fan Emergence from tier history; Lapsed High-Value Fans; Repeat Buyers.
- Direct Revenue by Campaign and Product.
- Membership Renewals/Churn.
- Show Attendance by Market and Post-Show Conversion.
- Case Volume/Resolution Time; Consent by Source; Duplicate Review.

## Rules and acceptance checks

- Every metric has a definition, date rule, filter, running user, and source report.
- Unattributed revenue, refunds/cancellations, and test records are explicit.
- Every dashboard total reconciles to source reports and sample records.
- Drill-down always ends in a record or owned action.
- Historical fan counts use report snapshots when needed; tier transitions use Contact field history.
- Import, intake, and Flow exceptions drill to controlled-subject Tasks rather than unpersisted error messages.
