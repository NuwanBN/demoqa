// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { radioExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class RadioPage extends BasePage {
  readonly path = '/radio-button';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private yesInput = this.page.locator('//*[@id="yesRadio"]');
  // locator-helper: attr_combo
  private selectionResult = this.page.locator('//span[contains(@class,"text-success")]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Radio Button page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Selects the Yes radio button.
   * @returns this for chaining
   */
  async step_select_yes(): Promise<this> {
    await this.yesInput.check();
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies Yes is selected and shown in the result message.
   * @returns this for chaining
   */
  async verify_yes_selected(): Promise<this> {
    await expect(this.yesInput).toBeChecked();
    await this.selectionResult.waitFor({ state: 'visible' });
    await expect(this.selectionResult).toContainText(expected.yes);
    return this;
  }
}
