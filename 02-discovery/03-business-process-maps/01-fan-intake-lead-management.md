# Fan Intake and Lead Management

```mermaid
flowchart TD
    A([Fan intake begins]) --> B{Channel?}
    B -- Manual --> C[MHD - Lead - Intake Screen Flow]
    B -- Web --> D[Web-to-Lead or approved integration]
    B -- Import/API --> E[Validated import process]
    C --> F[Validate, normalize, review duplicates, then create Lead]
    D --> G[Create Lead with status New]
    E --> G
    F --> H[Lead created with status New]
    G --> H
    H --> I[Run record-triggered consent, source, ownership, and exception controls]
    I --> J[Check Lead-to-Lead and Lead-to-Contact matches]
    J --> K{Possible duplicate?}
    K -- Yes --> L[Alert and route to human duplicate review]
    K -- No --> M[Assign owner and create follow-up Task]
    L --> N{Keep separate or resolve?}
    N -- Keep separate --> M
    N -- Existing fan --> O[Update reviewed survivor without losing consent or history]
    M --> P[Review or enrich Lead as Working]
    P --> Q{First qualifying sale complete?}
    Q -- No --> R[Keep Working or set Unqualified with reason]
    Q -- Yes --> S[Set Qualified and convert]
    S --> T[Create or select Contact under approved Account model]
    T --> U[Map source, channel, consent, market, and preference fields]
    U --> V[Initialize fan profile and next action]
    O --> V
    V --> W([Contact is canonical fan record])
```
