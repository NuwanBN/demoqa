---
feature: frames
status: approved
version: 1
layer: ui
---

# Intent

A user can open Frames and read sample content from both iframes.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-14-1] Large iframe content is readable
- [FA-14-2] Small iframe content is readable

# Acceptance Criteria

- [ ] AC-1: Large frame shows sample page text
- [ ] AC-2: Small frame shows sample page text

# Scenarios

## Large Frame [AC-1]

- User opens the Frames page
- The large iframe contains the sample page heading

## Small Frame [AC-2]

- User opens the Frames page
- The small iframe contains the sample page heading

# Out of Scope

- Nested Frames
- Other Alerts, Frame & Windows widgets
