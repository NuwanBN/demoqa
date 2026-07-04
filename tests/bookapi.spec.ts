// spec: .ordino/stories/bookapi.story.md
import { test } from '@config/page.config';

test.describe('DemoQA - Bookapi', () => {

  // scenario: Create User
  test('[AC-1] should create a user', async ({ bookapiPage }) => {
    await bookapiPage.step_create_user();
    await bookapiPage.verify_user_created();
  });

  // scenario: Generate Token
  test('[AC-2] should generate a token', async ({ bookapiPage }) => {
    await bookapiPage.step_create_user();
    await bookapiPage.step_generate_token();
    await bookapiPage.verify_token_generated();
  });

  // scenario: Authorized After Token
  test('[AC-3] should authorize after token', async ({ bookapiPage }) => {
    await bookapiPage.step_create_user();
    await bookapiPage.step_generate_token();
    await bookapiPage.step_authorized();
    await bookapiPage.verify_authorized();
  });

  // scenario: Login
  test('[AC-4] should login via api', async ({ bookapiPage }) => {
    await bookapiPage.step_create_user();
    await bookapiPage.step_generate_token();
    await bookapiPage.step_login();
    await bookapiPage.verify_login();
  });

  // scenario: Get User
  test('[AC-5] should get user by id', async ({ bookapiPage }) => {
    await bookapiPage.step_create_user();
    await bookapiPage.step_generate_token();
    await bookapiPage.step_get_user();
    await bookapiPage.verify_user_fetched();
  });

  // scenario: Duplicate User Rejected
  test('[AC-6] should reject duplicate user', async ({ bookapiPage }) => {
    await bookapiPage.step_create_user();
    await bookapiPage.step_create_user_duplicate();
    await bookapiPage.verify_user_exists_error();
  });

  // scenario: Invalid Token Credentials
  test('[AC-7] should fail token for bad password', async ({ bookapiPage }) => {
    await bookapiPage.step_create_user();
    await bookapiPage.step_generate_token_invalid();
    await bookapiPage.verify_token_failed();
  });

  // scenario: List Books
  test('[AC-8] should list books in catalog', async ({ bookapiPage }) => {
    await bookapiPage.step_list_books();
    await bookapiPage.verify_books_listed();
  });

  // scenario: Get Book By Isbn
  test('[AC-9] should get book by isbn', async ({ bookapiPage }) => {
    await bookapiPage.step_get_book();
    await bookapiPage.verify_book_details();
  });

  // scenario: Add Books To Collection
  test('[AC-10] should add book to collection', async ({ bookapiPage }) => {
    await bookapiPage.step_create_user();
    await bookapiPage.step_generate_token();
    await bookapiPage.step_add_books();
    await bookapiPage.verify_books_added();
  });

  // scenario: Replace Book In Collection
  test('[AC-11] should replace book in collection', async ({ bookapiPage }) => {
    await bookapiPage.step_create_user();
    await bookapiPage.step_generate_token();
    await bookapiPage.step_add_books();
    await bookapiPage.step_replace_book();
    await bookapiPage.verify_book_replaced();
  });

  // scenario: Delete Book From Collection
  test('[AC-12] should delete book from collection', async ({ bookapiPage }) => {
    await bookapiPage.step_create_user();
    await bookapiPage.step_generate_token();
    await bookapiPage.step_add_books();
    await bookapiPage.step_replace_book();
    await bookapiPage.step_delete_book();
    await bookapiPage.verify_book_deleted();
    await bookapiPage.step_get_user();
    await bookapiPage.verify_collection_empty();
  });

  // scenario: Delete All Books From Collection
  test('[AC-13] should delete all books from collection', async ({ bookapiPage }) => {
    await bookapiPage.step_create_user();
    await bookapiPage.step_generate_token();
    await bookapiPage.step_add_books();
    await bookapiPage.step_delete_all_books();
    await bookapiPage.verify_all_books_deleted();
    await bookapiPage.step_get_user();
    await bookapiPage.verify_collection_empty();
  });

  // scenario: Delete User
  test('[AC-14] should delete user', async ({ bookapiPage }) => {
    await bookapiPage.step_create_user();
    await bookapiPage.step_generate_token();
    await bookapiPage.step_delete_user();
    await bookapiPage.verify_user_deleted();
  });

  // scenario: Get User After Delete
  test('[AC-15] should not find deleted user', async ({ bookapiPage }) => {
    await bookapiPage.step_create_user();
    await bookapiPage.step_generate_token();
    await bookapiPage.step_delete_user();
    await bookapiPage.step_get_user();
    await bookapiPage.verify_user_not_found();
  });

});
