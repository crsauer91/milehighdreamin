# Duplicate Management

Use Salesforce Duplicate Management before custom matching or automation. The framework allows saves and alerts where Salesforce supports that behavior, records candidates, and requires human review. It never automatically merges or deletes.

## Rule matrix

| Comparison | Default matching | Default action |
|---|---|---|
| Lead to Lead | Standard Lead Matching Rule | Allow and alert for interactive create/edit; report candidate |
| Contact to Contact | Standard Contact Matching Rule | Allow and alert for interactive create/edit; report candidate |
| Lead to Contact | Lead duplicate rule using the standard supported cross-object comparison | Allow and alert; review before conversion and associate the existing Contact when confirmed |
| Business Account to Business Account | Standard Account Matching Rule | Allow and alert; review manually |
| Shared **None** Account | Create once and reuse | Never create another ordinary-fan Account |

Salesforce documents that a duplicate rule may compare the same object or one other object, including Leads against Contacts: https://help.salesforce.com/s/articleView?id=sales.duplicate_detection_and_handling.htm&language=en_US.

## Configuration

1. Activate the Salesforce standard Account, Contact, and Lead matching rules needed by the org.
2. Configure separate duplicate rules for Lead-to-Lead, Contact-to-Contact, and Lead-to-Contact coverage.
3. Use alert text that tells the user to compare email, name, source, consent, and relationship history.
4. Use Allow + Alert for interactive create/edit where supported.
5. Enable reporting through Duplicate Record Sets or the closest standard duplicate visibility available.
6. Test Web-to-Lead, Screen Flow, manual entry, Lead conversion, Data Import Wizard, Data Loader, API, and Flow paths separately.

Imports and APIs can return DUPLICATES_DETECTED even when an interactive rule allows with an alert. Treat rejected rows as review items; do not disable duplicate rules or silently bypass the result.

## Review and resolution

1. Compare normalized email first, then name and other non-sensitive context.
2. Compare consent, source, Campaign, purchase, Case, Task, and membership history.
3. If they are different people, mark reviewed and keep both.
4. If they are the same person, choose the survivor with the strongest relationship and most complete history.
5. Never upgrade consent during a merge.
6. Use standard Contact merge where supported.
7. For Lead-to-Contact, update the reviewed Contact and close or convert the Lead according to the first-sale rule.
8. Verify related records and KPI totals after resolution.
9. Review the unresolved queue weekly.

## Escalation rule

Create a custom matching rule only after representative tests show that the standard rule misses material duplicates or produces an unmanageable false-positive rate. Document the tested equation and retain separate coverage for all three fan comparisons.
