// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { brokenlinksExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class BrokenlinksPage extends BasePage {
  readonly path = '/broken';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: role_name
  private validLink = this.page.getByRole('link', { name: 'Click Here for Valid Link', exact: true });
  // locator-helper: role_name
  private brokenLink = this.page.getByRole('link', { name: 'Click Here for Broken Link', exact: true });
  // locator-helper: attr_combo
  private validImage = this.page.locator('//img[contains(@src,"/images/Toolsqa.jpg")]');
  // locator-helper: attr_combo
  private brokenImage = this.page.locator('//img[contains(@src,"Toolsqa_1.jpg")]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Broken Links - Images page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Opens the valid link and waits for navigation.
   * @returns this for chaining
   */
  async step_open_valid_link(): Promise<this> {
    await this.validLink.click();
    await this.page.waitForURL(/demoqa\.com/, { timeout: 15000 });
    return this;
  }

  /**
   * Requests the broken link URL and asserts HTTP 500.
   * @returns this for chaining
   */
  async step_check_broken_link_status(): Promise<this> {
    const href = await this.brokenLink.getAttribute('href');
    expect(href).toBeTruthy();
    const response = await this.page.request.get(href!);
    expect(response.status()).toBe(Number(expected.brokenLinkStatus));
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the valid image is present with the expected asset path.
   * @returns this for chaining
   */
  async verify_valid_image(): Promise<this> {
    await expect(this.validImage).toBeVisible();
    await expect(this.validImage).toHaveAttribute('src', expected.validImageSrc);
    return this;
  }

  /**
   * Verifies the broken image does not render and is not a real image response.
   * @returns this for chaining
   */
  async verify_broken_image(): Promise<this> {
    await expect(this.brokenImage).toHaveAttribute('src', expected.brokenImageSrc);
    await expect.poll(async () => this.brokenImage.evaluate((img) => (img as { naturalWidth: number }).naturalWidth)).toBe(0);
    const src = await this.brokenImage.getAttribute('src');
    expect(src).toBeTruthy();
    const response = await this.page.request.get(new URL(src!, this.page.url()).toString());
    const contentType = response.headers()['content-type'] ?? '';
    expect(contentType.includes('image/')).toBe(false);
    return this;
  }

  /**
   * Verifies the valid link reached the home page.
   * @returns this for chaining
   */
  async verify_valid_link_url(): Promise<this> {
    await expect(this.page).toHaveURL(new RegExp(expected.validLinkHost));
    return this;
  }
}
