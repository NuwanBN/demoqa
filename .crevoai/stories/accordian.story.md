---
feature: accordian
status: approved
version: 1
layer: ui
---

# Intent

A user can open Accordian and expand sections to read their content.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-01-1] Default section renders expanded with its content
- [FA-01-2] Collapsed sections expand on demand

# Acceptance Criteria

- [ ] AC-1: First section is open with Lorem Ipsum intro content
- [ ] AC-2: Second section expands and shows origin content
- [ ] AC-3: Third section expands and shows usage content

# Scenarios

## First Section Open [AC-1]

- User opens Accordian
- What is Lorem Ipsum? content is visible

## Expand Second Section [AC-2]

- User opens Accordian
- User expands Where does it come from?
- Origin content is visible

## Expand Third Section [AC-3]

- User opens Accordian
- User expands Why do we use it?
- Usage content is visible

# Out of Scope

- Other Widgets
