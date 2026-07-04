---
feature: links
status: approved
version: 1
layer: ui
---

# Intent

A user can open the Links page, open a link in a new tab and verify the destination, and click API links that return backend status messages.

# Acceptance Criteria

- [ ] AC-1: User can open Home in a new tab and reach the home page
- [ ] AC-2: User can click Created and see backend status 201
- [ ] AC-3: User can click Not Found and see backend status 404

# Scenarios

## Open New Tab [AC-1]

- User opens the Links page
- User clicks Home to open a new tab
- The new tab loads the home page

## Backend Created Link [AC-2]

- User opens the Links page
- User clicks Created
- The page shows the backend response for status 201 Created

## Backend Not Found Link [AC-3]

- User opens the Links page
- User clicks Not Found
- The page shows the backend response for status 404 Not Found

# Out of Scope

- Every API status code variant
- Other Elements widgets
