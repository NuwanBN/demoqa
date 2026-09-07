// AUTO-GENERATED — edit this file directly; use crevoai_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { autocompleteExpected as expected } from '@config/page-loader';
import { expect, Locator } from '@playwright/test';


export class AutocompletePage extends BasePage {
  readonly path = '/auto-complete';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private multipleInput = this.page.locator('//*[@id="autoCompleteMultipleInput"]');
  // locator-helper: dom_id
  private singleInput = this.page.locator('//*[@id="autoCompleteSingleInput"]');
  // locator-helper: dom_id
  private multipleContainer = this.page.locator('//*[@id="autoCompleteMultipleContainer"]');
  // locator-helper: dom_id
  private singleContainer = this.page.locator('//*[@id="autoCompleteSingleContainer"]');
  // locator-helper: dyn_param
  private suggestionOption(color: string): Locator {
    return this.page.locator(`//div[contains(@class,"auto-complete__option") and normalize-space()="${color}"]`);
  }

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Auto Complete page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Types into the multiple field and selects two color suggestions.
   * @returns this for chaining
   */
  async step_select_multiple_colors(): Promise<this> {
    await this.multipleInput.fill(expected.multiType1);
    await this.suggestionOption(expected.multiColor1).click();
    await this.multipleInput.fill(expected.multiType2);
    await this.suggestionOption(expected.multiColor2).click();
    return this;
  }

  /**
   * Types into the single field and selects a color suggestion.
   * @returns this for chaining
   */
  async step_select_single_color(): Promise<this> {
    await this.singleInput.fill(expected.singleType);
    await this.suggestionOption(expected.singleColor).click();
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the multiple field shows both selected colors.
   * @returns this for chaining
   */
  async verify_multiple_colors_selected(): Promise<this> {
    await expect(this.multipleContainer).toContainText(expected.multiColor1);
    await expect(this.multipleContainer).toContainText(expected.multiColor2);
    return this;
  }

  /**
   * Verifies the single field shows the selected color.
   * @returns this for chaining
   */
  async verify_single_color_selected(): Promise<this> {
    await expect(this.singleContainer).toContainText(expected.singleColor);
    return this;
  }
}
