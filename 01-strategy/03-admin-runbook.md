# 03-admin-runbook

## Purpose

This playbook defines how the Mile High Dreamin Salesforce proof of concept should be administered after initial configuration.

The operating goal is simple:

> Maintain a trustworthy, low-maintenance Salesforce system that helps an independent musician identify valuable supporters, deepen direct fan relationships, understand direct revenue, and surface supporters who need attention.

Administration should follow these principles:

1. **Standard > Custom**
2. **Flow > Code**
3. **Free/Low-Cost > Premium**
4. **Simple > Complex**
5. **Relationship quality > Audience size**
6. **Flag exceptions for human review rather than over-automating them**
7. **Do not add functionality unless it improves revenue, retention, or trust**
8. **Keep the org maintainable by one part-time administrator**

---

# 1. Field Definitions and Controlled Values

## 1.1 General Field Standards

Before creating a new field:

- Confirm a standard Salesforce field cannot satisfy the requirement.
- Confirm the field supports an MVP business question.
- Prefer picklists, checkboxes, dates, currency, and numbers over unrestricted text.
- Avoid storing information available reliably from another field.
- Do not store payment card information or unnecessary sensitive personal information.
- Avoid fields that require continual manual maintenance.
- Use controlled values whenever the information will be reported or filtered.
- Add field descriptions and help text for custom fields.
- Do not make a field universally required unless Salesforce cannot create a usable record without it.

---

## 1.2 Contact Fields

| Field | Type | Purpose | Required | Controlled Values / Rule |
|---|---|---|---|---|
| Email | Email | Primary fan identifier and communication address | Operationally expected | Validate before conversion where practical |
| Fan Tier | Picklist | Current relationship/value tier | No | Listener; Buyer; Repeat Buyer; True Fan; Patron; Lapsed |
| Lifetime Direct Revenue | Currency | Total qualifying direct revenue associated with fan | No | System-maintained; default 0 |
| First Purchase Date | Date | First qualifying direct purchase | No | System-maintained |
| Last Purchase Date | Date | Most recent qualifying direct purchase | No | System-maintained |
| Last Engagement Date | Date | Most recent meaningful tracked engagement | No | System-maintained where possible |
| Lapsed Fan Flag | Checkbox | Identifies fans requiring retention review | No | System-maintained; default False |
| True Fan Score | Number | Supporting indicator of fan value/engagement | No | 0–100 if implemented |
| Preferred Channel | Picklist | Fan's preferred direct communication method | No | Email; SMS/Text; Social; In Person; No Preference |
| Consent Status | Checkbox | Indicates affirmative permission for applicable direct marketing | No | Default False |
| Consent Date | Date | Date consent was captured | Conditional | Required when Consent Status = True |
| Consent Source | Picklist | Where affirmative consent was captured | Conditional | Required when Consent Status = True |
| Home Market | Picklist | Primary geographic market for segmentation | No | See Home Market values below |
| Favorite Product Era | Picklist | Artist-defined preference used for segmentation | No | Maintain only artist-specific eras that are operationally useful |
| Favorite Product Area | Picklist | General product/content preference | No | Maintain only categories actively used for targeting |
| Current Membership Tier | Picklist | Current recurring membership level | No | Phase 3; do not implement until membership is in scope |
| Membership Status | Picklist | Membership state | No | Phase 3 |
| Membership Renewal Date | Date | Next expected renewal | No | Phase 3 |
| VIP Eligible | Checkbox | Indicates VIP eligibility | No | Phase 3 |

### Fan Tier Definitions

| Tier | Definition |
|---|---|
| Listener | Known supporter with no qualifying direct purchase |
| Buyer | At least one qualifying direct purchase |
| Repeat Buyer | More than one qualifying direct purchase |
| True Fan | Demonstrated sustained direct financial and/or meaningful engagement |
| Patron | Highest-value or recurring supporter meeting the project's patron criteria |
| Lapsed | Previously valuable supporter who has exceeded the defined inactivity threshold |

Fan Tier should summarize the relationship. It should **not** become an elaborate predictive scoring system.

---

## 1.3 Home Market Values

Home Market represents a fan's primary geographic market, not necessarily their exact city.

Controlled values:

- Denver / Front Range
- Northern Colorado
- Southern Colorado
- Western Slope
- Mountain Communities
- Other Colorado
- Mountain West
- Southwest
- West Coast
- Midwest
- South
- Northeast
- Other U.S.
- International
- Unknown

