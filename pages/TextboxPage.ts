// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { textboxExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class TextboxPage extends BasePage {
  readonly path = '/text-box';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private fullNameInput = this.page.locator('//*[@id="userName"]');
  // locator-helper: dom_id
  private nameexamplecomInput = this.page.locator('//*[@id="userEmail"]');
  // locator-helper: dom_id
  private currentAddressTextarea = this.page.locator('//*[@id="currentAddress"]');
  // locator-helper: dom_id
  private permanentAddressInput = this.page.locator('//*[@id="permanentAddress"]');
  // locator-helper: dom_id
  private submitButton = this.page.locator('//*[@id="submit"]');
  // locator-helper: dom_id
  private outputPanel = this.page.locator('//*[@id="output"]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Text Box page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Fills Full Name, Email, Current Address, and Permanent Address.
   * @param fullName - Full Name (string)
   * @param email - Email (string)
   * @param currentAddress - Current Address (string)
   * @param permanentAddress - Permanent Address (string)
   * @returns this for chaining
   */
  async step_fill_form(fullName: string, email: string, currentAddress: string, permanentAddress: string): Promise<this> {
    await this.fullNameInput.fill(fullName);
    await this.nameexamplecomInput.fill(email);
    await this.currentAddressTextarea.fill(currentAddress);
    await this.permanentAddressInput.fill(permanentAddress);
    return this;
  }

  /**
   * Scrolls to Submit and submits the Text Box form.
   * @returns this for chaining
   */
  async step_submit(): Promise<this> {
    await this.submitButton.scrollIntoViewIfNeeded();
    await this.submitButton.click();
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the output panel shows the submitted field values.
   * @returns this for chaining
   */
  async verify_output(): Promise<this> {
    await this.outputPanel.waitFor({ state: 'visible' });
    await expect(this.outputPanel).toContainText(expected.fullName);
    await expect(this.outputPanel).toContainText(expected.email);
    await expect(this.outputPanel).toContainText(expected.currentAddress);
    await expect(this.outputPanel).toContainText(expected.permanentAddress);
    return this;
  }
}
