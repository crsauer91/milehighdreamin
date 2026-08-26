# Discovery Questionnaire

## Purpose  
  
Identify the **smallest credible Salesforce pattern** for an artist by determining the best-fit **persona, business model, MVP scope, objects, automation, dashboards, risks, and constraints**. Discovery should guide implementation, not attempt perfect architecture.  

## Discovery Questions  

### Business  
  
1. Top 3 current revenue sources?  
2. Priority revenue stream for next 12 months?  
3. Solo, band, or small team?  
4. Weekly Salesforce/fan-ops capacity?  
5. Where does fan/customer data currently live?  

### Audience  
  
1. Can you identify top supporters?  
2. Can you identify repeat/recurring supporters without manual spreadsheets?  
3. Primary relationship channels: live, online, community, professional, or mixed?  
4. Importance of identifying disengagement risk?  
5. Reliance on rented audiences vs owned audience?  

### Revenue  
  
1. Primary model: **shows, merch/drops, membership, crowdfunding, licensing/commissions, teaching/community, or mixed?**  
2. Repeated direct sales or project-based revenue?  
3. Need renewal tracking?  
4. Need high-value deal/pipeline tracking?  
5. Need support cases for orders, access, or members?  

### Operations  
  
1. Live-event/touring frequency?  
2. Product/release/campaign launch frequency?  
3. Need performance comparison by city, market, campaign, or product?  
4. Is post-event/launch follow-up consistent?  
5. How often is supporter segmentation needed?  

### Data/Admin  
  
1. Is data reasonably import-ready?  
2. Will multiple users share records?  
3. Explicit consent records or implied permission?  
4. Willing to use imperfect-but-standard Salesforce objects?  
5. Can advanced functionality wait until MVP proves value?  

### Constraints  
  
1. Is lowest-maintenance Salesforce preferred?  
2. Are premium clouds/custom development currently out of scope?  
3. Can the team review dashboards weekly?  
4. Can at least one direct-revenue source be reliably captured/imported?  
5. What outcome would make the project feel wasted after six months?  
  
## Persona Routing  
  
* **Touring Singer-Songwriter:** solo/small operation; touring, live relationships, post-show conversion, geography.  
* **DIY Band:** shared ownership; shows, merch, releases; coordination matters.  
* **Producer/DJ:** digital launches, drops, VIP/exclusives, conversion, segmentation.  
* **Online Niche Creator:** internet-centered niche audience; owned-audience growth, recurring/content-driven support.  
* **Composer/Multi-Hyphenate:** mixed fan and professional revenue such as licensing, commissions, or teaching; channels must remain distinct.  
  
## Business Model Routing  
  
* **Touring First:** shows drive revenue/audience growth.  
* **Merch First:** products/drops drive revenue.  
* **Membership First:** recurring support/access dominates.  
* **Crowdfunding First:** campaigns/backer conversion dominate.  
* **Sync & Licensing First:** professional deal pipeline dominates or rivals fan revenue.  
* **Teaching & Community First:** workshops, cohorts, programs, or paid communities dominate.  
  
If several models apply, select the **strongest current revenue motion** and defer others to Phase 2.  
  
## Discovery Output  
  
Document:  
* Best-fit persona  
* Primary/secondary business models  
* Salesforce edition constraints  
* Required standard objects, flows, and dashboards  
* Key risks  
* MVP exclusions  
* Required weekly operating habit  
  
## Minimum MVP  
  
Every implementation includes:  
* Single fan-profile strategy  
* Consent tracking  
* Duplicate management  
* Campaign structure  
* Direct-revenue visibility where feasible  
* ≥1 weekly dashboard  
* Narrow, admin-maintainable Flow automation  
  
## Scope Red Flags  
  
Reset scope if:  
* Enterprise expectations meet bootstrap budget  
* No data-quality owner exists  
* No direct revenue can be captured/imported  
* Standard objects are rejected without custom-development capacity  
* Advanced features are prioritized before basic adoption  
  
**Principle:** Reduce false precision. Choose the simplest Salesforce pattern that measurably improves how the artist operates.