Home Market is optional during initial capture. Do not sacrifice an otherwise useful fan record because geography is unavailable.

Retain standard city, state, postal code, and country information separately when available.

---

## 1.4 Lead Fields

| Field | Purpose | Standard |
|---|---|---|
| First Name | Identity | Capture when available |
| Last Name | Identity | Required by Salesforce |
| Email | Primary matching/contact value | Required by the MHD intake process |
| Company | Salesforce-required Lead value where applicable | Auto-populate with the MHD standard placeholder rather than asking the fan |
| Lead Status | Intake lifecycle | Use controlled lifecycle below |
| Lead Source | High-level origin | Required during controlled intake |
| Acquisition Channel | Marketing/acquisition classification | Controlled value |
| Consent Status | Initial consent state | Default False |
| Consent Date | Consent timestamp/date | Required only when opted in |
| Consent Source | Consent provenance | Required only when opted in |
| Home Market | Geographic segmentation | Optional |
| Preferred Channel | Communication preference | Optional |

### Lead Status

Use a deliberately short lifecycle:

1. **New**
2. **Working**
3. **Qualified**
4. **Unqualified**

Do not create a miniature sales pipeline for music fans.

**New**  
Captured but not reviewed.

**Working**  
Currently under review, enrichment, or duplicate investigation.

**Qualified**  
Meets the criteria to become a Contact.

**Unqualified**  
Should not currently be converted.

Document the reason for unusual disqualifications in an appropriate existing notes field rather than creating a taxonomy of failure.

---

## 1.5 Acquisition / Lead Source Standard

Use a small controlled list.

Recommended MHD runbook standard:

- Website / Direct Signup
- Live Event
- Social / Content
- Commerce / Purchase
- Referral / Other

Do not create separate values for every platform unless reporting proves that distinction useful.

When the originating system itself matters, preserve it separately in import documentation or an Order Source field rather than exploding Lead Source into dozens of platform names.

---

## 1.6 Consent Source

Use:

- Website / Form
- Purchase / Checkout
- Event / In Person
- Membership / Fan Club
- Manual / Other

Consent Source describes **where the permission came from**, not merely where the fan record came from.

---

## 1.7 Consent Rules

If:

`Consent Status = False`

Then:

- Consent Date may be blank.
- Consent Source may be blank.
- Marketing eligibility must not be inferred from record existence.

If:

`Consent Status = True`

Then:

- Consent Date is required.
- Consent Source is required.

Never automatically convert an unknown consent state into affirmative consent.

---

## 1.8 Campaign Types

Use these Campaign Type values:

- Release
- Tour
- Show
- Merch Drop
- Crowdfunding
- Fan Club
- VIP Offer

Do not create a new Campaign Type merely because a campaign feels slightly different from the previous one.

---

## 1.9 Product and Revenue Fields

### Product Categories

Use standard Products for items that generate direct revenue, including:

- Albums / Singles
- Vinyl / Physical Music
- Merchandise
- Bundles
- Memberships
- VIP Offers

Use the Standard Price Book unless a demonstrable need for another price book develops.

### Opportunity Fields

| Field | Purpose |
|---|---|
| Amount | Qualifying direct revenue |
| Close Date | Purchase/transaction date |
| Stage | Purchase state |
| Revenue Channel | Broad revenue category |
| Order Source | Originating commerce/payment system |
| Fulfillment Status | Operational fulfillment state where needed |
| Related Campaign | Campaign associated with purchase |
| Purchase Type | New, repeat, membership, VIP, etc. where useful |

Keep Opportunity stages minimal. At minimum:

- Open
- Closed Won
- Closed Lost

A fan purchase should generally become **Closed Won**, not spend several days pretending to negotiate with a T-shirt.

---

# 2. Flow Inventory

## 2.1 Flow Design Rules

Every Flow must:

- Solve one narrow business outcome.
- Have a clear API name.
- Include a description.
- Document triggering conditions.
- Include fault handling for data operations.
- Avoid unnecessary subflows.
- Avoid Apex unless configuration cannot reasonably solve the requirement.
- Be tested before activation.
- Be added to the Flow Inventory below.
- Have an identifiable owner.
- Be deactivated when replaced.

---

## 2.2 MVP Flow Inventory

