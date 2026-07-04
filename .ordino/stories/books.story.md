---
feature: books
status: approved
version: 1
layer: hybrid
---

# Intent

A user can browse the Book Store, search books, open details, add a book to their collection after login, remove books from profile, and return to the store.

# Acceptance Criteria

- [ ] AC-1: Book Store lists books
- [ ] AC-2: Search filters the book list
- [ ] AC-3: Opening a book shows its details
- [ ] AC-4: Logged-in user can add a book to their collection
- [ ] AC-5: User can delete a book from their profile
- [ ] AC-6: User can delete all books from their profile
- [ ] AC-7: Go To Book Store returns to the catalog

# Scenarios

## Book List [AC-1]

- User opens Book Store
- At least one book title is visible

## Search Books [AC-2]

- User opens Book Store
- User searches for Git
- Only matching books are shown

## Book Details [AC-3]

- User opens Book Store
- User opens Git Pocket Guide
- Details show the book title

## Add To Collection [AC-4]

- System creates a user and user logs in
- User opens a book and adds it to the collection
- Profile lists the book

## Delete Book [AC-5]

- System creates a user, user logs in, and adds a book
- User deletes the book from profile
- Profile no longer lists the book

## Delete All Books [AC-6]

- System creates a user, user logs in, and adds a book
- User deletes all books from profile
- Profile has no books

## Go To Book Store [AC-7]

- System creates a user and user logs in
- User opens profile and clicks Go To Book Store
- Book Store catalog is shown

# Out of Scope

- UI registration through reCAPTCHA
- Delete Account
