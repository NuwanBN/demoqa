// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { alertsExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class AlertsPage extends BasePage {
  readonly path = '/alerts';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private alertButton = this.page.locator('//*[@id="alertButton"]');
  // locator-helper: dom_id
  private timerAlertButton = this.page.locator('//*[@id="timerAlertButton"]');
  // locator-helper: dom_id
  private confirmButton = this.page.locator('//*[@id="confirmButton"]');
  // locator-helper: dom_id
  private promptButton = this.page.locator('//*[@id="promtButton"]');
  // locator-helper: dom_id
  private confirmResult = this.page.locator('//*[@id="confirmResult"]');
  // locator-helper: dom_id
  private promptResult = this.page.locator('//*[@id="promptResult"]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Alerts page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Clicks the simple alert button and accepts the dialog.
   * @returns this for chaining
   */
  async step_accept_simple_alert(): Promise<this> {
    this.page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe(expected.simpleAlertMessage);
      await dialog.accept();
    });
    await this.alertButton.click();
    return this;
  }

  /**
   * Clicks the timer alert button and accepts the delayed dialog.
   * @returns this for chaining
   */
  async step_accept_timer_alert(): Promise<this> {
    this.page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe(expected.timerAlertMessage);
      await dialog.accept();
    });
    await this.timerAlertButton.click({ timeout: 10000 });
    return this;
  }

  /**
   * Clicks the confirm button and accepts the dialog.
   * @returns this for chaining
   */
  async step_accept_confirm(): Promise<this> {
    this.page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe(expected.confirmAlertMessage);
      await dialog.accept();
    });
    await this.confirmButton.click();
    return this;
  }

  /**
   * Clicks the prompt button, enters text, and accepts the dialog.
   * @returns this for chaining
   */
  async step_accept_prompt(): Promise<this> {
    this.page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe(expected.promptAlertMessage);
      await dialog.accept(expected.promptText);
    });
    await this.promptButton.click();
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the confirm dialog result text.
   * @returns this for chaining
   */
  async verify_confirm_result(): Promise<this> {
    await this.confirmResult.waitFor({ state: 'visible' });
    await expect(this.confirmResult).toContainText(expected.confirmResultOk);
    return this;
  }

  /**
   * Verifies the prompt dialog result text.
   * @returns this for chaining
   */
  async verify_prompt_result(): Promise<this> {
    await this.promptResult.waitFor({ state: 'visible' });
    await expect(this.promptResult).toContainText(expected.promptText);
    return this;
  }
}
