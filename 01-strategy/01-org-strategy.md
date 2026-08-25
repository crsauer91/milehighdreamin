# 01-org-strategy  
  
## Executive Strategy  
  
Build a **lean, direct-to-fan Salesforce operating system** for an independent musician using Kevin Kelly’s **1,000 True Fans** model.  
  
The objective is not enterprise CRM breadth. It is to:  
* identify valuable supporters and increase that value, perhaps even on a recurring level;  
* deepen direct fan relationships;  
* surface lapsed high-value fans;  
* measure releases, shows, campaigns, and offers;  
* reduce manual operational work.  
  
The 1,000 True Fans model depends on two conditions:  
1. Fans generate meaningful annual value.  
2. The artist owns the direct relationship.  
  
Salesforce should support those conditions with the **smallest maintainable architecture possible**.  
  
**Standard > Custom. Flow > Code. Free/Low-Cost > Premium. Simple > Complex. Relationship quality > audience size.**  
  
Expand only when demonstrated improvements to **revenue, retention, or trust** justify additional complexity.  
  
## Architecture Principles  
  
Assume:  
* solo artist with limited budget and admin capacity (part-time administration)  
* multiple income streams; and at least one source of direct revenue  
* external commerce, payment, email, ticketing, or membership platforms remain in use.  
  
Use:  
* lowest-cost Salesforce edition supporting requirements;  
* standard objects;  
* custom fields only where needed;  
* Flow;  
* reports;  
* dashboards;  
* list views;  
* Web-to-Lead/import templates;  
* simple no-code intake mechanisms.  
  
Defer:  
* premium clouds;  
* Experience Cloud;  
* Data Cloud;  
* AI;  
* Apex/custom code;  
* unnecessary managed packages;  
* advanced attribution;  
* unnecessary custom objects;  
* complex integrations.  
  
A feature should wait unless it helps **identify, convert, monetize, retain, or serve true fans** within the next one or two releases.  
  
## Business Outcomes  
  
The org should quickly answer:  
1. Who are my most valuable supporters? Which fans are becoming true fans? Which fans are repeat buyers or patrons? Which high-value fans are becoming inactive?  
2. Which releases, shows, campaigns, products, and offers generate direct revenue? What should I offer next to increase annual fan value without weakening the brand?  
3. Where am I dependent on intermediaries?  
4. Where is manual coordination wasting time?  
5. What requires attention this week?  
  
Success is measured by useful decisions, not object or automation count.  
  
## Scope

### In Scope  
* lead capture;  
* fan identity/profile management;  
* consent and source tracking;  
* duplicate management;  
* Campaigns and Campaign Members;  
* Products and Price Books;  
* Opportunities and Opportunity Products;  
* direct-revenue tracking;  
* fan tiering/scoring;  
* lapsed-fan identification;  
* lightweight membership/VIP tracking;  
* Cases;  
* Tasks;  
* reports;  
* dashboards;  
* list views;  
* Flow automation.  
  
### Out of Scope  
* premium clouds;  
* custom code;  
* advanced API integrations;  
* advanced attribution;  
* AI;  
* custom objects unless later proven necessary.  
  
## Persona and Business-Model Principle  
  
Independent musicians are not one segment. A touring artist, producer selling digital drops, merch-heavy band, and licensing-focused composer require different Salesforce configurations. Therefore: **Architecture should follow how the artist earns money.**  
Persona-specific and business-model-specific extensions should sit on top of the same lean foundation.  
  
## Core Data Model  
  
### Lead  
  
Unknown or lightly qualified fans from forms, contests, event scans, or imports.  
  
Key fields:  
* Lead Source  
* Acquisition Channel  
* Consent Status  
* Consent Date  
* Consent Source  
* Home Market  
* Interests  

### Contact  
  
Master supporter profile, lead becomes contact upon first sale.  
  
Key fields:  
* Fan Tier  
* True Fan Score  
* Lifetime Direct Revenue  
* First/Last Purchase Date  
* Last Engagement Date  
* Lapsed Flag  
* Preferred Channel  
* Consent Status/Date/Source  
* Home Market  
* Membership Tier/Status/Renewal Date  
* VIP Eligible  

### Campaign  
  
Represents:  
* releases;  
* tours;  
* shows;  
* merch drops;  
* crowdfunding;  
* fan-club initiatives;  
* VIP offers;  
* livestreams.  
  
Use parent/child Campaigns where hierarchy is useful.  
  
Key fields include:  
* Type  
* Market  
* dates  
* goal  
* Primary Offer  
* Direct Revenue Target  
* Actual Direct Revenue  
  
### Campaign Member  
  
Tracks:  
* audience membership;  
* invitations;  
* attendance;  
* responses;  
* participation;  
* post-campaign progression.  
  
Use heavily before inventing custom engagement objects.  

### Opportunity  
  
Use selectively for revenue events requiring Salesforce reporting:  
* purchases;  
* VIP packages;  
* patron packages;  
* memberships;  
* private bookings.  
Key fields:  
* Revenue Channel  
* Order Source  
* Fulfillment Status  
* Related Campaign  
* Purchase Type  
  
### Product / Opportunity Product / Price Book  
  
Represent:  
* music;  
* vinyl;  
* merchandise;  
* bundles;  
* memberships;  
* VIP experiences;  
* special releases.  
 
