# Opportunity Entry

## Purpose

Record a direct offer purchase with standard Opportunity, Product, Price Book, and Opportunity Product data, then refresh the fan profile without double counting.

## Process

```mermaid
flowchart LR
  A[Fan purchases direct offer] --> B[Create Opportunity]
  B --> C[Use None Account and add purchasing Contact as primary Opportunity Contact Role]
  C --> D[Add active Opportunity Products from Standard Price Book]
  D --> E[Set source, campaign, fulfillment, and Closed Won]
  E --> F[Purchase Rollup Update Flow]
  F --> G[Recalculate lifetime revenue and first/last purchase dates]
  G --> H[Update repeat-buyer indicators]
  H --> I{Membership or VIP purchase?}
  I -- Yes --> J[Update membership/VIP status and renewal/fulfillment]
  I -- No --> K[No supporter-program update]
  J --> L[Refresh revenue reports and fan-tier evaluation]
  K --> L
```

## Desktop wireframe

```mermaid
flowchart TB
  H[Opportunity header<br/>Primary purchasing fan - Stage - Net Direct Revenue Amount - Close Date - Revenue Channel - Order Source - Campaign]
  H --> P[Product line editor<br/>Product - Category - Quantity - Sales Price - Total]
  H --> F[Revenue and fulfillment<br/>Gross - Tax - Fees - Refunds/Chargebacks - Shipping Collected/Cost<br/>Fulfillment Status - Purchase Type - external order reference]
  P --> S[Fan snapshot<br/>Tier - Lifetime Revenue - First/Last Purchase - Membership]
  F --> V[Validation<br/>Missing required data - net equation/reconciliation - primary OCR - possible duplicate transaction]
  S --> A[Actions: Save - Save and New - Correct/Cancel]
  V --> A
```

## Rules

- Stages stay minimal: `Open`, `Closed Won`, `Closed Lost`.
- Salesforce stores reporting and fulfillment context, never payment-card data.
- Rollups recalculate from qualifying transactions so edits, cancellations, and Flow retries are idempotent.
- Membership and VIP products use the same product/revenue model; no custom transaction object is introduced.
- Opportunity Product totals preserve gross item detail; they are not required to equal net `Opportunity.Amount`.
- Direct Revenue by Product allocates net Amount proportionally across qualifying product lines, with zero-line exceptions left unattributed for review.
- Every ordinary fan purchase uses the **None** Account and one primary Opportunity Contact Role identifying the purchasing Contact.

## Acceptance checks

- First, repeat, multiline, membership/VIP, corrected, canceled, and retry cases reconcile.
- Opportunity Amount agrees with the governed net-revenue equation; product-line allocation reconciles back to Amount.
- The purchasing fan is traceable through one primary Opportunity Contact Role.
- Contact revenue and purchase dates can be traced to source Opportunities.
