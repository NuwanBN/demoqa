---
feature: progressbar
status: approved
version: 1
layer: ui
---

# Intent

A user can open Progress Bar, start progress, stop it, and confirm the value no longer increases.

# Acceptance Criteria

- [ ] AC-1: Start then Stop leaves progress paused between 0 and 100

# Scenarios

## Start And Stop Progress [AC-1]

- User opens Progress Bar
- User clicks Start and progress begins
- User clicks Stop
- Progress value stays the same and the button shows Start again

# Out of Scope

- Waiting for 100% Reset flow
- Other Widgets
