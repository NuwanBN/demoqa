---
feature: droppable
status: approved
version: 1
layer: ui
---

# Intent

A user can open Droppable and drag items onto drop targets across Simple, Accept, Prevent Propagation, and Revert tabs.

# Acceptance Criteria

- [ ] AC-1: Simple drag and drop marks the target Dropped
- [ ] AC-2: Acceptable item is accepted on the Accept tab
- [ ] AC-3: Not-greedy outer drop marks the target Dropped
- [ ] AC-4: Will-revert item drops then returns to start

# Scenarios

## Simple Drop [AC-1]

- User opens Droppable
- User drags the box onto the drop target
- The drop target shows Dropped!

## Accept Drop [AC-2]

- User opens the Accept tab
- User drops Acceptable onto the target
- The drop target shows Dropped!

## Prevent Propagation Drop [AC-3]

- User opens the Prevent Propagation tab
- User drops onto the not-greedy outer box
- The outer target shows Dropped!

## Revert Draggable [AC-4]

- User opens the Revert Draggable tab
- User drops Will Revert onto the target
- The target shows Dropped! and the item returns near its start

# Out of Scope

- Other Interactions
