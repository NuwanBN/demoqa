---
feature: textbox
status: approved
version: 1
layer: ui
---

# Intent

A user can open Elements → Text Box, fill Full Name, Email, Current Address, and Permanent Address, submit the form, and see the submitted values confirmed on the page.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-30-1] Text Box submits and echoes the entered values

# Acceptance Criteria

- [ ] AC-1: User can submit Full Name, Email, Current Address, and Permanent Address and see them in the output panel

# Scenarios

## Happy Path [AC-1]

- User opens the Text Box page
- User fills Full Name, Email, Current Address, and Permanent Address
- User submits the form
- Submitted values are displayed in the output panel

# Out of Scope

- Invalid email validation
- Empty-field edge cases
- Other Elements widgets
