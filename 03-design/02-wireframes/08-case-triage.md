# Case Triage

## Purpose

Track order, digital-access, event, membership, and general fan-support issues with standard Cases and a narrow triage Flow.

## Process

```mermaid
flowchart LR
  A[Fan issue received] --> B[Create Case and associate fan]
  B --> C[Capture Type, Reason, Origin, Priority, and Relevant Transaction]
  C --> D[Case Triage Flow sets priority and owner/queue]
  D --> E{Urgent or high-value impact?}
  E -- Yes --> F[Escalate with owned Task and due date]
  E -- No --> G[Work in support queue]
  F --> H[Resolve and record outcome]
  G --> H
  H --> I[Close Case and update service reports]
```

## Desktop wireframe

```mermaid
flowchart TB
  H[Case header<br/>Number - Fan - Status - Priority - Owner - Age<br/>Actions: Assign - Escalate - Close]
  H --> D[Issue details<br/>Type - Reason - Origin - Priority - Description]
  H --> C[Context<br/>Contact - Fan Tier - Membership panel - Relevant Transaction and its Products/Campaign]
  D --> T[Work plan<br/>Activities - handoffs - Next Action - Next Action Due Date - resolution]
  C --> T
  T --> Q[Queue, Aging, and Due-Date view<br/>New - Working - Escalated - Closed]
```

## Rules

- Use the standard Case object and controlled Type values for Order, Digital Access, Event, Membership, Billing, and General Support.
- Triage assigns a queue/owner and priority; human judgment handles sensitive/high-value interactions.
- Do not expose unnecessary PII or payment-card data.
- A Case links to Contact and `Relevant_Transaction__c`; Product and Campaign context derives through the transaction, while membership context comes from the Contact panel.
- Status is `New`, `Working`, `Escalated`, or `Closed`. Open work uses age, Next Action, and Next Action Due Date; no SLA/entitlement is implied.
- Faults create controlled-subject exception Tasks with an owner, due date, source reference, and retry guidance.

## Acceptance checks

- New, reassigned, escalated, closed, and reopened paths are visible.
- Open Case age and resolution time reconcile to the Operations Dashboard.
- Membership, VIP, order, and event issues retain their related business context.
