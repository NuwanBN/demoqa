// AUTO-GENERATED — edit this file directly; use crevoai_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { loginExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class LoginPage extends BasePage {
  readonly path = '/login';

  private createdUserName = '';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private userNameInput = this.page.locator('//*[@id="userName"]');
  // locator-helper: dom_id
  private passwordInput = this.page.locator('//*[@id="password"]');
  // locator-helper: dom_id
  private loginButton = this.page.locator('//*[@id="login"]');
  // locator-helper: dom_id
  private newUserButton = this.page.locator('//*[@id="newUser"]');
  // locator-helper: dom_id
  private loginError = this.page.locator('//*[@id="name"]');
  // locator-helper: dom_id
  private profileUser = this.page.locator('//*[@id="userName-value"]');
  // locator-helper: attr_combo
  private logoutButton = this.page.locator('//button[normalize-space()="Logout"]');
  // locator-helper: dom_id
  private firstNameInput = this.page.locator('//*[@id="firstname"]');
  // locator-helper: dom_id
  private lastNameInput = this.page.locator('//*[@id="lastname"]');
  // locator-helper: dom_id
  private registerButton = this.page.locator('//*[@id="register"]');
  // locator-helper: dom_id
  private backToLoginButton = this.page.locator('//*[@id="gotologin"]');
  // locator-helper: dom_id
  private notLoggedInMessage = this.page.locator('//*[@id="notLoggin-wrapper"]');
  // locator-helper: attr_combo
  private loginHeading = this.page.locator('//h5[normalize-space()="Login in Book Store"]');
  // locator-helper: attr_combo
  private deleteAccountButton = this.page.locator('//button[@id="submit" and contains(., "Delete Account")]');
  // locator-helper: dom_id
  private modalOkButton = this.page.locator('//*[@id="closeSmallModal-ok"]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Login page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Opens the Profile page while logged out.
   * @returns this for chaining
   */
  async step_navigate_profile(): Promise<this> {
    await this.page.goto('/profile');
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Opens the Book Store page.
   * @returns this for chaining
   */
  async step_navigate_books(): Promise<this> {
    await this.page.goto('/books');
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Creates a Book Store user via API (UI register is blocked by captcha).
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
   * Signs in with the created user credentials.
   * @returns this for chaining
   */
  async step_login(): Promise<this> {
    await this.userNameInput.fill(this.createdUserName);
    await this.passwordInput.fill(expected.password);
    await this.loginButton.click({ force: true });
    await this.page.waitForURL('**/profile', { timeout: 15000 });
    return this;
  }

  /**
   * Logs out from the profile page.
   * @returns this for chaining
   */
  async step_logout(): Promise<this> {
    await this.logoutButton.click({ force: true });
    await this.page.waitForURL('**/login', { timeout: 15000 });
    return this;
  }

  /**
   * Submits invalid login credentials.
   * @returns this for chaining
   */
  async step_login_invalid(): Promise<this> {
    await this.userNameInput.fill(expected.invalidUser);
    await this.passwordInput.fill(expected.invalidPassword);
    await this.loginButton.click({ force: true });
    return this;
  }

  /**
   * Opens the register form via New User.
   * @returns this for chaining
   */
  async step_open_register(): Promise<this> {
    await this.newUserButton.click({ force: true });
    await this.page.waitForURL('**/register', { timeout: 15000 });
    return this;
  }

  /**
   * Returns from register to login via Back to Login.
   * @returns this for chaining
   */
  async step_back_to_login(): Promise<this> {
    await this.backToLoginButton.click({ force: true });
    await this.page.waitForURL('**/login', { timeout: 15000 });
    return this;
  }

  /**
   * Opens login from the Book Store Login button.
   * @returns this for chaining
   */
  async step_open_login_from_books(): Promise<this> {
    await this.loginButton.click({ force: true });
    await this.page.waitForURL('**/login', { timeout: 15000 });
    return this;
  }

  /**
   * Deletes the account from profile and confirms the modal.
   * @returns this for chaining
   */
  async step_delete_account(): Promise<this> {
    await this.deleteAccountButton.click({ force: true });
    await this.modalOkButton.waitFor({ state: 'visible', timeout: 5000 });
    const deleteResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes('/Account/v1/User/') && response.request().method() === 'DELETE',
      { timeout: 10000 },
    );
    await this.modalOkButton.click({ force: true, noWaitAfter: true });
    expect((await deleteResponse).status()).toBe(204);
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the profile shows the created username.
   * @returns this for chaining
   */
  async verify_profile_username(): Promise<this> {
    await expect(this.page).toHaveURL(/\/profile/);
    await expect(this.profileUser).toHaveText(this.createdUserName);
    return this;
  }

  /**
   * Verifies the invalid login error message.
   * @returns this for chaining
   */
  async verify_login_error(): Promise<this> {
    await expect(this.loginError).toContainText(expected.loginError, { timeout: 10000 });
    return this;
  }

  /**
   * Verifies register form fields are visible.
   * @returns this for chaining
   */
  async verify_register_form(): Promise<this> {
    await expect(this.page).toHaveURL(/\/register/);
    await expect(this.firstNameInput).toBeVisible();
    await expect(this.lastNameInput).toBeVisible();
    await expect(this.userNameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.registerButton).toBeVisible();
    return this;
  }

  /**
   * Verifies the login page is shown.
   * @returns this for chaining
   */
  async verify_login_page(): Promise<this> {
    await expect(this.page).toHaveURL(/\/login/);
    await expect(this.loginButton).toBeVisible();
    await expect(this.userNameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    return this;
  }

  /**
   * Verifies the unauthenticated profile message.
   * @returns this for chaining
   */
  async verify_not_logged_in_message(): Promise<this> {
    await expect(this.notLoggedInMessage).toContainText(expected.notLoggedInMessage);
    return this;
  }

  /**
   * Verifies the Book Store login heading.
   * @returns this for chaining
   */
  async verify_login_heading(): Promise<this> {
    await expect(this.loginHeading).toHaveText(expected.loginHeading);
    return this;
  }

  /**
   * Verifies deleted credentials cannot sign in.
   * @returns this for chaining
   */
  async verify_account_deleted(): Promise<this> {
    // Profile UI stays stale after delete and blocks the same tab; use a new context.
    const browser = this.page.context().browser();
    expect(browser).toBeTruthy();
    const context = await browser!.newContext();
    const verifyPage = await context.newPage();
    try {
      await verifyPage.goto('/login', { waitUntil: 'domcontentloaded' });
      await verifyPage.locator('//*[@id="userName"]').fill(this.createdUserName);
      await verifyPage.locator('//*[@id="password"]').fill(expected.password);
      await verifyPage.locator('//*[@id="login"]').click({ force: true });
      await expect(verifyPage.locator('//*[@id="name"]')).toContainText(expected.loginError, {
        timeout: 10000,
      });
    } finally {
      await context.close();
    }
    return this;
  }
}