| Flow | Type | Purpose | Trigger | Status |
|---|---|---|---|---|
| MHD - Lead Intake | Screen Flow | Controlled manual fan intake and duplicate review | Admin/user initiated | MVP |
| MHD - Purchase Rollup Update | Record-Triggered Flow | Update Contact revenue and purchase dates | Qualifying Closed Won purchase | Planned |
| MHD - Fan Tier Evaluation | Record-Triggered or Scheduled Flow | Maintain fan tier from approved criteria | Relevant fan/revenue change | Planned |
| MHD - Lapsed Fan Evaluation | Scheduled Flow | Identify previously valuable inactive fans | Scheduled | Planned |
| MHD - Consent Validation Support | Record-Triggered Flow only if needed | Support consent administration beyond validation rules | Consent change | Optional |

Do not create additional flows simply to make the architecture appear sophisticated.

---

## 2.3 Flow Error Standard

All Screen Flow data-operation fault paths should route to a shared error screen where practical.

### Shared Error Screen

**Label:** `Flow Error`  
**API Name:** `Flow_Error`

Display:

> The requested Salesforce operation could not be completed. No successful update should be assumed until this error is resolved.

Expose:

`{!$Flow.FaultMessage}`

Administrators should capture the fault message before retrying or manually modifying records.

---

# 3. Duplicate Review / Merge Procedure

## 3.1 Policy

MHD uses a **flag-not-block** duplicate strategy.

Duplicate controls exist to:

- protect fan history;
- avoid fragmented revenue;
- preserve consent history;
- maintain trustworthy reporting.

They should not unnecessarily prevent legitimate fan creation.

---

## 3.2 Matching Coverage

Maintain matching logic for:

- Lead → Lead
- Contact → Contact
- Lead → Contact

Primary matching should emphasize:

1. Normalized email.
2. Name where practical.
3. Human review when evidence conflicts.

Email should receive the greatest weight because names alone are unreliable.

---

## 3.3 Duplicate Rule Behavior

Configure duplicate rules to:

- alert the user;
- allow creation or update;
- report potential duplicates;
- avoid automatic merge;
- avoid blocking except if a later demonstrated data-quality problem justifies it.

---

## 3.4 Intake Duplicate Review

When the intake Flow identifies a possible duplicate:

1. Review the matching Lead or Contact.
2. Compare email.
3. Compare name.
4. Review available consent information.
5. Review existing purchase or engagement history.
6. Decide whether the incoming record represents:
   - the same person;
   - a genuinely different person;
   - an unresolved case.
7. If clearly the same person, update/use the existing record instead of creating another.
8. If clearly different, continue creation.
9. If uncertain, retain both and flag for later review rather than destroying information.

The intake Flow may require acknowledgement:

**I reviewed the potential duplicate and want to continue.**

The acknowledgement should be required before creating a record despite a duplicate warning.

---

## 3.5 Contact Merge Procedure

Before merging Contacts:

1. Confirm both records represent the same individual.
2. Identify the record with the strongest history and data quality.
3. Review:
   - email;
   - consent;
   - campaign history;
   - activities;
   - Opportunities;
   - revenue;
   - purchase dates;
   - fan tier;
   - home market;
   - preferred channel.
4. Select the master record.
5. Preserve the best field value for each field.
6. Merge using standard Salesforce merge functionality.
7. Confirm related records remain associated correctly.
8. Recalculate or verify:
   - Lifetime Direct Revenue;
   - First Purchase Date;
   - Last Purchase Date;
   - Fan Tier;
   - Lapsed Fan Flag.
9. Verify consent was not accidentally upgraded during the merge.

Never merge merely because two people share a name.

---

## 3.6 Duplicate Review Cadence

Review possible duplicates:

- during intake when surfaced;
- after a major import;
- during the weekly operating ritual if unresolved duplicates exist;
- before relying on fan-count or high-value-fan reporting.

---

# 4. Consent Administration

## 4.1 Principle

A fan record and marketing permission are different things.

Salesforce may retain a legitimate fan/customer record even when marketing consent is absent, subject to the project's privacy and deletion policies.

Do not infer marketing consent from:

- a purchase alone;
- attendance alone;
- social interaction;
- record import;
- existing email address.

---

## 4.2 Recording Consent

When affirmative consent is received:

1. Set `Consent Status = True`.
2. Enter Consent Date.
3. Select Consent Source.
4. Record Preferred Channel when known.
5. Save.
6. Confirm validation succeeds.

---

## 4.3 Withdrawal

When a fan withdraws consent:

