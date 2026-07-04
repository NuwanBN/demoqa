// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { sliderExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class SliderPage extends BasePage {
  readonly path = '/slider';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private sliderInput = this.page.locator('//*[@id="slider"]');
  // locator-helper: dom_id
  private sliderValue = this.page.locator('//*[@id="sliderValue"]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Slider page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Sets the slider to the target value.
   * @param value - Value (string)
   * @returns this for chaining
   */
  async step_set_slider(value: string): Promise<this> {
    await this.sliderInput.fill(value);
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the slider and display show the target value.
   * @returns this for chaining
   */
  async verify_slider_value(): Promise<this> {
    await expect(this.sliderInput).toHaveValue(expected.targetValue);
    await expect(this.sliderValue).toHaveValue(expected.targetValue);
    return this;
  }
}
