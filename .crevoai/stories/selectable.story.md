---
feature: selectable
status: approved
version: 1
layer: ui
---

# Intent

A user can open Selectable and select items in the List and Grid views.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-24-1] List items can be selected
- [FA-24-2] Grid items can be selected

# Acceptance Criteria

- [ ] AC-1: Selecting list items marks them active
- [ ] AC-2: Selecting grid items marks them active

# Scenarios

## List Select [AC-1]

- User opens Selectable
- User selects Cras justo odio and Dapibus ac facilisis in
- Both list items are active

## Grid Select [AC-2]

- User opens Selectable
- User opens the Grid tab
- User selects One and Two
- Both grid items are active

# Out of Scope

- Other Interactions
