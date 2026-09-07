---
feature: tooltips
status: approved
version: 1
layer: ui
---

# Intent

A user can open Tool Tips and hover controls to see the matching tooltip messages.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-31-1] Button and text field hover produce tooltips
- [FA-31-2] Inline link hover produces a tooltip

# Acceptance Criteria

- [ ] AC-1: Hovering the button shows its tooltip
- [ ] AC-2: Hovering the text field shows its tooltip
- [ ] AC-3: Hovering the Contrary link shows its tooltip

# Scenarios

## Button Tooltip [AC-1]

- User opens Tool Tips
- User hovers the button
- Tooltip says You hovered over the Button

## Text Field Tooltip [AC-2]

- User opens Tool Tips
- User hovers the text field
- Tooltip says You hovered over the text field

## Contrary Link Tooltip [AC-3]

- User opens Tool Tips
- User hovers the Contrary link
- Tooltip says You hovered over the Contrary

# Out of Scope

- Other Widgets
