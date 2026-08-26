# Fan Tier and Reactivation

## Purpose

Explain the scheduled fan-tier/lapsed evaluation and turn high-value inactivity into selective human follow-up.

## Process

```mermaid
flowchart LR
  A[Scheduled or relevant-record trigger] --> B[Read purchase, spend, attendance, engagement, membership, and recency]
  B --> C[Evaluate approved thresholds]
  C --> D[Assign Listener, Buyer, Repeat Buyer, True Fan, or Patron]
  D --> E{Lapsed rule met?}
  E -- Yes --> F[Set Lapsed Fan Flag]
  E -- No --> G[Keep active status]
  F --> H[Add to Lapsed High-Value view or re-engagement Campaign]
  G --> I[Add to active tier reports]
  H --> J[Review reactivation opportunity]
  I --> J
```

## Desktop wireframe

```mermaid
flowchart TB
  H[Segmentation review<br/>Filters: tier - lapsed - market - membership - owner]
  H --> Q[Fan queue<br/>Fan - Tier - Score - Revenue - Last Purchase - Last Engagement - Lapsed]
  Q --> E[Why this result?<br/>inputs - thresholds - missing data - evaluation time - override]
  E --> A[Actions<br/>Create Task - Add to Campaign - Open Fan - Correct Source Data]
```

## Rules

- Fan Tier summarizes the relationship; True Fan Score remains a supporting, explainable indicator rather than predictive AI.
- Thresholds use only reliably maintained data and cover blanks, boundaries, and never-purchased/never-engaged fans.
- Repeated runs are safe and do not duplicate Tasks or Campaign Members.
- Manual tier overrides are not in MVP because no approved persistence or authorization model exists. Correct governed source data or thresholds and rerun evaluation.
- Contact Field History Tracking preserves `Fan_Tier__c` transitions; emergence into True Fan or Patron is tied to the qualifying cumulative-spend change.
- Reactivation remains selective and personal, not bulk spam.

## Acceptance checks

- Test fans at every boundary produce expected tier and lapse outcomes.
- First/repeat purchase and membership status changes refresh the appropriate evaluation.
- The lapsed queue supports a small, owned next action.
- Tier-change history identifies who crossed the spend threshold during the reporting period.
