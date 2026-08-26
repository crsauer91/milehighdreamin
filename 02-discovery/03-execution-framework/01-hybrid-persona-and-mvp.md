# Multi-Channel Independent Artist-Operator

## Profile

The selected hybrid persona is a solo artist or small creative team that may tour, release music, sell merchandise and digital offers, run memberships or VIP programs, crowdfund projects, license work, teach, and operate a community. The artist owns a direct audience while external platforms continue to handle transactions and delivery.

This combines all five focused persona briefs so the repository remains a reusable framework. A real executor may deactivate irrelevant views or processes, but every approved capability is available to the MVP.

## Revenue motions

| Motion | Standard Salesforce pattern |
|---|---|
| Touring and live events | Parent/child Campaigns, Campaign Members, Tasks, Opportunities, Products |
| Merchandise and digital offers | Products, Standard Price Book, Closed Won Opportunities, Opportunity Products, Cases |
| Membership and VIP | Membership Products and Opportunities plus Contact membership/VIP fields |
| Crowdfunding | Campaigns, Campaign Members, Opportunities, Tasks |
| Licensing and commissions | Opportunities, Contacts, business Accounts when appropriate, Tasks |
| Teaching and community | Campaigns, Campaign Members, Opportunities, membership fields, Cases |
| Owned-audience growth | Leads, first-sale conversion, Contacts, consent fields, Campaigns |

## Operating assumptions

- Salesforce Developer org and a part-time administrator.
- Standard Account + Contact model; ordinary fans use the shared **None** Account.
- Leads represent unknown or pre-purchase supporters and convert only after a first qualifying sale.
- Contacts are canonical fan records.
- At least one source of direct take-home revenue can be imported or captured.
- External platforms remain authoritative for payment, tax, fulfillment, message delivery, ticketing, and accounting details.
- The Weekly Artist Dashboard review takes ten minutes or less and produces no more than three owned actions.

## Full MVP

Everything already approved in strategy is available:

- security, access, MFA, and least privilege;
- Lead intake, source, channel, and explicit consent;
- Salesforce standard matching and manual duplicate review;
- canonical fan Contacts and the shared **None** Account;
- Campaigns, Campaign Members, and shallow hierarchies;
- Products, Standard Price Book, Opportunities, Opportunity Products, and direct-revenue calculation;
- fan tiers, True Fan score, repeat-buyer status, lapsed detection, and selective re-engagement;
- memberships, VIP eligibility, renewal tracking, and benefits;
- Cases and Tasks;
- narrow Flows for the seven strategy outcomes;
- reports, list views, and Weekly, Campaign, and Operations dashboards;
- UAT, deployment, rollback, privacy requests, and recurring administration.

## Tailoring rule

Do not remove a capability from the reusable framework merely because one artist would not use it. At execution time, configure only the active revenue motions, preserve the same data model, and record any deliberate exception in the decision register.
