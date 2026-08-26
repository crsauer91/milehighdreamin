# Consent, Channel, and Retention

This is a reusable operational default, not a universal legal conclusion. Each executor must check applicable jurisdictions, contracts, tax rules, and platform obligations before accepting or shortening a period.

## Consent decision

- Consent_Status__c defaults to FALSE.
- TRUE requires an affirmative action plus Consent_Date__c and Consent_Source__c.
- A purchase, attendance, import, email address, social follow, or record existence never creates consent.
- Checkout consent is valid only when the fan separately and affirmatively opted in.
- Preferred_Channel__c records preference, not legal permission.
- Withdrawal sets Consent_Status__c to FALSE immediately, preserves minimal historical evidence, and does not automatically delete financial or service records.
- Enable field history for Consent Status, Date, and Source on Lead and Contact. History must capture old/new value, actor/process, and timestamp; do not clear the prior Date or Source merely because current Status becomes FALSE.
- Standard field history is the near-term evidence layer. When the approved evidence period exceeds the org's available history retention, export the minimum consent-event evidence to an approved secured archive before expiry. A custom consent object or platform requires a separate proven need and approval.
- Marketing audiences require affirmative consent and must exclude applicable standard opt-out flags.

## Channel decision

| Channel | Eligible when | Salesforce control |
|---|---|---|
| Email | Consent is TRUE, Email exists, and Email Opt Out is FALSE | Consent_Status__c plus standard HasOptedOutOfEmail |
| Phone call | A documented permitted purpose exists and Do Not Call is FALSE | Standard DoNotCall plus consent record where marketing consent is required |
| SMS/Text | Channel-specific affirmative evidence exists and no opt-out applies | Do not automate from the general consent checkbox alone; add channel-specific evidence only when SMS is implemented |
| Social | The interaction is permitted by the platform and purpose | Preferred Channel may guide a manual Task; do not infer reusable marketing consent |
| In Person | The interaction is appropriate to the event or relationship | Record consent separately if future direct marketing is requested |
| No Preference | Use only an otherwise permitted channel | Does not override an opt-out |

When a connected email or messaging platform is the delivery system, Salesforce remains the relationship and consent view; the delivery platform's suppression state must be reconciled before sends.

## Framework retention schedule

| Record/data | Default period | End-of-period action |
|---|---|---|
| Non-consented Leads with no purchase or meaningful activity | 12 months after last activity | Delete or anonymize after duplicate and hold review |
| Consented Leads not converted | 24 months after last meaningful activity | Reconfirm need; suppress or delete if no continuing purpose |
| Contacts with no transaction, open service need, or active consent | 36 months after last meaningful activity | Minimize, anonymize, or delete |
| Contact identity tied to retained financial records | Same period as the related financial record | Minimize unrelated profile and marketing fields |
| Consent evidence | Active relationship plus 3 years after withdrawal or last reliance | Retain only the minimum evidence needed to prove status |
| Suppression evidence | While needed to prevent unwanted re-enrollment | Restrict access and store the minimum identifier |
| Opportunities and Opportunity Products | 7 years after the end of the relevant tax year as a conservative framework default | Validate the client's applicable tax/contract period, then delete or anonymize nonessential PII |
| Campaign Members | 3 years after Campaign end | Aggregate results where useful; delete stale membership detail unless another purpose applies |
| Closed Cases | 3 years after closure | Delete or anonymize; align to a longer related transaction/legal hold when required |
| Completed Tasks/Events | 2 years after completion | Delete unless needed for an active relationship, dispute, or retained Case |
| Import staging files and exports | 30 days after reconciliation | Securely delete; keep counts and non-PII control evidence |
| Temporary migration backups | 90 days after validated import/deployment | Securely delete unless an approved recovery need remains |
| Privacy request log | 3 years after closure | Retain minimum request, verification, action, exception, and completion evidence |
| Salesforce Recycle Bin | Platform default recovery window | Validate deletion before the recovery window expires or the bin is emptied |

The IRS explains that business records must be kept as long as needed for the applicable tax limitation period, which varies by circumstance: https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records. Seven years here is a conservative framework default, not a statement that every transaction legally requires seven years.

Salesforce documents a default 15-day Recycle Bin recovery period, with a support-enabled 30-day option in eligible editions: https://help.salesforce.com/s/articleView?id=000232493&language=en_US&type=1. Do not treat the Recycle Bin as the retention archive.

## Request procedure

1. Record request date, scope, source, and minimal verification evidence.
2. Stop marketing immediately for withdrawal or suppression.
3. Search Salesforce, connected processors, exports, staging files, and documented backups.
4. Identify holds and the reason for retained categories.
5. Correct, export, suppress, delete, or anonymize using the least-destructive supported method.
6. Validate related records before emptying the Recycle Bin.
7. notify documented processors where required.
8. Record completion, exceptions, and review date.
9. Review the schedule annually and stale data quarterly.

Never hard-delete broadly, merge as a substitute for deletion, or erase financial/support history without a retention review.
