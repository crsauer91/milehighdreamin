# KPI Dictionary

Use standard reports and dashboards wherever possible. Counts exclude deleted test data and should drill to source records. A zero denominator returns blank or 0%, according to the reporting convention chosen by the executor.

## Weekly Artist Dashboard

| KPI | Definition | Simple calculation |
|---|---|---|
| Identified Fans | Canonical fan Contacts under the shared **None** Account | Count of fan Contacts |
| True Fans / Patrons | High-value current fan tiers | Count of Contacts where Fan Tier is True Fan or Patron |
| Year-to-Date Direct Revenue | Take-home direct revenue in the current year | Sum Amount for qualifying Closed Won Opportunities by Close Date |
| Revenue Goal Remaining | Distance to the repository's annual $100,000 goal | MAX(0, 100000 - YTD Direct Revenue) |
| Revenue Goal Progress | Percent of annual goal achieved | YTD Direct Revenue / 100000 |
| Repeat Buyers | Fans with more than one qualifying purchase | Count of Contacts with qualifying purchase count >= 2 |
| Lapsed High-Value Fans | Inactive previously valuable fans needing review | Count where Lapsed Flag is TRUE and prior tier/value meets threshold |
| Membership Renewals Due | Active or grace-period memberships in the review window | Count by Membership Renewal Date and Status |
| Open Support Cases | Unresolved fan-service work | Count of Cases where Status is not Closed |
| Duplicate Review Backlog | Unresolved duplicate candidates | Count of unresolved Duplicate Record Sets/candidates |
| Consent Exceptions | Invalid affirmative consent records | Count where Consent is TRUE and Date or Source is blank |

## Revenue and fan development

| KPI | Definition | Simple calculation |
|---|---|---|
| Annual Direct Revenue per Identified Fan | Direct value across the known fan base | Current-year Direct Revenue / Identified Fans |
| Annual Direct Revenue per True Fan | Direct value across True Fans and Patrons | Current-year Direct Revenue attributed to those Contacts / their count |
| Repeat-Purchase Rate | Share of buyers who purchased more than once | Repeat Buyers / Contacts with at least one qualifying purchase |
| Direct Revenue by Channel | Take-home revenue mix | Sum Closed Won Amount grouped by Revenue Channel |
| Direct Revenue by Product | Take-home revenue by offer | Sum related Opportunity Product contribution grouped by Product |
| Direct Revenue by Campaign | Take-home revenue attributable to a Campaign | Sum Closed Won Amount grouped by Campaign |
| Direct vs Intermediated Revenue Share | Portion of tracked artist revenue retained as direct | Direct take-home revenue / total tracked revenue; use an accounting/platform denominator when intermediated revenue is not stored in Salesforce |
| Revenue by Market | Revenue associated with the fan or Campaign market | Sum qualifying Opportunity Amount grouped by Home/ Campaign Market |
| Revenue by Offer or Drop | Conversion and value of a discrete offer | Sum qualifying Opportunity Amount grouped by Product and Campaign |
| Open Pipeline Value | Active licensing, commission, teaching, or booking potential | Sum Amount where Stage is Open, grouped by Revenue Channel |
| Closed Professional Deal Value | Won licensing, commission, teaching, or booking value | Sum Closed Won Amount for those Revenue Channels |
| Fan Growth | Change in identified fan base | Ending fan count - beginning fan count |
| True Fan Emergence | Fans newly reaching True Fan or Patron | Count of tier changes into those values during period |
| Lapsed Recovery Rate | Reviewed lapsed fans restored to active relationship | Recovered lapsed fans / lapsed fans receiving an approved action |

## Campaign, membership, and service

| KPI | Definition | Simple calculation |
|---|---|---|
| Campaign Response Rate | Meaningful Campaign engagement | Responded Campaign Members / Campaign Members sent or invited |
| Crowdfunding Conversion | Backers from the measured audience | Purchased / Backed members / Sent / Invited members |
| Attendee-to-Subscriber Conversion | Event attendees who become affirmatively consented known fans | Attendees later meeting consent criteria / Attended members |
| Post-Show Purchase Conversion | Attendees who make a qualifying show-related purchase | Attendee Contacts with qualifying related purchase / Attended Contacts |
| Repeat Attendance Rate | Attendees returning to another measured event | Contacts attending at least two measured events / Contacts attending at least one |
| Repeat Backing Rate | Backers supporting more than one measured campaign | Contacts backing at least two crowdfunding Campaigns / Contacts backing at least one |
| Follower-to-Known-Fan Conversion | Rented audience converted to an owned relationship | New affirmatively consented Leads/Contacts from the channel / documented external follower or reach denominator |
| Content Conversion | Measured content audience taking the desired owned action | Responded members or qualifying conversions / documented content reach or measured Campaign audience |
| Patron Retention | Existing Patrons remaining active | Patrons still active at period end / Patrons at period start |
| Revenue by Program | Teaching/community value | Sum qualifying Amount grouped by program Campaign/Product |
| Attendee-to-Member Conversion | Program/event attendees becoming members | Attendees reaching Active membership / attended Contacts |
| Membership Renewal Rate | Due memberships renewed | Renewed memberships / memberships due |
| Membership Churn Rate | Due memberships that lapse or cancel | Lapsed or Canceled memberships / memberships due |
| VIP Uptake | Eligible supporters taking a VIP offer | VIP purchasers / eligible supporters offered |
| Case Resolution Rate | Closed service work | Cases closed during period / Cases opened plus beginning backlog |
| Average Case Resolution Time | Time to resolve Cases | Average ClosedDate - CreatedDate for closed Cases |
| Support Issue Rate | Service load relative to fulfilled transactions | Cases tied to transactions / fulfilled qualifying transactions |
| Follow-Up Completion Rate | Campaign/service Tasks completed by due date | Completed on-time Tasks / Tasks due |

## Dashboard rules

- Reconcile each dashboard total to its source report and sample records.
- Keep one definition per KPI; do not create near-duplicate measures.
- Segment only when it changes an action: market, Campaign, product, revenue channel, fan tier, or membership status.
- Review the dashboard in ten minutes or less and leave with no more than three actions.
- Thresholds for True Fan score, lapsed status, VIP eligibility, and renewal window remain configurable but must be documented before activation.
