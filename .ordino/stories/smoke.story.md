---
feature: smoke
status: approved
version: 1
generated: 2026-05-23
last_updated: 2026-05-23
layer: ui
source:
  - template
---

# Intent

Verifies the application is reachable at the configured base URL.

# Acceptance Criteria

- [ ] AC-1: Application is reachable at the configured base URL

# Scenarios

## Happy Path [AC-1]

- User opens the app at the base URL and receives a valid page response

# Out of Scope

- Authenticated flows
- Page content assertions
- Navigation

# Change Log

- 2026-05-23: created as scaffold smoke check (template)
