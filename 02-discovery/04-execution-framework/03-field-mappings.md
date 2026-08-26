# Field Mappings

The import templates use Salesforce API names. **Standard** means available on the named standard object. **Custom** means configure the field before importing. Confirm API names in the target org; do not change template headers silently.

## Template column map

| Template | Standard columns | Custom columns and defaults |
|---|---|---|
| Accounts | Name; Type; Website; Phone; BillingStreet; BillingCity; BillingState; BillingPostalCode; BillingCountry; Description | None. Create one shared Account named **None** before fan imports. |
| Leads | FirstName; LastName; Company; Email; Phone; MobilePhone; Status; LeadSource; Street; City; State; PostalCode; Country; Description; HasOptedOutOfEmail; DoNotCall | Acquisition_Channel__c; Consent_Status__c; Consent_Date__c; Consent_Source__c; Home_Market__c; Preferred_Channel__c; Interest_Area__c; Source_Record_Key__c |
| Contacts | FirstName; LastName; AccountId; Email; Phone; MobilePhone; HasOptedOutOfEmail; DoNotCall; MailingStreet; MailingCity; MailingState; MailingPostalCode; MailingCountry; Description | Fan_Tier__c; Lifetime_Direct_Revenue__c; First_Purchase_Date__c; Last_Purchase_Date__c; Last_Engagement_Date__c; Lapsed_Fan_Flag__c; True_Fan_Score__c; Preferred_Channel__c; Consent_Status__c; Consent_Date__c; Consent_Source__c; Original_Lead_Source__c; Acquisition_Channel__c; Home_Market__c; Favorite_Product_Era__c; Favorite_Product_Area__c; Current_Membership_Tier__c; Membership_Status__c; Membership_Renewal_Date__c; VIP_Eligible__c; Source_Record_Key__c |
| Campaigns | Name; Type; Status; IsActive; StartDate; EndDate; ParentId; Description; ExpectedRevenue; BudgetedCost; ActualCost; ExpectedResponsePercent; NumberSent | Market__c; Goal__c; Primary_Offer__c; Direct_Revenue_Target__c; Actual_Direct_Revenue__c; Source_Record_Key__c |
| Campaign Members | CampaignId; ContactId; LeadId; Status | Populate either ContactId or LeadId, never both. |
| Products | Name; ProductCode; Family; Description; IsActive | None |
| Price Book Entries | Pricebook2Id; Product2Id; UnitPrice; IsActive; UseStandardPrice | Use the Standard Price Book ID. |
| Opportunities | Name; AccountId; StageName; CloseDate; Amount; CampaignId; Type; LeadSource; Description | Gross_Transaction_Amount__c; Tax_Amount__c; Platform_Payment_Fees__c; Refunds_Chargebacks__c; Shipping_Collected__c; Shipping_Cost__c; Revenue_Channel__c; Order_Source__c; Fulfillment_Status__c; Purchase_Type__c; External_Order_Key__c |
| Opportunity Contact Roles | OpportunityId; ContactId; Role; IsPrimary | One primary Contact for each fan purchase where practical. |
| Opportunity Products | OpportunityId; PricebookEntryId; Quantity; UnitPrice; ServiceDate; Description | Quantity and UnitPrice determine the line total. |
| Cases | ContactId; AccountId; Subject; Description; Status; Origin; Priority; Type; Reason; SuppliedName; SuppliedEmail | Relevant_Transaction__c; Next_Action__c; Next_Action_Due_Date__c; External_Case_Key__c |
| Tasks | WhoId; WhatId; Subject; Status; Priority; ActivityDate; Description; OwnerId | WhoId is a Lead or Contact; WhatId is the related Campaign, Opportunity, Case, or other supported record. |

## Custom field definitions

### Lead

| API name | Type | Rule |
|---|---|---|
| Acquisition_Channel__c | Picklist | Use controlled values |
| Consent_Status__c | Checkbox | Default FALSE |
| Consent_Date__c | Date | Required when Consent_Status__c = TRUE |
| Consent_Source__c | Picklist | Required when Consent_Status__c = TRUE |
| Home_Market__c | Picklist | Optional |
| Preferred_Channel__c | Picklist | Optional; not proof of consent |
| Interest_Area__c | Picklist | Optional |
| Source_Record_Key__c | Text(255), External ID, Unique | Use system-and-record composite key |

