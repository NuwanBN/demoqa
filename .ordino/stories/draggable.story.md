---
feature: draggable
status: approved
version: 1
layer: ui
---

# Intent

A user can open Draggable and move boxes on Simple, Axis Restricted, Container Restricted, and Cursor Style tabs.

# Acceptance Criteria

- [ ] AC-1: Simple drag moves the box on both axes
- [ ] AC-2: Axis restricted boxes move only on their allowed axis
- [ ] AC-3: Container restricted box stays inside its wrapper
- [ ] AC-4: Cursor style box can be dragged

# Scenarios

## Simple Drag [AC-1]

- User opens Draggable
- User drags the box
- The box moves on both X and Y

## Axis Restricted Drag [AC-2]

- User opens the Axis Restricted tab
- User drags Only X and Only Y
- Only X moves horizontally and Only Y moves vertically

## Container Restricted Drag [AC-3]

- User opens the Container Restricted tab
- User drags the contained box
- The box moves and stays inside the wrapper

## Cursor Style Drag [AC-4]

- User opens the Cursor Style tab
- User drags the center cursor box
- The box moves from its start position

# Out of Scope

- Other Interactions
