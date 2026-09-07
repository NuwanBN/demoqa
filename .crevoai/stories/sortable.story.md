---
feature: sortable
status: approved
version: 1
layer: ui
---

# Intent

A user can open Sortable and reorder items in the List and Grid views by dragging.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-28-1] List items can be reordered by dragging
- [FA-28-2] Grid items can be reordered by dragging

# Acceptance Criteria

- [ ] AC-1: Dragging a list item updates the list order
- [ ] AC-2: Dragging a grid item updates the grid order

# Scenarios

## List Reorder [AC-1]

- User opens Sortable
- User drags Six onto One in the list
- Six is the first list item

## Grid Reorder [AC-2]

- User opens Sortable
- User opens the Grid tab
- User drags One onto Two in the grid
- Two is first and One is second

# Out of Scope

- Other Interactions
