// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { dynamicpropertiesExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class DynamicpropertiesPage extends BasePage {
  readonly path = '/dynamic-properties';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private willEnable5SecondsButton = this.page.locator('//*[@id="enableAfter"]');
  // locator-helper: dom_id
  private colorChangeButton = this.page.locator('//*[@id="colorChange"]');
  // locator-helper: dom_id
  private visibleAfter5SecondsButton = this.page.locator('//*[@id="visibleAfter"]');


  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Dynamic Properties page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the enable-after-delay button becomes enabled.
   * @returns this for chaining
   */
  async verify_enable_button_enabled(): Promise<this> {
    await expect(this.willEnable5SecondsButton).toBeEnabled({ timeout: 10000 });
    return this;
  }

  /**
   * Verifies the visible-after-delay button becomes visible.
   * @returns this for chaining
   */
  async verify_visible_button_visible(): Promise<this> {
    await expect(this.visibleAfter5SecondsButton).toBeVisible({ timeout: 10000 });
    return this;
  }

  /**
   * Verifies the Color Change button gains the danger class.
   * @returns this for chaining
   */
  async verify_color_change(): Promise<this> {
    await expect(this.colorChangeButton).toHaveClass(new RegExp(expected.colorChangeClass), { timeout: 10000 });
    return this;
  }
}

