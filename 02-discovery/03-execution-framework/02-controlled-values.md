# Controlled Values

These values preserve repository terminology. Values marked **Framework default** fill a gap in the existing source and may be narrowed by an executor without changing the data model.

## Fan and intake

| Field | Values | Source |
|---|---|---|
| Fan Tier | Listener; Buyer; Repeat Buyer; True Fan; Patron; Lapsed | Admin runbook |
| Lead Status | New; Working; Qualified; Unqualified | Admin runbook |
| Lead Source / Acquisition Channel | Website / Direct Signup; Live Event; Social / Content; Commerce / Purchase; Referral / Other | Admin runbook |
| Preferred Channel | Email; SMS/Text; Social; In Person; No Preference | Admin runbook |
| Consent Source | Website / Form; Purchase / Checkout; Event / In Person; Membership / Fan Club; Manual / Other | Admin runbook |
| Home Market | Denver / Front Range; Northern Colorado; Southern Colorado; Western Slope; Mountain Communities; Other Colorado; Mountain West; Southwest; West Coast; Midwest; South; Northeast; Other U.S.; International; Unknown | Admin runbook |
| Favorite Product Era | Current / Recent; Catalog / Legacy; All Eras; Unknown | Framework default |
| Interest / Favorite Product Area | Live Shows; New Music; Physical Music; Merchandise; Membership / Fan Club; VIP Experiences; Crowdfunding; Lessons / Workshops; Community; Licensing / Professional; Other | Framework default |

Use the Salesforce-required Lead Company placeholder **Individual Fan**. Do not create a business Account from that value.

## Campaigns

| Field | Values | Source |
|---|---|---|
| Type | Release; Tour; Show; Merch Drop; Crowdfunding; Fan Club; VIP Offer | Admin runbook |
| Status | Planned; In Progress; Completed; Aborted | Salesforce-aligned framework default |
| Campaign Member Status | Sent / Invited; Responded / Engaged; Attended; Purchased / Backed; No Response | Admin runbook |

Configure Responded / Engaged, Attended, and Purchased / Backed as Responded where the Campaign type uses them. Use only the statuses meaningful to that Campaign type.

## Products, revenue, and pipeline

| Field | Values | Source |
|---|---|---|
| Product Family | Albums / Singles; Vinyl / Physical Music; Merchandise; Bundles; Memberships; VIP Offers | Admin runbook |
| Opportunity Stage | Open; Closed Won; Closed Lost | Admin runbook |
| Opportunity Type | Direct Purchase; Membership; VIP; Crowdfunding; Licensing / Commission; Teaching / Program; Private Booking; Refund / Adjustment; Other | Framework default |
| Revenue Channel | Live Shows; Music Sales; Merchandise; Membership; VIP; Crowdfunding; Licensing / Commissions; Teaching / Community; Private Booking; Other Direct | Framework default |
| Order Source | Website / Store; Point of Sale; Marketplace; Ticketing Platform; Membership Platform; Crowdfunding Platform; Invoice / Manual; Other | Framework default |
| Fulfillment Status | Not Required; Pending; In Progress; Partially Fulfilled; Fulfilled; Canceled; Refunded | Framework default |
| Purchase Type | First Purchase; Repeat Purchase; Membership Start; Membership Renewal; VIP; Crowdfunding; Licensing / Commission; Teaching / Program; Private Booking; Refund / Adjustment; Other | Framework default |
| Opportunity Contact Role | Buyer; Member; Backer; Licensee; Student / Participant; Primary Contact; Other | Framework default |

Use the Standard Price Book. Store reconciled take-home direct revenue in Opportunity Amount.

## Membership and VIP

| Field | Values | Source |
|---|---|---|
| Current Membership Tier | Supporter; Member; Patron | Framework default |
| Membership Status | Prospect; Active; Grace Period; Lapsed; Canceled | Admin runbook |
| VIP Eligible | TRUE; FALSE | Admin runbook |

An executor may rename membership tiers to match a client offer, but must preserve the three-level meaning and status lifecycle.

## Cases and Tasks

| Field | Values | Source |
|---|---|---|
| Case Status | New; Working; Escalated; Closed | Salesforce-aligned framework default |
| Case Origin | Email; Phone; Web; Other | Salesforce standard default |
| Case Priority | High; Medium; Low | Salesforce standard default |
| Case Type | Order; Digital Access; Event; Membership; Billing; General Support | Repository process plus framework default |
| Case Reason | Damaged / Defective; Missing / Late; Access Problem; Billing Question; Refund Request; Event Question; Membership Change; General Question; Other | Framework default |
| Task Status | Not Started; In Progress; Completed; Waiting on Someone Else; Deferred | Salesforce-aligned framework default |
| Task Priority | High; Normal; Low | Salesforce standard default |

## Data rules

- Blank is not a controlled value. Use Unknown only where it is explicitly listed.
- Do not add a picklist value for one unusual record.
- Preserve originating platform detail in source documentation, Order Source, or a source key rather than expanding Lead Source.
- Use TRUE/FALSE for CSV booleans and YYYY-MM-DD for dates.
