# MHD Persona/Model Matrix  
  
## Purpose  
  
This matrix helps align Salesforce scope to the actual operating reality of an independent musician. It compares artist personas and business models against recommended standard objects, core automations, KPIs, and likely scope adjustments. The intent is to prevent generic solutions from being applied to very different businesses.  
  
## How To Use This Matrix  
  
1. Identify the closest artist persona.  
2. Identify the dominant business model.  
3. Start with the shared recommendations.  
4. Apply the row-specific scope adjustments before finalizing the MVP.  
  
## Shared Baseline For All Bootstrapped Implementations  
  
- Use built-in Salesforce functionality wherever possible.  
- Start with Lead, Contact or Person Account, Campaign, Campaign Member, Opportunity, Opportunity Product, Product, Case, and Task.  
- Use Flow instead of Apex unless standard automation is proven insufficient.  
- Defer Marketing Cloud, Experience Cloud, Data Cloud, and custom objects unless business value is clear.  
- Treat duplicate management, consent, and dashboard adoption as core success conditions.  
  
## Persona Comparison Matrix  
  

| Persona | Operating Reality | Most Important Standard Objects | Core Flows | Priority KPIs | Likely Scope Changes |
| ---------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Touring Singer-Songwriter | show-driven, regional markets, personal fan connection | Campaign, Campaign Member, Contact, Opportunity, Product, Task | New Fan Intake, Campaign Member Follow-Up, Purchase Rollup Update | attendee-to-subscriber conversion, revenue by market, post-show merch conversion, repeat attendance | add geography and market fields early, keep mobile data entry simple |
| DIY Band | shared ownership, multiple operators, releases and merch | Contact, Campaign, Opportunity, Product, Case, Task | New Fan Intake, Purchase Rollup Update, Case Triage | direct revenue by campaign, repeat buyers, support issue volume, growth by region | tighten ownership rules, standardize naming and dashboards for multiple users |
| Producer or DJ | digitally driven offers, drops, VIP upsell, scattered channels | Contact, Campaign, Opportunity, Product, Task | New Fan Intake, Fan Tier Evaluation, Campaign Member Follow-Up | conversion by drop, revenue by offer type, VIP uptake, repeat purchase rate | invest earlier in source tagging and channel preference fields |
| Online Niche Creator | niche audience, content-driven conversion, owned audience growth | Lead, Contact, Campaign, Opportunity, Product | New Fan Intake, Fan Tier Evaluation, Membership Renewal Reminder | follower-to-known-fan conversion, direct revenue share, patron retention, content conversion | prioritize owned audience capture and recurring supporter visibility |
| Composer and Multi-Hyphenate | mixed revenue streams, fan plus professional pipeline | Contact, Opportunity, Campaign, Task, Product | Purchase Rollup Update, Fan Tier Evaluation | revenue mix by channel, direct fan revenue, pipeline value, repeat supporter count | split reporting by fan revenue versus professional opportunity revenue |
  
  
## Business Model Comparison Matrix  
  

| Business Model | Revenue Motion | Most Important Standard Objects | Core Flows | Priority KPIs | Likely Scope Changes |
| ---------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Touring First | Shows, merch, VIP, repeat attendance | Campaign, Campaign Member, Contact, Opportunity, Product | Campaign Member Follow-Up, Purchase Rollup Update | Attendee conversion, show driven revenue, top markets, repeat attendance | Keep event structure simple, prioritize post-show follow-up |
| Merch First | Limited products, bundles, repeat buyer value | Product, Opportunity, Opportunity Product, Contact, Case | Purchase Rollup Update, Case Triage | Revenue by product, repeat buyers, revenue by drop, support issue rate | Strengthen product catalog discipline, keep fulfillment simple  |
| Membership First | Recurring tiers, fan club, exclusive access | Contact, Product, Opportunity, Campaign | Membership Renewal Reminder, Fan Tier Evaluation | Active members, renewal rate, churn, revenue by tier | Track membership with fields before custom objects |
| Crowdfunding First | Campaign based funding, tiered backers, project launches | Campaign, Campaign Member, Opportunity, Contact | Campaign Member Follow Up, Fan Tier Evaluation | Backer conversion, repeat backing, revenue by campaign, post campaign retention | Use campaigns heavily, avoid custom crowdfunding schema in MVP |
| Sync and Licensing First | Placements, licensing, commissions, limited fan monetization | Opportunity, Contact, Campaign, Task | Purchase Rollup Update or revenue update flow | Pipeline value, closed deal value, direct fan revenue, release response | Keep fan motions present but secondary to pipeline reporting |
| Teaching and Community First | Lessons, workshops, cohorts, memberships | Campaign, Contact, Opportunity, Case | Membership Renewal Reminder, Campaign Member Follow Up, Case Triage | Revenue by program, renewal rate, repeat participation, attendee to member conversion | Favor simple status fields over cohort specific custom data models |
  
  
### Recommended Pattern Combinations  
  

