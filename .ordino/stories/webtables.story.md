---
feature: webtables
status: approved
version: 1
layer: ui
---

# Intent

A user can open Web Tables and add, edit, or delete a row, and search by name with the table reflecting each change.

# Acceptance Criteria

- [ ] AC-1: User can add a new record and see it in the table
- [ ] AC-2: User can edit an existing record and see updated values
- [ ] AC-3: User can delete a record and it is removed from the table
- [ ] AC-4: User can search by name and see only matching rows

# Scenarios

## Add Record [AC-1]

- User opens the Web Tables page
- User adds a new record with first name, last name, email, age, salary, and department
- The new record appears in the table

## Edit Record [AC-2]

- User opens the Web Tables page
- User edits an existing record
- The table shows the updated values

## Delete Record [AC-3]

- User opens the Web Tables page
- User deletes a record
- The record is removed from the table

## Search By Name [AC-4]

- User opens the Web Tables page
- User searches by a first name
- Matching rows are shown and non-matching rows are hidden

# Out of Scope

- Pagination and row-count controls
- Other Elements widgets

