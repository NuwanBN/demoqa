---
feature: bookapi
status: approved
version: 1
layer: api
---

# Intent

A client can exercise the full DemoQA Book Store API ([Swagger](https://demoqa.com/swagger)): Account user lifecycle and BookStore catalog/collection operations, including happy-path and key negative responses.

**Persona**
Book Store API client — user provisioned per run via POST /Account/v1/User, bearer token via POST /Account/v1/GenerateToken; no static credentials stored

# Feature

- [FA-04-1] Account API supports the full user lifecycle
- [FA-04-2] Token and authorization endpoints issue and verify credentials
- [FA-04-3] BookStore catalog can be listed and queried by ISBN
- [FA-04-4] Book collection supports add, replace and delete
- [FA-04-5] Negative cases return the documented error payloads

# Acceptance Criteria

- [ ] AC-1: Creating a user returns 201 with user id
- [ ] AC-2: Generating a token returns Success and a token
- [ ] AC-3: Authorized returns true after a token is generated
- [ ] AC-4: Login returns userId and token
- [ ] AC-5: Getting a user by id returns the username
- [ ] AC-6: Duplicate user create returns User exists
- [ ] AC-7: Invalid credentials fail token generation
- [ ] AC-8: Book catalog lists known books
- [ ] AC-9: Getting a book by ISBN returns the title
- [ ] AC-10: Adding a book to the collection succeeds
- [ ] AC-11: Replacing a collection book succeeds
- [ ] AC-12: Deleting one book from the collection succeeds
- [ ] AC-13: Deleting all books from the collection succeeds
- [ ] AC-14: Deleting a user returns 204
- [ ] AC-15: Getting a deleted user returns User not found

# Scenarios

## Create User [AC-1]

- Client posts a new username and password
- API returns 201 with user id and empty books list

## Generate Token [AC-2]

- Client posts valid credentials
- API returns 200 with a token and Success status

## Authorized After Token [AC-3]

- Client generates a token then checks authorization
- API returns 200 with true

## Login [AC-4]

- Client creates a user, generates a token, then posts login credentials
- API returns 200 with userId, username, and token

## Get User [AC-5]

- Client creates a user, generates a token, and gets the user by id
- API returns 200 with matching username and books list

## Duplicate User Rejected [AC-6]

- Client creates a user then posts the same username again
- API returns 406 with User exists

## Invalid Token Credentials [AC-7]

- Client posts a known user with a wrong password to GenerateToken
- API returns 200 with Failed status and null token

## List Books [AC-8]

- Client gets the book catalog
- API returns 200 with at least one book including a known ISBN

## Get Book By Isbn [AC-9]

- Client gets a book by ISBN
- API returns 200 with matching title

## Add Books To Collection [AC-10]

- Authenticated client adds a book ISBN to the user collection
- API returns 201 and the user profile lists the book

## Replace Book In Collection [AC-11]

- Authenticated client replaces a collection book with another ISBN
- API returns 200 and the user profile lists the replacement book

## Delete Book From Collection [AC-12]

- Authenticated client deletes one book from the collection
- API returns 204 and the user profile no longer lists that book

## Delete All Books From Collection [AC-13]

- Authenticated client deletes all books from the collection
- API returns 204 and the user profile books list is empty

## Delete User [AC-14]

- Authenticated client deletes the user account
- API returns 204

## Get User After Delete [AC-15]

- Client deletes a user then gets that user by id
- API returns 401 with User not found

# Out of Scope

- UI flows on /login, /profile, /books
- Swagger UI page automation