1. Set `Consent Status = False`.
2. Preserve historical consent evidence where appropriate.
3. Do not overwrite historical information merely to make the record cleaner.
4. Ensure future campaign/export processes exclude the fan from marketing where required.
5. Process deletion requests separately according to the privacy procedure.

Consent withdrawal must not delete purchase, accounting, or other legitimately retained operational history automatically.

---

## 4.4 Consent QA

Periodically report on:

- Consent Status = True AND Consent Date blank.
- Consent Status = True AND Consent Source blank.
- unusual or invalid controlled values.
- marketing lists containing non-consented records.

The expected count for the first two reports is **zero**.

---

# 5. Import Procedures

## 5.1 Preferred Capture Methods

Use, in order:

1. Direct controlled capture such as Web-to-Lead.
2. Approved Screen Flow/manual intake.
3. Structured CSV import when direct capture is unavailable.

Imports should not become the default operating model simply because spreadsheets have successfully resisted extinction.

---

## 5.2 Before Import

For every import:

1. Identify the source.
2. Identify the record owner.
3. Record the source date/range.
4. Confirm field mappings.
5. Normalize controlled values.
6. Remove obviously invalid records.
7. Normalize email casing/whitespace.
8. Review duplicates.
9. Confirm consent data can be supported by evidence.
10. Confirm required fields.
11. Create a backup copy of the source file.
12. Test with a small sample before the full load.

---

## 5.3 Required Import Mapping

At minimum review:

- First Name
- Last Name
- Email
- Lead Source / Acquisition Channel
- Consent Status
- Consent Date
- Consent Source
- Home Market
- Preferred Channel
- applicable source identifiers

Do not invent affirmative consent merely to satisfy a field mapping.

---

## 5.4 Import Sequence

1. Prepare clean CSV.
2. Validate picklist values.
3. Run duplicate analysis.
4. Import a small test batch.
5. Review test records.
6. Verify ownership.
7. Verify duplicate behavior.
8. Verify consent values.
9. Verify reporting visibility.
10. Complete the main import.
11. Record successful and failed row counts.
12. Investigate failures.
13. Re-run only corrected failed records.
14. Perform post-import reconciliation.

---

## 5.5 Post-Import Reconciliation

Confirm:

`Source rows = Successfully imported + Intentionally excluded + Failed/unresolved`

Also review:

- total fan count;
- duplicate count;
- consent count;
- acquisition source distribution;
- unexpected blank required fields;
- new high-value or repeat-buyer records when revenue was imported.

---

# 6. Campaign Creation Standards

## 6.1 When to Create a Campaign

Create a Campaign when Salesforce needs to measure a discrete:

- release;
- tour;
- show;
- merch drop;
- crowdfunding effort;
- fan club initiative;
- VIP offer.

Do not create Campaigns for every social post or minor communication.

---

## 6.2 Campaign Hierarchy

Use shallow hierarchies.

Examples:

**Tour**
- Parent: Tour
- Child: Individual Show

**Release**
- Parent: Release
- Child campaigns only when separately measurable activity genuinely requires them

Avoid deep hierarchies that make reporting dependent on administrative archaeology.

---

## 6.3 Required Campaign Information

Each active Campaign should include:

- Campaign Name
- Type
- Status
- Start Date
- End Date when known
- Parent Campaign when applicable
- Owner
- Description when context is not obvious

---

## 6.4 Campaign Member Status

Use a small status set appropriate to the Campaign Type.

Statuses should represent meaningful movement such as:

- Sent / Invited
- Responded / Engaged
- Attended
- Purchased / Backed
- No Response

Not every status applies to every Campaign Type.

At least one status should be configured as **Responded** whenever response reporting is required.

Keep status meanings consistent across comparable campaigns.

---

# 7. Naming Conventions

## 7.1 General Standard

Names should answer:

1. What is it?
2. What does it affect?
3. What does it do?

Avoid:

- initials known only to one admin;
- dates unless operationally meaningful;
- `NEW`, `FINAL`, `FINAL2`, or similar signs that civilization has collapsed;
- unexplained abbreviations.

Use `MHD` as the implementation prefix where useful.

---

## 7.2 Custom Fields

**Label**

`Descriptive Business Name`

**API Name**

`Descriptive_Business_Name__c`

Examples:

- `Fan_Tier__c`
- `Lifetime_Direct_Revenue__c`
- `Last_Engagement_Date__c`
- `Lapsed_Fan_Flag__c`
- `Consent_Source__c`

