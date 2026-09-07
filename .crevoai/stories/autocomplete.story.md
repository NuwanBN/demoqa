---
feature: autocomplete
status: approved
version: 1
layer: ui
---

# Intent

A user can open Auto Complete and select colors in the multiple and single color fields.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-03-1] Multi-value color field accepts several selections
- [FA-03-2] Single-value color field accepts one selection

# Acceptance Criteria

- [ ] AC-1: Multiple color field accepts more than one selected color
- [ ] AC-2: Single color field accepts a selected color

# Scenarios

## Multiple Colors [AC-1]

- User opens Auto Complete
- User types in the multiple field and selects Red and Green
- Red and Green both appear as selected values


## Single Color [AC-2]

- User opens Auto Complete
- User types in the single field and selects Blue
- Blue appears as the selected value

# Out of Scope

- Other Widgets
