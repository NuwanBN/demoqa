---
feature: resizable
status: approved
version: 1
layer: ui
---

# Intent

A user can open Resizable and drag the resize handles to change box size.

# Acceptance Criteria

- [ ] AC-1: Dragging the restricted box handle increases its size
- [ ] AC-2: Dragging the unrestricted box handle increases its size

# Scenarios

## Restricted Box Resize [AC-1]

- User opens Resizable
- User drags the restricted box SE handle
- The restricted box is larger than its initial size

## Unrestricted Box Resize [AC-2]

- User opens Resizable
- User drags the unrestricted box SE handle
- The unrestricted box is larger than its initial size


# Out of Scope

- Other Interactions