---

## 7.3 Flows

Format:

`MHD - [Object/Process] - [Outcome]`

Examples:

- `MHD - Lead - Intake`
- `MHD - Contact - Fan Tier Evaluation`
- `MHD - Contact - Lapsed Fan Evaluation`
- `MHD - Opportunity - Purchase Rollup Update`

API names may use underscores:

`MHD_Lead_Intake`

---

## 7.4 Reports

Format:

`MHD - [Subject] - [Question/View]`

Examples:

- `MHD - Fans - By Tier`
- `MHD - Fans - Emerging True Fans`
- `MHD - Fans - Lapsed High Value`
- `MHD - Revenue - By Campaign`
- `MHD - Revenue - By Product`

---

## 7.5 Dashboards

Examples:

- `MHD - Weekly Artist Dashboard`
- `MHD - Campaign Dashboard`
- `MHD - Operations Dashboard`

---

## 7.6 Campaigns

Format:

`YYYY - [Type] - [Name]`

Examples:

`2026 - Release - Album Name`

`2026 - Tour - Summer Tour`

`2026 - Show - Denver - Venue Name`

`2026 - Merch Drop - Fall Collection`

Use naming that remains understandable after the event has passed.

---

# 8. Deployment Procedure

## 8.1 POC Deployment Model

The current MHD implementation is a proof of concept in a Salesforce Developer org.

A separate sandbox is therefore not required for the current POC.

The admin should still behave as though changes are deployable assets:

- document configuration;
- test before activation;
- avoid editing multiple unrelated components simultaneously;
- retain source/reference documentation;
- record significant changes.

If MHD moves into a production Salesforce environment, adopt a formal sandbox/deployment workflow before significant development continues.

---

## 8.2 Pre-Change

Before a significant configuration change:

1. Define the expected outcome.
2. Identify affected objects, automation, reports, and permissions.
3. Review dependencies.
4. Record current configuration when rollback may be difficult.
5. Prepare test cases.
6. Confirm the change supports revenue, retention, or trust.

---

## 8.3 Build

1. Make the smallest viable change.
2. Keep automation inactive while incomplete.
3. Add descriptions.
4. Configure fault handling.
5. Test positive path.
6. Test negative path.
7. Test duplicate behavior where relevant.
8. Test permissions.
9. Test reporting effects.
10. Activate only after successful testing.

---

## 8.4 Post-Change Smoke Test

Test the critical path affected by the deployment.

Core smoke tests:

- create a Lead;
- trigger duplicate warning;
- complete intake;
- convert a qualified Lead;
- update consent;
- create/associate Campaign Member;
- create qualifying purchase;
- verify revenue rollup;
- verify fan tier;
- verify lapsed logic where applicable;
- run affected reports/dashboard.

Do not mark deployment complete merely because Salesforce allowed the Save button to be pressed.

---

# 9. Rollback Procedure

## 9.1 Configuration Rollback

If a configuration change fails:

1. Stop further related changes.
2. Deactivate the new Flow or automation when appropriate.
3. Restore the previous configuration.
4. Re-run the relevant smoke tests.
5. Document the failure.
6. Correct the change before attempting deployment again.

Never delete the previous working automation until its replacement has been validated.

---

## 9.2 Bad Data Load Rollback

If an import produces incorrect data:

1. Stop additional imports.
2. Identify the import batch.
3. Preserve the original source file.
4. Identify records created or modified by the bad load.
5. Determine whether:
   - records can be safely deleted;
   - fields should be restored;
   - duplicates require merge;
   - related records prevent deletion.
6. Correct the smallest affected dataset possible.
7. Reconcile record counts.
8. Re-run affected reports.
9. Document the incident.

Do not perform broad deletion when targeted correction is possible.

---

## 9.3 Rollback Decision Rule

Prefer:

`Disable → Inspect → Correct → Retest`

over:

`Delete everything and hope nobody notices.`

---

# 10. Exception / Error Handling

## 10.1 Exception Categories

Classify operational issues as:

- Duplicate
- Flow Error
- Import Error
- Data Quality
- Consent Exception
- Automation Failure
- Reporting Discrepancy
- Access / Permission
- Other

Do not create a custom object solely to track these during the POC unless the volume proves it necessary.

A simple admin log or project issue tracker is sufficient.

---

## 10.2 Flow Errors

