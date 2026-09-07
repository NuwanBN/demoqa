// AUTO-GENERATED — edit this file directly; use crevoai_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { linksExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class LinksPage extends BasePage {
  readonly path = '/links';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private homeLink = this.page.locator('//*[@id="simpleLink"]');
  // locator-helper: dom_id
  private createdLink = this.page.locator('//*[@id="created"]');
  // locator-helper: dom_id
  private notFoundLink = this.page.locator('//*[@id="invalid-url"]');
  // locator-helper: dom_id
  private linkResponse = this.page.locator('//*[@id="linkResponse"]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Links page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Opens Home in a new tab and verifies the home URL.
   * @returns this for chaining
   */
  async step_open_home_new_tab(): Promise<this> {
    const [newTab] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.homeLink.click(),
    ]);
    await newTab.waitForLoadState('domcontentloaded');
    await expect(newTab).toHaveURL(expected.homeUrl);
    await newTab.close();
    return this;
  }

  /**
   * Clicks Created and waits for the backend 201 response.
   * @returns this for chaining
   */
  async step_click_created(): Promise<this> {
    const [response] = await Promise.all([
      this.page.waitForResponse(r => r.url().includes('/created')),
      this.createdLink.click(),
    ]);
    expect(response.status()).toBe(201);
    return this;
  }

  /**
   * Clicks Not Found and waits for the backend 404 response.
   * @returns this for chaining
   */
  async step_click_not_found(): Promise<this> {
    const [response] = await Promise.all([
      this.page.waitForResponse(r => r.url().includes('/invalid-url')),
      this.notFoundLink.click(),
    ]);
    expect(response.status()).toBe(404);
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the Created backend response message.
   * @returns this for chaining
   */
  async verify_created_response(): Promise<this> {
    await this.linkResponse.waitFor({ state: 'visible' });
    await expect(this.linkResponse).toContainText(expected.createdStatus);
    await expect(this.linkResponse).toContainText(expected.createdText);
    return this;
  }

  /**
   * Verifies the Not Found backend response message.
   * @returns this for chaining
   */
  async verify_not_found_response(): Promise<this> {
    await this.linkResponse.waitFor({ state: 'visible' });
    await expect(this.linkResponse).toContainText(expected.notFoundStatus);
    await expect(this.linkResponse).toContainText(expected.notFoundText);
    return this;
  }
}
