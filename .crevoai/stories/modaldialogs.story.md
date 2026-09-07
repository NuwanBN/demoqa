---
feature: modaldialogs
status: approved
version: 1
layer: ui
---

# Intent

A user can open Modal Dialogs, show the small and large modals, verify their content, and close them.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-18-1] Small modal opens with its title and body
- [FA-18-2] Large modal opens with its title and body

# Acceptance Criteria

- [ ] AC-1: Small modal opens with expected title and body
- [ ] AC-2: Large modal opens with expected title and body

# Scenarios

## Small Modal [AC-1]

- User opens Modal Dialogs
- User clicks Small modal
- The small modal title and body are shown, then closed

## Large Modal [AC-2]

- User opens Modal Dialogs
- User clicks Large modal
- The large modal title and body are shown, then closed

# Out of Scope

- Other Alerts, Frame & Windows widgets
