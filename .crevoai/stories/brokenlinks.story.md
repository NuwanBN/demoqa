---
feature: brokenlinks
status: approved
version: 1
layer: ui
---

# Intent

A user can open Broken Links - Images and validate valid vs broken images and valid vs broken links.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-06-1] Valid and broken images are distinguishable
- [FA-06-2] Valid and broken links resolve to their HTTP status

# Acceptance Criteria

- [ ] AC-1: Valid image loads successfully
- [ ] AC-2: Broken image fails to load
- [ ] AC-3: Valid link opens the home page
- [ ] AC-4: Broken link returns an error status

# Scenarios

## Valid Image [AC-1]

- User opens the Broken Links - Images page
- The valid image loads successfully

## Broken Image [AC-2]

- User opens the Broken Links - Images page
- The broken image fails to load

## Valid Link [AC-3]

- User opens the Broken Links - Images page
- User opens the valid link and reaches the home page

## Broken Link [AC-4]

- User opens the Broken Links - Images page
- The broken link returns HTTP 500

# Out of Scope

- Other Elements widgets
