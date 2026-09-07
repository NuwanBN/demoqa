// AUTO-GENERATED — edit this file directly; use crevoai_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { datepickerExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class DatepickerPage extends BasePage {
  readonly path = '/date-picker';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private dateInput = this.page.locator('//*[@id="datePickerMonthYearInput"]');
  // locator-helper: dom_id
  private dateTimeInput = this.page.locator('//*[@id="dateAndTimePickerInput"]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Date Picker page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Sets the Select Date field value.
   * @param dateValue - Date Value (string)
   * @returns this for chaining
   */
  async step_set_date(dateValue: string): Promise<this> {
    await this.dateInput.fill(dateValue);
    await this.page.keyboard.press('Enter');
    return this;
  }

  /**
   * Sets the Date And Time field value.
   * @param dateTimeValue - Date Time Value (string)
   * @returns this for chaining
   */
  async step_set_date_time(dateTimeValue: string): Promise<this> {
    await this.dateTimeInput.fill(dateTimeValue);
    await this.page.keyboard.press('Enter');
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the Select Date field value.
   * @returns this for chaining
   */
  async verify_date_value(): Promise<this> {
    await expect(this.dateInput).toHaveValue(expected.dateValue);
    return this;
  }

  /**
   * Verifies the Date And Time field value.
   * @returns this for chaining
   */
  async verify_date_time_value(): Promise<this> {
    await expect(this.dateTimeInput).toHaveValue(expected.dateTimeValue);
    return this;
  }
}
