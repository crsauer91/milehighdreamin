# Security and Access Checklist

Complete with named owners and evidence in the secured implementation workspace.

- [ ] MFA is enabled and tested for every interactive user.
- [ ] Profiles remain minimal; permission sets grant job-specific access.
- [ ] Object, field, record, report, dashboard, Flow, Duplicate Management, import, and setup access follow least privilege.
- [ ] Fan Contacts under **None** do not become broadly visible through an unintended sharing rule.
- [ ] Queues and ownership exist for Leads, Cases, duplicate review, and actionable exceptions.
- [ ] Consent, contact details, membership/VIP status, Cases, Tasks, and revenue fields are limited to approved roles.
- [ ] Payment-card, credential, secret, and unnecessary sensitive data are excluded.
- [ ] External systems, integration users, scopes, credential owners, rotation, and revocation are documented outside this repository.
- [ ] Import/export permissions and report subscriptions are restricted and reviewed.
- [ ] Field history, audit evidence, retention, deletion/anonymization, suppression, and legal/operational holds follow approved policy.
- [ ] Test users prove allowed and denied scenarios; no admin-only test is accepted as end-user proof.
- [ ] Deployment, support, and break-glass access have owners and review dates.

## Minimum role tests

Test artist/manager, intake/import operator, service user, reporting viewer, and administrator as applicable. Verify create/read/update/delete, field visibility, record sharing, queue work, report drill-down, Flow execution, duplicate review, and access denial for sensitive or setup functions.

Do not store usernames, credentials, screenshots containing client data, permission exports, or completed access evidence in this public framework.
