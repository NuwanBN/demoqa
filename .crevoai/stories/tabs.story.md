---
feature: tabs
status: approved
version: 1
layer: ui
---

# Intent

A user can open Tabs and switch between What, Origin, and Use to view each panel's content.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-29-1] Tab switching renders each panel's content
- [FA-29-2] Every tab panel is reachable from the tab strip

# Acceptance Criteria

- [ ] AC-1: What tab shows its content
- [ ] AC-2: Origin tab shows its content
- [ ] AC-3: Use tab shows its content

# Scenarios

## What Tab [AC-1]

- User opens Tabs
- What is selected and shows Lorem Ipsum intro content

## Origin Tab [AC-2]

- User opens Tabs
- User selects Origin
- Origin content is visible

## Use Tab [AC-3]

- User opens Tabs
- User selects Use
- Use content is visible

# Out of Scope

- Disabled More tab
- Other Widgets
