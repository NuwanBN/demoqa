---
feature: login
status: approved
version: 1
layer: hybrid
---

# Intent

A user can register a Book Store account (API, UI captcha blocked), log in, see their profile, log out, log in again, and see an error for invalid credentials. New User opens the register form, Back to Login returns to login, unauthenticated profile prompts login, Books Login opens the login page, and a logged-in user can delete their account from profile.

**Persona**
Book Store user — account provisioned per run via the Account API (POST /Account/v1/User); no static credentials stored

# Feature

- [FA-16-1] User can sign in and view their profile
- [FA-16-2] Sign out and sign in again restores the session
- [FA-16-3] Invalid credentials are rejected with an error
- [FA-16-4] Registration and login navigation entry points work
- [FA-16-5] User can delete their own account

# Acceptance Criteria

- [ ] AC-1: Creating a user and logging in shows the profile username
- [ ] AC-2: Logging out and logging in again restores the profile
- [ ] AC-3: Invalid credentials show an error message
- [ ] AC-4: New User opens the register form
- [ ] AC-5: Back to Login returns from register to login
- [ ] AC-6: Unauthenticated profile shows a not-logged-in message
- [ ] AC-7: Books Login opens the login page
- [ ] AC-8: Login page shows the Book Store welcome heading
- [ ] AC-9: Logged-in user can delete their account from profile

# Scenarios

## Create User And Login [AC-1]

- System creates a new Book Store user via API
- User opens Login and signs in with the new credentials
- Profile shows the username

## Logout And Login Again [AC-2]

- System creates a new Book Store user via API
- User logs in, logs out, and logs in again
- Profile shows the username

## Invalid Login [AC-3]

- User opens Login
- User submits invalid credentials
- An error message is shown

## Open Register Form [AC-4]

- User opens Login
- User clicks New User
- Register form fields are visible

## Back To Login [AC-5]

- User opens Login and clicks New User
- User clicks Back to Login
- Login page is shown

## Unauthenticated Profile [AC-6]

- User opens Profile while logged out
- A not-logged-in message is shown

## Books Login Entry [AC-7]

- User opens Book Store
- User clicks Login
- Login page is shown

## Login Welcome Heading [AC-8]

- User opens Login
- The Book Store login heading is visible

## Delete Account [AC-9]

- System creates a new Book Store user via API
- User logs in and opens profile
- User deletes the account and confirms
- Login with the deleted credentials fails

# Out of Scope

- Completing UI registration through reCAPTCHA
- Delete All Books
- Adding books to the collection
