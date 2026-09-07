---
feature: selectmenu
status: approved
version: 1
layer: ui
---

# Intent

A user can open Select Menu and choose values from the value, one, old-style, and multi-select controls.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-25-1] React-select value and title controls accept a choice
- [FA-25-2] Native select and multiselect controls accept choices

# Acceptance Criteria

- [ ] AC-1: Selecting a group option updates Select Value
- [ ] AC-2: Selecting a title updates Select One
- [ ] AC-3: Selecting a color updates the old-style select
- [ ] AC-4: Selecting colors updates the multiselect drop down

# Scenarios

## Select Value [AC-1]

- User opens Select Menu
- User picks Group 1, option 1 from Select Value
- Select Value shows Group 1, option 1

## Select One [AC-2]

- User opens Select Menu
- User picks Dr. from Select One
- Select One shows Dr.

## Old Style Select [AC-3]

- User opens Select Menu
- User picks Purple from the old-style select
- The old-style select value is Purple

## Multi Select Drop Down [AC-4]

- User opens Select Menu
- User picks Green and Blue from the multiselect drop down
- Green and Blue are selected

# Out of Scope

- Other Widgets
- Standard multi select cars list
