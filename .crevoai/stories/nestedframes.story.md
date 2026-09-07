---
feature: nestedframes
status: approved
version: 1
layer: ui
---

# Intent

A user can open Nested Frames and read text from the parent frame and the child iframe inside it.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-19-1] Parent frame content is readable
- [FA-19-2] Nested child iframe content is readable

# Acceptance Criteria

- [ ] AC-1: Parent frame shows Parent frame text
- [ ] AC-2: Child iframe shows Child Iframe text

# Scenarios

## Parent Frame [AC-1]

- User opens Nested Frames
- The parent frame body contains Parent frame

## Child Frame [AC-2]

- User opens Nested Frames
- The child iframe inside the parent contains Child Iframe

# Out of Scope

- Other Alerts, Frame & Windows widgets