### Contact

| API name | Type | Rule |
|---|---|---|
| Fan_Tier__c | Picklist | Default Listener after conversion |
| Lifetime_Direct_Revenue__c | Currency(16,2) | System-maintained; default 0 |
| First_Purchase_Date__c | Date | System-maintained |
| Last_Purchase_Date__c | Date | System-maintained |
| Last_Engagement_Date__c | Date | System-maintained where practical |
| Lapsed_Fan_Flag__c | Checkbox | System-maintained; default FALSE |
| True_Fan_Score__c | Number(3,0) | 0-100 |
| Preferred_Channel__c | Picklist | Not proof of consent |
| Consent_Status__c | Checkbox | Default FALSE |
| Consent_Date__c | Date | Required when consent is TRUE |
| Consent_Source__c | Picklist | Required when consent is TRUE |
| Original_Lead_Source__c | Picklist | Preserve LeadSource at conversion |
| Acquisition_Channel__c | Picklist | Map from Lead at conversion |
| Home_Market__c | Picklist | Map from Lead at conversion |
| Favorite_Product_Era__c | Picklist | Optional |
| Favorite_Product_Area__c | Picklist | Map Interest_Area__c where applicable |
| Current_Membership_Tier__c | Picklist | Optional |
| Membership_Status__c | Picklist | Optional |
| Membership_Renewal_Date__c | Date | Required for an active scheduled renewal |
| VIP_Eligible__c | Checkbox | Default FALSE |
| Source_Record_Key__c | Text(255), External ID, Unique | Use system-and-record composite key |

### Campaign

| API name | Type | Rule |
|---|---|---|
| Market__c | Picklist | Use Home Market values |
| Goal__c | Text(255) | One measurable operational objective |
| Primary_Offer__c | Lookup(Product2) | Optional |
| Direct_Revenue_Target__c | Currency(16,2) | Optional |
| Actual_Direct_Revenue__c | Currency(16,2) | Flow/report-maintained where used |
| Source_Record_Key__c | Text(255), External ID, Unique | Optional external campaign key |

### Opportunity

| API name | Type | Rule |
|---|---|---|
| Gross_Transaction_Amount__c | Currency(16,2) | Includes tax and shipping charged |
| Tax_Amount__c | Currency(16,2) | Default 0 |
| Platform_Payment_Fees__c | Currency(16,2) | Default 0 |
| Refunds_Chargebacks__c | Currency(16,2) | Default 0; positive input is subtracted |
| Shipping_Collected__c | Currency(16,2) | Default 0 |
| Shipping_Cost__c | Currency(16,2) | Default 0 |
| Revenue_Channel__c | Picklist | Required for qualifying direct revenue |
| Order_Source__c | Picklist | Preserve originating system |
| Fulfillment_Status__c | Picklist | Default Not Required where appropriate |
| Purchase_Type__c | Picklist | Use controlled values |
| External_Order_Key__c | Text(255), External ID, Unique | Prevent repeated order imports |

Set Amount to:

Amount = Gross Transaction Amount - Tax Amount - Platform / Payment Fees - Refunds / Chargebacks - MIN(Shipping Collected, Shipping Cost)

### Case

| API name | Type | Rule |
|---|---|---|
| Relevant_Transaction__c | Lookup(Opportunity) | Optional |
| Next_Action__c | Text(255) | Required while unresolved when action is known |
| Next_Action_Due_Date__c | Date | Optional |
| External_Case_Key__c | Text(255), External ID, Unique | Optional source-system key |

## Lead conversion mapping

| Lead | Contact |
|---|---|
| LeadSource | Original_Lead_Source__c |
| Acquisition_Channel__c | Acquisition_Channel__c |
| Consent_Status__c | Consent_Status__c |
| Consent_Date__c | Consent_Date__c |
| Consent_Source__c | Consent_Source__c |
| Home_Market__c | Home_Market__c |
| Preferred_Channel__c | Preferred_Channel__c |
| Interest_Area__c | Favorite_Product_Area__c |
| Source_Record_Key__c | Source_Record_Key__c |

Convert only after the first qualifying sale, select the existing **None** Account, preserve consent without upgrading it, and create or relate the qualifying purchase.
