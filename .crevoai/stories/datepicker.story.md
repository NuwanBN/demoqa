---
feature: datepicker
status: approved
version: 1
layer: ui
---

# Intent

A user can open Date Picker and set a date-only value and a date-and-time value.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-10-1] Date-only field accepts a chosen date
- [FA-10-2] Date-and-time field accepts a chosen date and time

# Acceptance Criteria

- [ ] AC-1: Select Date field accepts a chosen date
- [ ] AC-2: Date And Time field accepts a chosen date and time

# Scenarios

## Select Date [AC-1]

- User opens Date Picker
- User sets the Select Date field
- The field shows the chosen date

## Date And Time [AC-2]

- User opens Date Picker
- User sets the Date And Time field
- The field shows the chosen date and time

# Out of Scope

- Other Widgets
