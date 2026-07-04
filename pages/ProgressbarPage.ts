// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { progressbarExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class ProgressbarPage extends BasePage {
  readonly path = '/progress-bar';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private startStopButton = this.page.locator('//*[@id="startStopButton"]');
  // locator-helper: dom_id
  private progressBar = this.page.locator('//*[@id="progressBar"]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Progress Bar page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Clicks Start and waits until progress has begun.
   * @returns this for chaining
   */
  async step_start_progress(): Promise<this> {
    await this.startStopButton.click();
    await expect(this.startStopButton).toHaveText(expected.stopLabel);
    await expect.poll(async () => this.getProgressPercent()).toBeGreaterThan(0);
    return this;
  }

  /**
   * Clicks Stop and waits for the button to show Start again.
   * @returns this for chaining
   */
  async step_stop_progress(): Promise<this> {
    await this.startStopButton.click();
    await expect(this.startStopButton).toHaveText(expected.startLabel);
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies progress is paused between 0 and 100 and does not increase.
   * @returns this for chaining
   */
  async verify_progress_stopped(): Promise<this> {
    const stoppedAt = await this.getProgressPercent();
    expect(stoppedAt).toBeGreaterThan(0);
    expect(stoppedAt).toBeLessThan(100);
    await expect.poll(async () => this.getProgressPercent(), { timeout: 1000 }).toBe(stoppedAt);
    return this;
  }

  private async getProgressPercent(): Promise<number> {
    const text = (await this.progressBar.innerText()).replace('%', '').trim();
    return Number(text);
  }
}
