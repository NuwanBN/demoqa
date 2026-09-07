// spec: .crevoai/stories/books.story.md
import { test } from '@config/page.config';
import { booksExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Books', () => {


  // scenario: Book List
  test('[AC-1] should list books in the store', async ({ booksPage }) => {
    await booksPage.step_navigate();
    await booksPage.verify_books_listed();
  });

  // scenario: Search Books
  test('[AC-2] should filter books by search', async ({ booksPage }) => {
    await booksPage.step_navigate();
    await booksPage.step_search();
    await booksPage.verify_search_results();
  });

  // scenario: Book Details
  test('[AC-3] should open book details', async ({ booksPage }) => {
    await booksPage.step_navigate();
    await booksPage.step_open_book();
    await booksPage.verify_book_details();
  });

  // scenario: Add To Collection
  test('[AC-4] should add a book to the collection', async ({ booksPage }) => {
    await booksPage.step_create_user();
    await booksPage.step_login();
    await booksPage.step_navigate();
    await booksPage.step_open_book();
    await booksPage.step_add_to_collection();
    await booksPage.step_open_profile();
    await booksPage.verify_book_in_profile();
  });

  // scenario: Delete Book
  test('[AC-5] should delete a book from profile', async ({ booksPage }) => {
    await booksPage.step_create_user();
    await booksPage.step_login();
    await booksPage.step_navigate();
    await booksPage.step_open_book();
    await booksPage.step_add_to_collection();
    await booksPage.step_open_profile();
    await booksPage.step_delete_book();
    await booksPage.verify_book_removed();
  });

  // scenario: Delete All Books
  test('[AC-6] should delete all books from profile', async ({ booksPage }) => {
    await booksPage.step_create_user();
    await booksPage.step_login();
    await booksPage.step_navigate();
    await booksPage.step_open_book();
    await booksPage.step_add_to_collection();
    await booksPage.step_open_profile();
    await booksPage.step_delete_all_books();
    await booksPage.verify_no_books();
  });

  // scenario: Go To Book Store
  test('[AC-7] should go to book store from profile', async ({ booksPage }) => {
    await booksPage.step_create_user();
    await booksPage.step_login();
    await booksPage.step_open_profile();
    await booksPage.step_go_to_book_store();
    await booksPage.verify_on_book_store();
  });

});
