// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { nestedframesExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class NestedframesPage extends BasePage {
  readonly path = '/nestedframes';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private parentFrame = this.page.locator('//*[@id="frame1"]');
  // locator-helper: dom_id
  private parentBody = this.page.frameLocator('//*[@id="frame1"]').locator('//body');
  // locator-helper: attr_combo
  private childBody = this.page.frameLocator('//*[@id="frame1"]').frameLocator('//iframe').locator('//body');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Nested Frames page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the parent frame shows Parent frame text.
   * @returns this for chaining
   */
  async verify_parent_frame_text(): Promise<this> {
    await expect(this.parentFrame).toBeVisible();
    await expect(this.parentBody).toContainText(expected.parentText);
    return this;
  }

  /**
   * Verifies the child iframe shows Child Iframe text.
   * @returns this for chaining
   */
  async verify_child_frame_text(): Promise<this> {
    await expect(this.childBody).toContainText(expected.childText);
    return this;
  }
}
