// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { browserwindowsExpected as expected } from '@config/page-loader';
import { expect, Locator, Page } from '@playwright/test';


export class BrowserwindowsPage extends BasePage {
  readonly path = '/browser-windows';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private newTabButton = this.page.locator('//*[@id="tabButton"]');
  // locator-helper: dom_id
  private newWindowButton = this.page.locator('//*[@id="windowButton"]');
  // locator-helper: dom_id
  private newWindowMessageButton = this.page.locator('//*[@id="messageWindowButton"]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Browser Windows page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Opens New Tab and verifies sample page content.
   * @returns this for chaining
   */
  async step_open_new_tab(): Promise<this> {
    const popup = await this.openPopup(this.newTabButton);
    await expect(popup.locator('body')).toContainText(expected.samplePageText);
    await popup.close();
    return this;
  }

  /**
   * Opens New Window and verifies sample page content.
   * @returns this for chaining
   */
  async step_open_new_window(): Promise<this> {
    const popup = await this.openPopup(this.newWindowButton);
    await expect(popup.locator('body')).toContainText(expected.samplePageText);
    await popup.close();
    return this;
  }

  /**
   * Opens New Window Message and verifies the message text.
   * @returns this for chaining
   */
  async step_open_new_window_message(): Promise<this> {
    const popup = await this.openPopup(this.newWindowMessageButton);
    await expect(popup.locator('body')).toContainText(expected.messageWindowText);
    await popup.close();
    return this;
  }

  private async openPopup(trigger: Locator): Promise<Page> {
    const [popup] = await Promise.all([
      this.page.context().waitForEvent('page'),
      trigger.click(),
    ]);
    await popup.waitForLoadState('domcontentloaded');
    return popup;
  }
}
