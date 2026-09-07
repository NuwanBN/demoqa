// AUTO-GENERATED — edit this file directly; use crevoai_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { modaldialogsExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class ModaldialogsPage extends BasePage {
  readonly path = '/modal-dialogs';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private smallModalButton = this.page.locator('//*[@id="showSmallModal"]');
  // locator-helper: dom_id
  private largeModalButton = this.page.locator('//*[@id="showLargeModal"]');
  // locator-helper: dom_id
  private smallModalTitle = this.page.locator('//*[@id="example-modal-sizes-title-sm"]');
  // locator-helper: dom_id
  private largeModalTitle = this.page.locator('//*[@id="example-modal-sizes-title-lg"]');
  // locator-helper: dom_id
  private closeSmallModal = this.page.locator('//*[@id="closeSmallModal"]');
  // locator-helper: dom_id
  private closeLargeModal = this.page.locator('//*[@id="closeLargeModal"]');
  // locator-helper: attr_combo
  private modalBody = this.page.locator('//div[contains(@class,"modal-body")]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Modal Dialogs page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Opens the small modal dialog.
   * @returns this for chaining
   */
  async step_open_small_modal(): Promise<this> {
    await this.smallModalButton.click();
    return this;
  }

  /**
   * Closes the small modal dialog.
   * @returns this for chaining
   */
  async step_close_small_modal(): Promise<this> {
    await this.closeSmallModal.click();
    return this;
  }

  /**
   * Opens the large modal dialog.
   * @returns this for chaining
   */
  async step_open_large_modal(): Promise<this> {
    await this.largeModalButton.click();
    return this;
  }

  /**
   * Closes the large modal dialog.
   * @returns this for chaining
   */
  async step_close_large_modal(): Promise<this> {
    await this.closeLargeModal.click();
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the small modal title and body.
   * @returns this for chaining
   */
  async verify_small_modal(): Promise<this> {
    await this.smallModalTitle.waitFor({ state: 'visible' });
    await expect(this.smallModalTitle).toContainText(expected.smallTitle);
    await expect(this.modalBody).toContainText(expected.smallBody);
    return this;
  }

  /**
   * Verifies the large modal title and body.
   * @returns this for chaining
   */
  async verify_large_modal(): Promise<this> {
    await this.largeModalTitle.waitFor({ state: 'visible' });
    await expect(this.largeModalTitle).toContainText(expected.largeTitle);
    await expect(this.modalBody).toContainText(expected.largeBody);
    return this;
  }
}
