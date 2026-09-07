// AUTO-GENERATED — edit this file directly; use crevoai_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { bookapiExpected as expected } from '@config/page-loader';
import { APIResponse, expect } from '@playwright/test';

type JsonBody = Record<string, unknown> | unknown[] | string | boolean | null;

export class BookapiPage extends BasePage {
  readonly path = '/swagger';

  private userName = '';
  private userId = '';
  private token = '';
  private lastStatus = 0;
  private lastBody: JsonBody = null;

  private authHeaders(): { Authorization: string } {
    return { Authorization: `Bearer ${this.token}` };
  }

  private readonly apiTimeout = 30000;

  private async capture(response: APIResponse): Promise<void> {
    this.lastStatus = response.status();
    const text = await response.text();
    try {
      this.lastBody = text ? (JSON.parse(text) as JsonBody) : null;
    } catch {
      this.lastBody = text;
    }
  }

  private bodyObject(): Record<string, unknown> {
    return (this.lastBody ?? {}) as Record<string, unknown>;
  }

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Creates a Book Store user via API.
   * @returns this for chaining
   */
  async step_create_user(): Promise<this> {
    this.userName = `api_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
    const response = await this.page.request.post('/Account/v1/User', {
      data: { userName: this.userName, password: expected.password },
      timeout: this.apiTimeout,
    });
    await this.capture(response);
    const body = this.bodyObject();
    this.userId = String(body.userID ?? body.userId ?? '');
    return this;
  }

  /**
   * Generates an auth token for the created user.
   * @returns this for chaining
   */
  async step_generate_token(): Promise<this> {
    const response = await this.page.request.post('/Account/v1/GenerateToken', {
      data: { userName: this.userName, password: expected.password },
      timeout: this.apiTimeout,
    });
    await this.capture(response);
    this.token = String(this.bodyObject().token ?? '');
    return this;
  }

  /**
   * Checks whether the user is authorized.
   * @returns this for chaining
   */
  async step_authorized(): Promise<this> {
    const response = await this.page.request.post('/Account/v1/Authorized', {
      data: { userName: this.userName, password: expected.password },
      timeout: this.apiTimeout,
    });
    await this.capture(response);
    return this;
  }

  /**
   * Logs in via the Account Login endpoint.
   * @returns this for chaining
   */
  async step_login(): Promise<this> {
    const response = await this.page.request.post('/Account/v1/Login', {
      data: { userName: this.userName, password: expected.password },
      timeout: this.apiTimeout,
    });
    await this.capture(response);
    const body = this.bodyObject();
    this.userId = String(body.userId ?? this.userId);
    this.token = String(body.token ?? this.token);
    return this;
  }

  /**
   * Gets the created user by id.
   * @returns this for chaining
   */
  async step_get_user(): Promise<this> {
    const response = await this.page.request.get(`/Account/v1/User/${this.userId}`, {
      headers: this.authHeaders(),
      timeout: this.apiTimeout,
    });
    await this.capture(response);
    return this;
  }

  /**
   * Attempts to create the same user again.
   * @returns this for chaining
   */
  async step_create_user_duplicate(): Promise<this> {
    const response = await this.page.request.post('/Account/v1/User', {
      data: { userName: this.userName, password: expected.password },
      timeout: this.apiTimeout,
    });
    await this.capture(response);
    return this;
  }

  /**
   * Attempts token generation with an invalid password.
   * @returns this for chaining
   */
  async step_generate_token_invalid(): Promise<this> {
    const response = await this.page.request.post('/Account/v1/GenerateToken', {
      data: { userName: this.userName, password: expected.invalidPassword },
      timeout: this.apiTimeout,
    });
    await this.capture(response);
    return this;
  }

  /**
   * Lists books in the catalog.
   * @returns this for chaining
   */
  async step_list_books(): Promise<this> {
    const response = await this.page.request.get('/BookStore/v1/Books', {
      timeout: this.apiTimeout,
    });
    await this.capture(response);
    return this;
  }

  /**
   * Gets a single book by ISBN.
   * @returns this for chaining
   */
  async step_get_book(): Promise<this> {
    const response = await this.page.request.get(`/BookStore/v1/Book?ISBN=${expected.bookIsbn}`, {
      timeout: this.apiTimeout,
    });
    await this.capture(response);
    return this;
  }

  /**
   * Adds a book to the user collection.
   * @returns this for chaining
   */
  async step_add_books(): Promise<this> {
    const response = await this.page.request.post('/BookStore/v1/Books', {
      headers: this.authHeaders(),
      data: { userId: this.userId, collectionOfIsbns: [{ isbn: expected.bookIsbn }] },
      timeout: this.apiTimeout,
    });
    await this.capture(response);
    return this;
  }

  /**
   * Replaces a collection book with another ISBN.
   * @returns this for chaining
   */
  async step_replace_book(): Promise<this> {
    const response = await this.page.request.put(`/BookStore/v1/Books/${expected.bookIsbn}`, {
      headers: this.authHeaders(),
      data: { userId: this.userId, isbn: expected.replaceIsbn },
      timeout: this.apiTimeout,
    });
    await this.capture(response);
    return this;
  }

  /**
   * Deletes one book from the user collection.
   * @returns this for chaining
   */
  async step_delete_book(): Promise<this> {
    const response = await this.page.request.delete('/BookStore/v1/Book', {
      headers: this.authHeaders(),
      data: { isbn: expected.replaceIsbn, userId: this.userId },
      timeout: this.apiTimeout,
    });
    await this.capture(response);
    return this;
  }

  /**
   * Deletes all books from the user collection.
   * @returns this for chaining
   */
  async step_delete_all_books(): Promise<this> {
    const response = await this.page.request.delete(`/BookStore/v1/Books?UserId=${this.userId}`, {
      headers: this.authHeaders(),
      timeout: this.apiTimeout,
    });
    await this.capture(response);
    return this;
  }

  /**
   * Deletes the user account.
   * @returns this for chaining
   */
  async step_delete_user(): Promise<this> {
    const response = await this.page.request.delete(`/Account/v1/User/${this.userId}`, {
      headers: this.authHeaders(),
      data: { userName: this.userName, password: expected.password },
      timeout: this.apiTimeout,
    });
    await this.capture(response);
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies user create returned 201 with id and empty books.
   * @returns this for chaining
   */
  async verify_user_created(): Promise<this> {
    expect(this.lastStatus).toBe(201);
    const body = this.bodyObject();
    expect(body.userID ?? body.userId).toBeTruthy();
    expect(body.username).toBe(this.userName);
    expect(body.books).toEqual([]);
    return this;
  }

  /**
   * Verifies token generation succeeded.
   * @returns this for chaining
   */
  async verify_token_generated(): Promise<this> {
    expect(this.lastStatus).toBe(200);
    const body = this.bodyObject();
    expect(body.status).toBe(expected.tokenSuccess);
    expect(body.token).toBeTruthy();
    return this;
  }

  /**
   * Verifies authorized is true.
   * @returns this for chaining
   */
  async verify_authorized(): Promise<this> {
    expect(this.lastStatus).toBe(200);
    expect(this.lastBody).toBe(true);
    return this;
  }

  /**
   * Verifies login returned identity and token.
   * @returns this for chaining
   */
  async verify_login(): Promise<this> {
    expect(this.lastStatus).toBe(200);
    const body = this.bodyObject();
    expect(body.userId).toBeTruthy();
    expect(body.username).toBe(this.userName);
    expect(body.token).toBeTruthy();
    return this;
  }

  /**
   * Verifies get user returned the username.
   * @returns this for chaining
   */
  async verify_user_fetched(): Promise<this> {
    expect(this.lastStatus).toBe(200);
    const body = this.bodyObject();
    expect(body.userId).toBe(this.userId);
    expect(body.username).toBe(this.userName);
    expect(Array.isArray(body.books)).toBe(true);
    return this;
  }

  /**
   * Verifies duplicate user create was rejected.
   * @returns this for chaining
   */
  async verify_user_exists_error(): Promise<this> {
    expect(this.lastStatus).toBe(406);
    expect(this.bodyObject().message).toBe(expected.userExistsMessage);
    return this;
  }

  /**
   * Verifies invalid credentials fail token generation.
   * @returns this for chaining
   */
  async verify_token_failed(): Promise<this> {
    expect(this.lastStatus).toBe(200);
    const body = this.bodyObject();
    expect(body.status).toBe(expected.tokenFailed);
    expect(body.token).toBeNull();
    expect(body.result).toBe(expected.tokenFailedResult);
    return this;
  }

  /**
   * Verifies catalog includes the known book ISBN.
   * @returns this for chaining
   */
  async verify_books_listed(): Promise<this> {
    expect(this.lastStatus).toBe(200);
    const books = this.bodyObject().books as Array<{ isbn: string; title: string }>;
    expect(books.length).toBeGreaterThan(0);
    expect(books.some((book) => book.isbn === expected.bookIsbn)).toBe(true);
    return this;
  }

  /**
   * Verifies book details match the known title.
   * @returns this for chaining
   */
  async verify_book_details(): Promise<this> {
    expect(this.lastStatus).toBe(200);
    const body = this.bodyObject();
    expect(body.isbn).toBe(expected.bookIsbn);
    expect(body.title).toBe(expected.bookTitle);
    return this;
  }

  /**
   * Verifies a book was added to the collection.
   * @returns this for chaining
   */
  async verify_books_added(): Promise<this> {
    expect(this.lastStatus).toBe(201);
    const books = this.bodyObject().books as Array<{ isbn: string }>;
    expect(books.some((book) => book.isbn === expected.bookIsbn)).toBe(true);
    return this;
  }

  /**
   * Verifies the collection book was replaced.
   * @returns this for chaining
   */
  async verify_book_replaced(): Promise<this> {
    expect(this.lastStatus).toBe(200);
    const books = this.bodyObject().books as Array<{ isbn: string; title: string }>;
    expect(books).toHaveLength(1);
    expect(books[0].isbn).toBe(expected.replaceIsbn);
    expect(books[0].title).toBe(expected.replaceTitle);
    return this;
  }

  /**
   * Verifies one book delete returned no content.
   * @returns this for chaining
   */
  async verify_book_deleted(): Promise<this> {
    expect(this.lastStatus).toBe(204);
    return this;
  }

  /**
   * Verifies all books delete returned no content.
   * @returns this for chaining
   */
  async verify_all_books_deleted(): Promise<this> {
    expect(this.lastStatus).toBe(204);
    return this;
  }

  /**
   * Verifies user profile books list is empty.
   * @returns this for chaining
   */
  async verify_collection_empty(): Promise<this> {
    expect(this.lastStatus).toBe(200);
    expect(this.bodyObject().books).toEqual([]);
    return this;
  }

  /**
   * Verifies user delete returned no content.
   * @returns this for chaining
   */
  async verify_user_deleted(): Promise<this> {
    expect(this.lastStatus).toBe(204);
    return this;
  }

  /**
   * Verifies get user after delete returns not found.
   * @returns this for chaining
   */
  async verify_user_not_found(): Promise<this> {
    expect(this.lastStatus).toBe(401);
    expect(this.bodyObject().message).toBe(expected.userNotFoundMessage);
    return this;
  }
}