When a Flow faults:

1. Record `$Flow.FaultMessage`.
2. Record the Flow name.
3. Record the affected record.
4. Record the user.
5. Record the approximate time.
6. Do not assume the transaction succeeded.
7. Check whether Salesforce rolled back the transaction.
8. Correct the cause.
9. Retest the same scenario.
10. Add a regression test if the problem could recur.

---

## 10.3 Data Exceptions

Never silently force a record into a controlled value.

If data does not fit:

1. Determine whether the source data is wrong.
2. Determine whether an existing value is adequate.
3. Use `Unknown` or an approved broad value when available.
4. Add a new controlled value only if multiple legitimate records require it and reporting benefits.

---

# 11. Recurring Maintenance

## Weekly

- Review new Leads needing attention.
- Review possible duplicates.
- Review lapsed high-value fans.
- Review emerging True Fans.
- Review failed automation or import issues.
- Review consent exceptions.
- Review Weekly Artist Dashboard.

## Monthly

- Review picklist usage.
- Review unused reports/list views.
- Review inactive or obsolete Campaigns.
- Review Flow errors.
- Spot-check duplicate quality.
- Validate revenue rollups.
- Review users and permissions.
- Review data completeness.

## Quarterly

- Review whether each custom field is still useful.
- Review whether each Flow is still necessary.
- Review Campaign Type and status consistency.
- Review fan-tier logic.
- Review lapsed-fan thresholds.
- Review direct-revenue definition.
- Review privacy/data-minimization practices.
- Review dashboard usage.
- Remove obsolete configuration when safe.

## Before Adding Functionality

Confirm:

- Is the current system being used?
- Are duplicates controlled?
- Are purchases being entered reliably?
- Are existing Flows understandable?
- Are dashboards generating decisions?
- Does the proposed change improve revenue, retention, or trust?

If not, do not expand the architecture.

---

# 12. Weekly Operating Ritual

## Objective

The Weekly Artist Dashboard review should take approximately **10 minutes or less**.

It is an action meeting, not a Salesforce appreciation ceremony.

---

## Step 1: Check System Health

Review:

- new intake failures;
- unresolved duplicates;
- import failures;
- automation errors;
- consent exceptions.

Correct trust problems before relying on business metrics.

---

## Step 2: Review New Fans

Review:

- new Leads;
- newly converted Contacts;
- acquisition sources;
- new buyers.

Identify records requiring qualification or cleanup.

---

## Step 3: Review Valuable Fans

Review:

- new Repeat Buyers;
- emerging True Fans;
- new Patrons;
- highest-value recent purchasers.

Identify supporters who merit direct acknowledgment or relationship-building.

---

## Step 4: Review Lapsed Fans

Review:

- Lapsed Fan Flag = True;
- previously high-value fans with no recent engagement;
- former Repeat Buyers / True Fans becoming inactive.

Select a small number for appropriate follow-up.

Do not automate intimate fan relationships into spam.

---

## Step 5: Review Revenue and Campaigns

Review:

- direct revenue this week;
- revenue by Campaign;
- revenue by Product;
- repeat purchase activity;
- major campaign responses.

Ask:

> What worked well enough to repeat?

---

## Step 6: Create Actions

Leave the ritual with only concrete actions, such as:

- resolve a duplicate;
- follow up with a lapsed True Fan;
- correct consent data;
- investigate a campaign result;
- fix an import or automation issue.

The dashboard exists to create decisions, not screenshots.

---

# 13. UAT / Regression Procedures

## 13.1 UAT Standard

Every major business process must be tested from the user's perspective before being considered complete.

Each test should record:

- Test ID
- Scenario
- Preconditions
- Steps
- Expected Result
- Actual Result
- Pass / Fail
- Tester
- Date
- Defect / Notes

---

## 13.2 Core UAT Scenarios

### UAT-01: Clean Lead Intake

Verify:

1. User enters valid fan information.
2. Required fields are enforced.
3. No duplicate is found.
4. Lead is created.
5. owner is correct;
6. source is correct;
7. consent is correct.

**Expected:** One valid Lead exists.

---

### UAT-02: Duplicate Lead Intake

Verify:

1. Existing matching record exists.
2. User attempts intake.
3. Potential duplicate is shown.
4. User can review the match.
5. creation is not automatically blocked;
6. continuation requires explicit acknowledgement where configured.

**Expected:** Duplicate is surfaced without silently creating fragmentation.

