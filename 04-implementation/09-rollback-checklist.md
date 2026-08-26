# Rollback Checklist

Define triggers, decision authority, target recovery point, data consequences, and maximum acceptable outage before deployment.

## Triggers

Consider rollback for consent corruption, unintended access, duplicate proliferation, financial misstatement, broken conversion/OCR relationships, non-idempotent automation, material data loss, or failed critical smoke tests.

## Actions

- [ ] Stop the deployment/load and pause affected automation, imports, integrations, and scheduled paths.
- [ ] Preserve logs, result files, IDs, timestamps, versions, and control totals in the secured workspace.
- [ ] Notify the approved decision owner and assign implementation defects in the external issue tracker.
- [ ] Revert configuration using the approved prior version or deployment mechanism.
- [ ] Reverse data with explicit successful-record IDs or restore from the approved source; never use an unbounded delete.
- [ ] Recalculate/reconcile affected revenue, OCRs, tiers, lapse flags, history/snapshots, Campaigns, Tasks, and Cases.
- [ ] Restore automation in dependency order only after root cause and idempotent replay are proven.
- [ ] Re-run the critical regression suite, access tests, channel tests, and source/financial reconciliation.
- [ ] Record the outcome, residual risk, follow-up owner, and new release decision.

Operational follow-up remains in Salesforce Tasks/Cases only when a user must act on a Salesforce record. Configuration, code, test, or deployment defects remain in the external issue tracker.

Do not store backups, exports, credentials, client identifiers, completed evidence, or org-specific recovery scripts in this public repository.
