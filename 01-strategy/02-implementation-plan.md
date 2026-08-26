# 02-implementation-plan  

[Strategy index](README.md) · [Org strategy](01-org-strategy.md) · [Admin runbook](03-admin-runbook.md) · [Risk register](04-risk-register.md) · [Decision register](05-decision-register.md)
  
## Core Automation  
  
Keep Flows narrow: **one business outcome per automation where practical.** The MVP includes nine automation outcomes. Consent Validation uses object-specific Lead and Contact implementations under one outcome.  
  
1. **New Fan Intake**  
    * normalize source;  
    * capture consent;  
    * assign ownership;  
    * flag duplicates.  
2. **Lead Conversion Follow-Through**  
    * run only after the first qualifying sale;  
    * associate an ordinary fan with the existing **None** Account;  
    * initialize the fan profile;  
    * create the welcome or follow-up action.  
3. **Consent Validation**  
    * enforce Date and Source when consent is affirmative;  
    * preserve channel opt-outs;  
    * prevent record existence, attendance, or purchase from creating consent.  
4. **Purchase Update**  
    * update lifetime revenue;  
    * first/last purchase;  
    * repeat-buyer status;  
    * membership attributes where applicable.  
5. **Fan Tier Evaluation**  
    * assign Listener, Buyer, Repeat Buyer, True Fan, or Patron from approved criteria.  
6. **Lapsed Fan Evaluation**  
    * maintain the separate Lapsed Fan Flag from approved inactivity and recovery rules.  
7. **Campaign Member Follow-Up**  
    * create actions for attendees, VIP prospects, backers, and other significant responses.  
8. **Membership Renewal**  
    * identify upcoming renewals;  
    * create one reminder or follow-up Task.  
9. **Case Triage**  
    * assign queue/owner;  
    * set priority;  
    * escalate important fan issues.  
  
Automate routine work while keeping important fan interactions personal.  
  
## Reporting  
  
* Fans by Tier  
* Emerging True Fans  
* Lapsed High-Value Fans  
* Repeat Buyers  
* Direct Revenue by Campaign  
* Direct Revenue by Product  
* Membership Renewals/Churn  
* Show Attendance by Market  
* Post-Show Conversion  
* Case Volume/Resolution Time  
* Consent by Source  
* Duplicate Review  
  
## Dashboards  
  
### Weekly Artist Dashboard  
  
* direct revenue;  
* true fan count;  
* repeat buyers;  
* lapsed high-value fans;  
* renewals;  
* open support cases.  
  
### Campaign Dashboard  
  
* releases;  
* shows/tours;  
* merch;  
* VIP;  
* campaign conversion/revenue.  
  
### Operations Dashboard  
  
* new leads;  
* duplicates;  
* follow-up tasks;  
* unresolved cases;  
* failed imports/exceptions.  
  
Weekly business review should take **under 10 minutes**.  
  
## MVP Deliverables  
  
1. Salesforce foundation/security  
2. fan data model  
3. consent/source model  
4. duplicate management  
5. Campaign framework  
6. revenue/product model  
7. intake/import process  
8. fan tiering/scoring  
9. lapsed-fan identification  
10. core Flows  
11. lightweight membership/VIP model  
12. Case process  
13. reports/list views/dashboards  
14. admin runbook and deployment documentation  
  
## Delivery Roadmap  

### Phase 1: Foundation  
  
* security/access;  
* fan identity model;  
* duplicate management;  
* consent/source tracking;  
* Campaign framework;  
* baseline dashboards.  
  
### Phase 2: Revenue, Segmentation, Membership & Service  
  
* Products;  
* Opportunities;  
* direct-purchase visibility;  
* fan tiers;  
* True Fan scoring;  
* lapsed-fan detection;  
* core automation;  
* lightweight membership/patron tracking;  
* VIP eligibility and targeting;  
* renewal tracking;  
* Case intake, triage, and resolution.  
  
### Phase 3: Stabilization & Adoption
  
* stabilize all MVP automation and reporting;  
* complete UAT and regression testing;  
* establish weekly operating habits;  
* refine membership, VIP, and Case processes without expanding the data model.  
  
### Phase 4: Optimization  
  
* stronger integrations;  
* advanced attribution/cohorts;  
* refined scoring;  
* offer optimization;  
* additional capabilities justified by observed revenue/retention gains.  
  
## Implementation Backlog  
  

| Order | Work                            | Effort |
| ----- | ------------------------------- | ------ |
| 1     | Environment/security/guardrails | S      |
| 2     | Fan record model + dedupe       | M      |
| 3     | Consent/source tracking         | S      |
| 4     | Campaign framework              | S      |
| 5     | Products/direct revenue         | M      |
| 6     | Intake/import process           | S      |
| 7     | Fan tiering/scoring             | S      |
| 8     | Core Flows                      | L      |
| 9     | Case process                    | S      |
| 10    | Reports/dashboards              | M      |
| 11    | Lightweight membership          | M      |
| 12    | Hardening/documentation         | S      |
  
  
Effort:  
* **XS:** 2–4 hours  
* **S:** 0.5–1 day  
* **M:** 1–3 days  
* **L:** 3–5 days  
  
Suggested sequence:  
* **Sprint 1:** 1–4  
* **Sprint 2:** 5–8  
* **Sprint 3:** 9–12  
  
## Core User Outcomes  
  
The MVP should support seven functional areas:  
  
1. **Fan Identity & Trust**  
    * single fan profile;  
    * duplicate detection/merge;  
    * consent/source/channel/date;  
    * auditable opt-outs.  
2. **Fan Tiering**  
    * configurable tiers and score;  
    * emerging True Fans surfaced;  
    * tier reporting.  
3. **Campaigns & Revenue**  
    * releases/shows/drops modeled as Campaigns;  
    * fan response linked to campaigns;  
    * purchases/products visible;  
    * campaign conversion/revenue measurable.  
4. **Membership/VIP**  
    * lightweight tier/status/renewal tracking;  
    * eligibility audiences without spreadsheets;  
    * renewal/fulfillment visibility.  
5. **Touring & Activation**  
    * fans segmented by market/attendance;  
    * post-show follow-up;  
    * attendee-to-subscriber/buyer conversion.  
6. **Service & Retention**  
    * Cases assigned/tracked;  
    * response/resolution measurable;  
    * lapsed high-value fans automatically surfaced;  
    * recovery measurable.  
7. **Governance & Insight**  
    * metrics clearly defined;  
    * dashboard review under 10 minutes;  
    * naming conventions;  
    * Developer-org testing;  
    * documented recurring processes.  
  
## Engagement Approach  
  
1. Confirm business rules.  
2. Configure core MVP.  
3. Test with representative sample data.  
4. Complete UAT.  
5. Stabilize.  
6. Review actual usage and outcomes.  
7. Approve future enhancements only where evidence supports them.  