| Persona | Best Fit Business Models | Recommended Emphasis |
| ---------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Touring Singer-Songwriter | Touring, Merch, Membership | Market tracking, post show conversion, repeat buyer identification |
| DIY Band | Touring, Merch, Crowdfunding | Shared operating discipline, campaign tracking, support case handling |
| Producer/DJ | Merch, Membership, Crowdfunding | Digital offer conversion, VIP segmentation, source tracking |
| Online Niche Creator | Membership, Crowdfunding, Teaching and Community | Owned audience growth, recurring support, low cost nurture patterns |
| Composer and Multi-hyphenate | Sync and Licensing, Teaching and Community, Membership | Revenue channel separation, higher value opportunity tracking, selective fan motions |
  
  
## Core Object Recommendations By Pattern  

| Pattern Need | Preferred Standard Object | Why |
| ------------------------------ | ------------------------------------------- | ------------------------------------- |
| Unknown fan capture | Lead | Cheapest standard intake object |
| Known supporter profile | Contact or Person Account | Central fan record |
| Release, show, or launch | Campaign | Flexible and reportable |
| Attendance or response | Campaign Member | Built in participation tracking |
| Direct sale or premium package | Opportunity | Standard revenue tracking |
| Line item purchase detail | Opportunity Product | Ties revenue to offers |
| Recurring supporter tier | Contact fields plus Product and Opportunity | Avoids custom membership object early |
| Fan support issue | Case | Standard service workflow |
| High touch follow up | Task | Simple and maintainable |
  
  
## Core Flow Recommendations By Pattern  

| Flow | Use In | Purpose |
| ---------------------------------- | ---------------------------------------------- | ---------------------------------------------------------- |
| Purchase Rollup Update | All revenue tracking platforms | Update direct revenue, purchase dates, repeat buyer status |
| Fan Tier and Lapsed Fan Evaluation | All fan-development patterns | Identify true fans and at risk supporters |
| Campaign Member Follow Up | Touring, crowdfunding, VIP, community patterns | Act on attendance, backing, or campaign response |
| Membership Renewal Reminder | Membership and community patterns | Protect recurring revenue |
| Case Triage | Merch, Service, and Community Patterns | Maintain fan trust through support handling |
  
  
## Scope Adjustment Rules  
  
Use these rules before finalizing the MVP:  
- If the client has weak owned-audience capture, prioritize intake and consent before advanced revenue analytics.  
- If the client has multiple operators, prioritize ownership, permission discipline, and naming standards before segmentation enhancements.  
- If the client has recurring support tiers, prioritize renewal reminders and churn reporting before community features.  
- If the client has blended revenue streams, split dashboards by revenue channel early.  
- If the client cannot maintain manual revenue entry, reduce reporting ambition or add low-cost import discipline before adding more automation.  
  
## Anti-Patterns  
  
- modeling every business nuance with custom objects in the MVP  
- adding Experience Cloud before recurring supporter operations are stable  
- building advanced attribution before intake and revenue quality are trustworthy  
- using Salesforce as a payment processor or fulfillment engine  
- overloading one giant Flow with unrelated business outcomes  
  
## Final Recommendation  
  
The best Salesforce pattern for an independent musician comes from combining persona, business model, and operating maturity. The matrix should be used to reduce scope, not expand it. In a bootstrapped environment, the right answer is usually the smallest configuration that still makes weekly decisions easier.  
  
#mhd #discovery   
