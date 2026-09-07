---
feature: practiceform
status: approved
version: 1
layer: ui
---

# Intent

A user can open the Practice Form, fill required and optional fields, submit, and see the submitted values in the confirmation modal.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-20-1] Practice form submits and echoes values in the confirmation modal

# Acceptance Criteria

- [ ] AC-1: User can submit the practice form and see submitted values in the modal

# Scenarios

## Happy Path Submit [AC-1]

- User opens the Practice Form page
- User fills name, email, gender, mobile, hobbies, picture, address, state, and city
- User submits the form
- The confirmation modal shows the submitted values

# Out of Scope

- Date of Birth calendar edge cases
- Subjects autocomplete variants
- Other form widgets
