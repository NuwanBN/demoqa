// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { tabsExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class TabsPage extends BasePage {
  readonly path = '/tabs';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private whatLink = this.page.locator('//*[@id="demo-tab-what"]');
  // locator-helper: dom_id
  private originLink = this.page.locator('//*[@id="demo-tab-origin"]');
  // locator-helper: dom_id
  private useLink = this.page.locator('//*[@id="demo-tab-use"]');
  // locator-helper: dom_id
  private whatPanel = this.page.locator('//*[@id="demo-tabpane-what"]');
  // locator-helper: dom_id
  private originPanel = this.page.locator('//*[@id="demo-tabpane-origin"]');
  // locator-helper: dom_id
  private usePanel = this.page.locator('//*[@id="demo-tabpane-use"]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Tabs page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Selects the Origin tab.
   * @returns this for chaining
   */
  async step_open_origin(): Promise<this> {
    await this.originLink.click();
    return this;
  }

  /**
   * Selects the Use tab.
   * @returns this for chaining
   */
  async step_open_use(): Promise<this> {
    await this.useLink.click();
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the What tab panel content.
   * @returns this for chaining
   */
  async verify_what_content(): Promise<this> {
    await this.whatPanel.waitFor({ state: 'visible' });
    await expect(this.whatPanel).toContainText(expected.whatText);
    return this;
  }

  /**
   * Verifies the Origin tab panel content.
   * @returns this for chaining
   */
  async verify_origin_content(): Promise<this> {
    await this.originPanel.waitFor({ state: 'visible' });
    await expect(this.originPanel).toContainText(expected.originText);
    return this;
  }

  /**
   * Verifies the Use tab panel content.
   * @returns this for chaining
   */
  async verify_use_content(): Promise<this> {
    await this.usePanel.waitFor({ state: 'visible' });
    await expect(this.usePanel).toContainText(expected.useText);
    return this;
  }
}