### Case  
  
Fan-support issues:  
* orders;  
* digital access;  
* events;  
* memberships;  
* general support.  

### Task/Event  
  
High-touch outreach, VIP follow-up, booking activity, and exceptions.  
  
## Business Modeling  

| Business Concept      | Salesforce Model       |
| --------------------- | ---------------------- |
| Release / merch drop  | Campaign               |
| Tour leg              | Parent Campaign        |
| Show                  | Child Campaign         |
| Attendance / response | Campaign Member Status |
| Purchase              | Closed Won Opportunity |
| Purchased item        | Opportunity Product    |
| Membership            | Product + fan fields   |
| Support issue         | Case                   |
| Personal outreach     | Task                   |
| Weekly review         | Dashboard              |
  
  
Create a custom object only when:  
* reporting is materially blocked;  
* standard behavior becomes misleading;  
* a repeatable revenue model requires precision; or  
* maintaining the workaround costs more than maintaining the object.  
  
## Fan Relationship Model  
  
Suggested tiers: **Listener → Buyer → Repeat Buyer → True Fan → Patron**  
  
**Lapsed** identifies previously valuable supporters whose activity falls below defined recency thresholds.  
  
The True Fan Score should consider at least:  
* purchase frequency;  
* lifetime/direct spend;  
* event attendance;  
* high-value engagement.  
  
Measure supporter quality rather than vanity audience size.  
  
## Salesforce Well-Architected Alignment  

### Trusted  
  
* MFA and least privilege;  
* minimize/classify PII;  
* capture auditable consent, source, channel, and date;  
* respect channel-specific opt-outs;  
* keep payment-card data outside Salesforce; payment processor remains payment system of record; Salesforce serves as fan/consent system of record;  
* manage duplicates early;  
* document integrations, credentials, ownership, and failures.  
  
Fan trust is part of the product.  
  
### Easy  
  
* small number of business outcomes;  
* standard objects;  
* focused page layouts;  
* Flow instead of code;  
* simple naming conventions;  
* dashboards/list views designed around actual decisions;  
* automation only for repetitive high-value work.  
  
The system must remain usable by a musician, manager, assistant, or part-time admin.  
  
### Adaptable  
  
* modular, loosely coupled architecture;  
* external IDs/integration keys for incoming data;  
* replaceable external commerce/email/ticketing platforms;  
* sandbox-based change management;  
* documented deployment;  
* minimal specialization;  
* complexity added only after demonstrated need.  
  
## Key Risks and Mitigations  
  

| Risk | Mitigation |
| --------------------------- | ------------------------------------------------- |
| Fragmented source data | Standard imports/source mapping |
| Duplicate fan records | Matching rules, duplicate rules, merge procedures |
| Poor consent consistency | Controlled consent/source values |
| Manual entry does not scale | Precise high-value automation |
| Failed imports/integrations | Exception ownership and monitoring |
| Low adoption | Narrow MVP and weekly dashboard ritual |
| Over-customization | No-code/standard-first policy |
| Technical debt | Complexity requires demonstrated value |
| Shelfware | Design around weekly business decisions |
  
  
## Dependencies  
  
* suitable Salesforce org/edition;  
* Contact vs Person Account decision;  
* source fan/revenue data;  
* defined consent model;  
* standardized source values;  
* import discipline;  
* UAT and prioritization availability;  
* sandbox/deployment process.  
  
## MVP Success Criteria  
  
The org must provide:  
* one usable profile per known fan;  
* consent/source visibility;  
* purchase history;  
* direct revenue visibility;  
* identifiable repeat buyers;  
* identifiable True Fans/patrons;  
* automatic lapsed high-value detection;  
* comparable campaign response/revenue;  
* trackable support issues;  
* actionable weekly dashboards;  
* maintainability without custom code or a full-time admin.  
  
## KPIs  
  
Prioritize:  
* identified fans;  
* True Fans/patrons;  
* annual direct revenue per identified fan;  
* annual direct revenue per True Fan;  
* repeat-purchase rate;  
* membership/subscription renewal;  
* crowdfunding conversion;  
* attendee-to-subscriber conversion;  
* lapsed True Fans;  
* direct vs intermediated revenue.  
  
These matter more than follower count or campaign volume.  
  
## Enhancement Decision Rule  
  
Before adding anything, ask:  
1. Does it improve **revenue, retention, or trust**?  
2. Can the artist operationally support it?  
3. Is standard Salesforce insufficient?  
4. Is there evidence it is needed now?  
  
If any answer is **no**, defer it.  
  
## Final Recommendation  
  
Adopt a bootstrapped Salesforce MVP focused on **direct fan value rather than platform breadth**.  
  
Salesforce should become a disciplined relationship engine that helps an independent musician:  
* know their real supporters;  
* own direct fan relationships;  
* increase annual fan value;  
* recognize repeat buyers and emerging True Fans;  
* recover lapsed high-value supporters;  
* understand direct revenue;  
* protect fan trust;  
* reduce operational chaos.  
  
The architectural advantage is **restraint**.  
  
Build a few valuable capabilities well, maintain them cheaply, and let every future feature earn its place through demonstrated improvements in **revenue, retention, or trust**.  
  
That is the practical Salesforce interpretation of the **1,000 True Fans** model.  
