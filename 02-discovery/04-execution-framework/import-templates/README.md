# Salesforce Import Templates

These header-only CSV files match the [field mappings](../03-field-mappings.md) and [controlled values](../02-controlled-values.md). They contain no client data or fake rows.

## Load order

| Order | Template | Salesforce object | Dependency |
|---:|---|---|---|
| 0 | [Accounts](00-accounts.csv) | Account | Create the shared **None** Account first; add only legitimate business Accounts |
| 1 | [Leads](01-leads.csv) | Lead | Pre-purchase supporters only |
| 2 | [Contacts](02-contacts.csv) | Contact | Requires AccountId; use **None** for ordinary fans |
| 3 | [Campaigns](03-campaigns.csv) | Campaign | Load parents before children |
| 4 | [Campaign Members](04-campaign-members.csv) | Campaign Member | Requires CampaignId and either LeadId or ContactId |
| 5 | [Products](05-products.csv) | Product2 | Activate products before price entries |
| 6 | [Price Book Entries](06-price-book-entries.csv) | PricebookEntry | Requires Product2Id and Standard Price Book ID |
| 7 | [Opportunities](07-opportunities.csv) | Opportunity | Requires AccountId; CampaignId optional |
| 8 | [Opportunity Contact Roles](08-opportunity-contact-roles.csv) | OpportunityContactRole | Requires OpportunityId and ContactId |
| 9 | [Opportunity Products](09-opportunity-products.csv) | OpportunityLineItem | Requires OpportunityId and PricebookEntryId |
| 10 | [Cases](10-cases.csv) | Case | ContactId/AccountId recommended |
| 11 | [Tasks](11-tasks.csv) | Task | Requires supported WhoId/WhatId relationships as applicable |

Historical buyers belong in Contacts plus Opportunities, not Leads. Use Leads for supporters who have not completed a first qualifying sale.

## File rules

- Confirm field API names and create required custom fields before loading.
- Use UTF-8 CSV, comma delimiter, YYYY-MM-DD dates, decimal currency without symbols, and TRUE/FALSE booleans.
- Normalize email casing and surrounding whitespace.
- Use only controlled picklist values.
- Set Consent_Status__c to TRUE only when Date and Source are supported by evidence.
- Do not populate both ContactId and LeadId on one Campaign Member row.
- Use Source_Record_Key__c and External_Order_Key__c to prevent repeated imports.
- Calculate Opportunity Amount as documented before import and reconcile it to the external system.
- Preserve a protected source backup, test a small batch, reconcile counts, and delete staging/export files according to the retention schedule.
- Test duplicate behavior for the chosen import tool; review DUPLICATES_DETECTED failures rather than disabling rules.

## Reconciliation

Source rows = Successfully imported + Intentionally excluded + Failed/unresolved

After each load, verify relationships, duplicates, consent, record counts, revenue totals, Campaign response, and dashboard visibility.
