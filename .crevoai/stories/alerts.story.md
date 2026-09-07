---
feature: alerts
status: approved
version: 1
layer: ui
---

# Intent

A user can open Alerts and handle a simple alert, a delayed alert, a confirm dialog, and a prompt dialog.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-02-1] Simple and delayed alerts can be accepted
- [FA-02-2] Confirm and prompt dialogs return the user's response

# Acceptance Criteria

- [ ] AC-1: Simple alert can be accepted
- [ ] AC-2: Delayed alert can be accepted after it appears
- [ ] AC-3: Confirm dialog accept shows the selected result
- [ ] AC-4: Prompt dialog accept shows the entered text

# Scenarios

## Simple Alert [AC-1]

- User clicks the alert button and accepts the alert

## Delayed Alert [AC-2]

- User clicks the timer alert button and accepts the alert after it appears

## Confirm Alert [AC-3]

- User clicks the confirm button, accepts, and sees the confirmation result

## Prompt Alert [AC-4]

- User clicks the prompt button, enters text, accepts, and sees the prompt result

# Out of Scope

- Other Alerts, Frame & Windows widgets
