# New Fan Intake

## Purpose

Capture or import a fan with controlled identity, source, consent, ownership, and duplicate review before the record becomes a trusted fan profile.

## Process

```mermaid
flowchart LR
  A[Manual/admin entry] --> C[MHD - Lead - Intake Screen Flow]
  W[Web form] --> B[Web-to-Lead or approved integration]
  I[CSV/API import] --> V[Validated import process]
  C --> D[Validate, normalize, and review duplicate candidates]
  D --> L[Create Lead]
  B --> L
  V --> L
  L --> E[Record-triggered consent validation, source normalization, ownership, and duplicate controls]
  E --> F{Possible duplicate?}
  F -- No --> G[Continue with created Lead]
  F -- Yes --> H[Show matching records and comparison]
  H --> I{Decision}
  I -- Existing person --> J[Use/update existing record]
  I -- Different person --> G
  I -- Uncertain --> K[Keep save and flag for later review]
  G --> Q{First qualifying sale complete?}
  K --> Q
  Q -- No --> M[Keep New/Working/Unqualified Lead]
  Q -- Yes --> N[Set Qualified; convert under None Account]
  J --> O[Fan profile ready]
  N --> O
```

## Desktop Screen Flow

```mermaid
flowchart TB
  H[New Fan Intake<br/>Step indicator - Cancel]
  H --> I[1 Identity<br/>First Name - Last Name* - Email* - Home Market]
  I --> S[2 Source<br/>Lead Source* - Campaign]
  S --> C[3 Consent<br/>Consent Status - conditional Consent Date/Source - Preferred Channel]
  C --> D[4 Duplicate Review<br/>matches - signals - acknowledgement - action]
  D --> R[5 Result<br/>Lead/Contact link - owner - status - next action - errors]
```

## Rules

- Company is auto-populated with the MHD placeholder; do not ask the fan.
- Lead lifecycle: `New`, `Working`, `Qualified`, `Unqualified`.
- If Consent Status is true, Consent Date and Consent Source are required; otherwise they may be blank.
- Existing email, purchase, attendance, or import never implies affirmative consent.
- Duplicate warnings allow explicit continuation; no silent creation, automatic block, or merge.
- Standard `LeadSource` is the sole acquisition-source field; do not add `Acquisition_Channel__c`.
- The Screen Flow is user initiated. Web and import paths use the same governed fields and duplicate coverage without entering an interactive screen.
- For manual entry, duplicate review occurs before the Screen Flow creates the Lead. Web/import duplicate alerts and any noninteractive rejections occur after record submission through record-triggered rules and the exception/review queue; those channels never display the Screen Flow comparison screen.
- Shared fault handling shows an actionable message, creates an owned exception Task where action is required, and never claims success after failure.
- Convert only after the first qualifying sale; create or relate the qualifying Opportunity and its primary purchasing-fan Opportunity Contact Role.

## Acceptance checks

- Clean, duplicate, Lead-to-Contact, conversion, consent, import, and fault scenarios match the runbook UAT cases.
- Lead Source, consent, owner, and campaign context survive conversion.
