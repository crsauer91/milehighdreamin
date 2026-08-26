# Campaign Workspace

## Purpose

Plan and operate releases, tours, shows, merch drops, crowdfunding, fan-club initiatives, and VIP offers with standard Campaigns and Campaign Members.

## Process

```mermaid
flowchart LR
  A[Define objective] --> B[Create Campaign]
  B --> C[Set Type, name, dates, owner, goal]
  C --> D[Optional shallow parent/child hierarchy]
  D --> E[Build audience by tier, market, consent, attendance, or interest]
  E --> F[Add Campaign Members]
  F --> G[Launch actions in external channels]
  G --> H[Update Member Status]
  H --> I{Meaningful response?}
  I -- Yes --> J[Create one follow-up Task or VIP action]
  I -- No --> K[Remain in audience]
  J --> L[Log attendance, purchase, or support interaction]
  K --> L
  L --> M[Review response, conversion, and direct revenue]
```

## Desktop wireframe

```mermaid
flowchart TB
  H[Campaign header<br/>Name - Type - Status - Date Range - Goal - Revenue Target/Actual<br/>Actions: Add Members - Update Statuses - Create Follow-Up]
  H --> P[Performance<br/>Members by Status - Responded - Attendance - Purchases - Revenue]
  H --> O[Operations<br/>Audience filters - Follow-Ups Due - VIP Candidates - Quality Checks]
  P --> M[Member table<br/>Fan - Status - Tier - Market - Consent - Last Action]
  O --> M
```

## Rules

- Naming: `YYYY - Type - Name`; show example: `2026 - Show - Denver - Venue Name`.
- Tour uses a parent Campaign with individual Show children; other hierarchies stay shallow.
- Member statuses are small, ordered, comparable, and mark at least one value as `Responded` when needed.
- External tools deliver messages; Salesforce owns the audience, response, follow-up, and outcome record.
- Marketing audience filters exclude non-consented fans where required.

## Acceptance checks

- Comparable campaigns share Types and status meanings.
- Show attendance and post-show conversion can be filtered by Home Market.
- Revenue and response measures expose attribution assumptions.