---

### UAT-03: Lead-to-Contact Duplicate

Verify matching against an existing Contact during Lead intake/conversion.

**Expected:** Existing Contact is surfaced before unnecessary Contact creation.

---

### UAT-04: Qualified Lead Conversion

Verify:

1. Lead meets qualification criteria.
2. Lead converts successfully.
3. Contact is created or associated correctly.
4. source and consent information survive conversion;
5. activities/history remain accessible.

**Expected:** One usable Contact represents the fan.

---

### UAT-05: Consent Validation

Test:

`Consent Status = True`

with blank Consent Date and/or Consent Source.

**Expected:** Save is prevented.

Then populate both fields.

**Expected:** Save succeeds.

---

### UAT-06: Direct Purchase

Create a qualifying Closed Won Opportunity.

Verify:

- Amount
- Contact relationship
- Product
- Related Campaign
- Revenue Channel
- Order Source
- Close Date

Then verify Contact:

- Lifetime Direct Revenue
- First Purchase Date
- Last Purchase Date
- Fan Tier

**Expected:** Fan value updates correctly.

---

### UAT-07: Repeat Purchase

Add another qualifying purchase.

**Expected:**

- Lifetime revenue increases correctly;
- Last Purchase Date updates;
- First Purchase Date remains unchanged;
- repeat-buyer/tier logic evaluates correctly.

---

### UAT-08: Campaign Response

Add a Contact to a Campaign and progress Campaign Member Status.

**Expected:**

- membership is visible;
- Responded behavior is correct;
- reports count response correctly.

---

### UAT-09: Lapsed Fan Logic

Create/test a fan meeting the inactivity criteria.

**Expected:**

- Lapsed Fan Flag is set;
- relevant list view/report contains the fan;
- fan is not incorrectly marked lapsed while recent qualifying activity exists.

---

### UAT-10: Flow Fault

Force a controlled Flow failure.

**Expected:**

- Flow follows fault path;
- Flow Error screen displays;
- `$Flow.FaultMessage` is visible;
- user is not told the operation succeeded.

---

### UAT-11: Import

Import a small known dataset containing:

- clean record;
- duplicate;
- missing optional value;
- consented fan;
- non-consented fan.

**Expected:** Each follows the documented intake/data-quality rules.

---

### UAT-12: Dashboard Reconciliation

Compare dashboard totals to underlying reports and sample records.

**Expected:** Dashboard figures can be traced to Salesforce data.

---

## 13.3 Regression Testing

Regression testing is required when changing:

- Flow logic;
- matching rules;
- duplicate rules;
- validation rules;
- consent fields;
- revenue calculations;
- fan-tier logic;
- lapsed logic;
- Campaign Member Status;
- Opportunity configuration;
- permissions affecting core processes.

Run the affected UAT scenarios plus at least one adjacent business process.

Example:

If changing duplicate matching, rerun:

- clean intake;
- duplicate intake;
- Lead-to-Contact duplicate;
- Lead conversion.

---

# 14. Admin Definition of Done

A configuration item is complete only when:

- the business purpose is documented;
- naming follows the standard;
- permissions are correct;
- controlled values are defined;
- automation has fault handling;
- duplicate implications are reviewed;
- consent implications are reviewed;
- UAT passes;
- regression testing passes where applicable;
- reports remain accurate;
- rollback is understood;
- admin documentation is updated.

A feature merely existing in Salesforce does not make it complete.

---

# 15. Administrative Stop Rules

Stop adding features when any of the following is true:

- dashboards are not being used;
- duplicate problems are unresolved;
- direct purchases are not being entered reliably;
- consent cannot be trusted;
- existing Flows are difficult to troubleshoot;
- routine administration exceeds available capacity;
- proposed functionality cannot be tied to revenue, retention, or trust.

Fix the operating system before expanding it.

---

# 16. Runbook Ownership

**Primary Owner:** MHD Salesforce Administrator

The administrator owns:

- controlled-value governance;
- Flow inventory;
- duplicate review;
- imports;
- consent administration;
- Campaign standards;
- configuration documentation;
- deployment and rollback;
- error triage;
- recurring maintenance;
- weekly system-health review;
- UAT/regression coordination.

This playbook should be updated whenever a material administrative procedure changes.

The goal is not perfect documentation. The goal is that a future administrator can determine **what the system does, why it does it, and what to do when it fails** without reverse-engineering the entire org.