---
feature: browserwindows
status: approved
version: 1
layer: ui
---

# Intent

A user can open Browser Windows and use New Tab, New Window, and New Window Message, verifying each opened page.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-07-1] New tab and new window open the sample page
- [FA-07-2] New window message opens the message content

# Acceptance Criteria

- [ ] AC-1: New Tab opens sample page content
- [ ] AC-2: New Window opens sample page content
- [ ] AC-3: New Window Message opens the message content

# Scenarios

## New Tab [AC-1]

- User opens Browser Windows
- User clicks New Tab
- A new tab opens with sample page text

## New Window [AC-2]

- User opens Browser Windows
- User clicks New Window
- A new window opens with sample page text

## New Window Message [AC-3]

- User opens Browser Windows
- User clicks New Window Message
- A new window opens with the knowledge message

# Out of Scope

- Other Alerts, Frame & Windows widgets
