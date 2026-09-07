// AUTO-GENERATED — edit this file directly; use crevoai_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { framesExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class FramesPage extends BasePage {
  readonly path = '/frames';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private frame1 = this.page.locator('//*[@id="frame1"]');
  // locator-helper: dom_id
  private frame2 = this.page.locator('//*[@id="frame2"]');
  // locator-helper: dom_id
  private frame1Heading = this.page.frameLocator('//*[@id="frame1"]').locator('//*[@id="sampleHeading"]');
  // locator-helper: dom_id
  private frame2Heading = this.page.frameLocator('//*[@id="frame2"]').locator('//*[@id="sampleHeading"]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Frames page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the large frame shows the sample heading.
   * @returns this for chaining
   */
  async verify_large_frame_text(): Promise<this> {
    await expect(this.frame1).toBeVisible();
    await expect(this.frame1Heading).toHaveText(expected.sampleHeading);
    return this;
  }

  /**
   * Verifies the small frame shows the sample heading.
   * @returns this for chaining
   */
  async verify_small_frame_text(): Promise<this> {
    await expect(this.frame2).toBeVisible();
    await expect(this.frame2Heading).toHaveText(expected.sampleHeading);
    return this;
  }
}
