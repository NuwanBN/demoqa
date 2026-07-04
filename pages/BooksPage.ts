// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { booksExpected as expected } from '@config/page-loader';
import { expect, Locator } from '@playwright/test';


export class BooksPage extends BasePage {
  readonly path = '/books';

  private createdUserName = '';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private searchBox = this.page.locator('//*[@id="searchBox"]');
  // locator-helper: dom_id
  private bookLink = this.page.locator('//*[@id="see-book-Git Pocket Guide"]');
  // locator-helper: dom_id
  private titleWrapper = this.page.locator('//*[@id="title-wrapper"]');
  // locator-helper: attr_combo
  private addToCollectionButton = this.page.locator('//button[normalize-space()="Add To Your Collection"]');
  // locator-helper: dom_id
  private userNameInput = this.page.locator('//*[@id="userName"]');
  // locator-helper: dom_id
  private passwordInput = this.page.locator('//*[@id="password"]');
  // locator-helper: dom_id
  private loginButton = this.page.locator('//*[@id="login"]');
  // locator-helper: attr_combo
  private deleteBookIcon = this.page.locator('//span[@title="Delete"]');
  // locator-helper: attr_combo
  private deleteAllBooksButton = this.page.locator('(//button[normalize-space()="Delete All Books"])[1]');
  // locator-helper: dom_id
  private modalOkButton = this.page.locator('//*[@id="closeSmallModal-ok"]');
  // locator-helper: attr_combo
  private goToBookStoreButton = this.page.locator('//button[normalize-space()="Go To Book Store"]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Book Store page.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Opens the profile page.
   * @returns this for chaining
   */
  async step_open_profile(): Promise<this> {
    await this.page.goto('/profile');
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Creates a Book Store user via API.
   * @returns this for chaining
   */
  async step_create_user(): Promise<this> {
    this.createdUserName = `user_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
    const response = await this.page.request.post('/Account/v1/User', {
      data: {
        userName: this.createdUserName,
        password: expected.password,
      },
    });
    expect(response.status(), await response.text()).toBe(201);
    return this;
  }

  /**
   * Logs in with the created user.
   * @returns this for chaining
   */
  async step_login(): Promise<this> {
    await this.page.goto('/login');
    await this.waitForPageLoad();
    await this.userNameInput.fill(this.createdUserName);
    await this.passwordInput.fill(expected.password);
    await this.loginButton.scrollIntoViewIfNeeded();
    await this.loginButton.click({ force: true });
    await this.page.waitForURL(/\/profile/, { timeout: 20000 });
    await expect(this.page.locator('//*[@id="userName-value"]')).toHaveText(this.createdUserName, {
      timeout: 10000,
    });
    return this;
  }

  /**
   * Searches for a book.
   * @returns this for chaining
   */
  async step_search(): Promise<this> {
    await this.searchBox.fill(expected.searchTerm);
    return this;
  }

  /**
   * Opens the book details.
   * @returns this for chaining
   */
  async step_open_book(): Promise<this> {
    await this.bookLink.click({ force: true });
    await expect(this.titleWrapper).toContainText(expected.bookTitle, { timeout: 10000 });
    return this;
  }

  /**
   * Adds the book to the collection.
   * @returns this for chaining
   */
  async step_add_to_collection(): Promise<this> {
    const dialogPromise = this.page.waitForEvent('dialog');
    await this.addToCollectionButton.click({ force: true });
    await (await dialogPromise).accept();
    return this;
  }

  /**
   * Deletes one book from profile.
   * @returns this for chaining
   */
  async step_delete_book(): Promise<this> {
    await this.deleteWithConfirm(this.deleteBookIcon);
    return this;
  }

  /**
   * Deletes all books from profile.
   * @returns this for chaining
   */
  async step_delete_all_books(): Promise<this> {
    await this.deleteWithConfirm(this.deleteAllBooksButton);
    return this;
  }

  /**
   * Goes to the book store from profile.
   * @returns this for chaining
   */
  async step_go_to_book_store(): Promise<this> {
    await this.goToBookStoreButton.click({ force: true });
    await this.page.waitForURL('**/books', { timeout: 15000 });
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies books are listed.
   * @returns this for chaining
   */
  async verify_books_listed(): Promise<this> {
    await expect(this.bookLink).toBeVisible();
    return this;
  }

  /**
   * Verifies search results.
   * @returns this for chaining
   */
  async verify_search_results(): Promise<this> {
    await expect(this.bookLink).toBeVisible();
    await expect(this.bookLink).toHaveText(expected.bookTitle);
    return this;
  }

  /**
   * Verifies book details.
   * @returns this for chaining
   */
  async verify_book_details(): Promise<this> {
    await expect(this.titleWrapper).toContainText(expected.bookTitle);
    return this;
  }

  /**
   * Verifies book is in profile.
   * @returns this for chaining
   */
  async verify_book_in_profile(): Promise<this> {
    await expect(this.bookLink).toBeVisible({ timeout: 10000 });
    return this;
  }

  /**
   * Verifies book was removed.
   * @returns this for chaining
   */
  async verify_book_removed(): Promise<this> {
    await expect(this.bookLink).toHaveCount(0, { timeout: 10000 });
    return this;
  }

  /**
   * Verifies no books remain.
   * @returns this for chaining
   */
  async verify_no_books(): Promise<this> {
    await expect(this.bookLink).toHaveCount(0, { timeout: 10000 });
    return this;
  }

  /**
   * Verifies book store is shown.
   * @returns this for chaining
   */
  async verify_on_book_store(): Promise<this> {
    await expect(this.page).toHaveURL(/\/books/);
    await expect(this.searchBox).toBeVisible();
    return this;
  }

  private async deleteWithConfirm(trigger: Locator): Promise<void> {
    await trigger.click({ force: true });
    await this.modalOkButton.waitFor({ state: 'visible', timeout: 5000 });
    // Accept before click resolves — a native alert blocks the click action.
    this.page.once('dialog', (dialog) => {
      void dialog.accept();
    });
    await this.modalOkButton.click({ force: true });
  }
}
