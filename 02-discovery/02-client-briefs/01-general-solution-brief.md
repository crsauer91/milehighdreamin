# General Solution Brief

## Purpose

Align Salesforce scope to the operating reality of an independent musician. Combine this baseline with one persona brief and the dominant business-model brief before finalizing the MVP.

## Shared Baseline for Bootstrapped Implementations

- Use built-in Salesforce functionality wherever possible.
- Start with Account, Lead, Contact, Campaign, Campaign Member, Opportunity, Opportunity Contact Role, Opportunity Product, Product, Price Book, Case, and Task.
- Use Flow instead of Apex unless standard automation is proven insufficient.
- Defer Marketing Cloud, Experience Cloud, Data Cloud, and custom objects unless business value is clear.
- Treat duplicate management, consent, and dashboard adoption as core success conditions.

## Core Object Recommendations

| Pattern Need | Preferred Standard Object | Why |
| --- | --- | --- |
| Unknown fan capture | Lead | Cheapest standard intake object |
| Known supporter profile | Contact under the shared **None** Account | Canonical fan record without Person Accounts |
| Release, show, or launch | Campaign | Flexible and reportable |
| Attendance or response | Campaign Member | Built-in participation tracking |
| Direct sale or premium package | Opportunity | Standard revenue tracking |
| Line-item purchase detail | Opportunity Product | Ties revenue to offers |
| Recurring supporter tier | Contact fields plus Product and Opportunity | Avoids a custom membership object early |
| Fan support issue | Case | Standard service workflow |
| High-touch follow-up | Task | Simple and maintainable |

## Core Flow Recommendations

| Flow | Use In | Purpose |
| --- | --- | --- |
| Purchase Rollup Update | All revenue-tracking patterns | Update direct revenue, purchase dates, and repeat-buyer status |
| Fan Tier and Lapsed Fan Evaluation | All fan-development patterns | Identify true fans and at-risk supporters |
| Campaign Member Follow-Up | Touring, crowdfunding, VIP, and community patterns | Act on attendance, backing, or campaign response |
| Membership Renewal Reminder | Membership and community patterns | Protect recurring revenue |
| Case Triage | Merch, service, and community patterns | Maintain fan trust through support handling |

## Scope Adjustment Rules

- If the client has weak owned-audience capture, prioritize intake and consent before advanced revenue analytics.
- If the client has multiple operators, prioritize ownership, permission discipline, and naming standards before segmentation enhancements.
- If the client has recurring support tiers, prioritize renewal reminders and churn reporting before community features.
- If the client has blended revenue streams, split dashboards by revenue channel early.
- If the client cannot maintain manual revenue entry, reduce reporting ambition or add low-cost import discipline before adding more automation.

## Anti-Patterns

- Modeling every business nuance with custom objects in the MVP
- Adding Experience Cloud before recurring supporter operations are stable
- Building advanced attribution before intake and revenue quality are trustworthy
- Using Salesforce as a payment processor or fulfillment engine
- Overloading one giant Flow with unrelated business outcomes

## Final Recommendation

The best Salesforce pattern combines persona, business model, and operating maturity. In a bootstrapped environment, use the smallest configuration that still makes weekly decisions easier.
