// AUTO-GENERATED — edit this file directly; use crevoai_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { resizableExpected as expected } from '@config/page-loader';
import { expect, Locator } from '@playwright/test';


export class ResizablePage extends BasePage {
  readonly path = '/resizable';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private restrictedBox = this.page.locator('//*[@id="resizableBoxWithRestriction"]');
  // locator-helper: dom_id
  private unrestrictedBox = this.page.locator('//*[@id="resizable"]');
  // locator-helper: attr_combo
  private restrictedHandle = this.page.locator('//*[@id="resizableBoxWithRestriction"]/span[contains(@class,"react-resizable-handle-se")]');
  // locator-helper: attr_combo
  private unrestrictedHandle = this.page.locator('//*[@id="resizable"]/span[contains(@class,"react-resizable-handle-se")]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Resizable page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Drags the restricted box SE handle to grow the box.
   * @returns this for chaining
   */
  async step_resize_restricted(): Promise<this> {
    await this.resizeUntilGrown(this.restrictedBox, this.restrictedHandle, 80, 80);
    return this;
  }

  /**
   * Drags the unrestricted box SE handle to grow the box.
   * @returns this for chaining
   */
  async step_resize_unrestricted(): Promise<this> {
    await this.resizeUntilGrown(this.unrestrictedBox, this.unrestrictedHandle, 80, 40);
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the restricted box grew past its initial size.
   * @returns this for chaining
   */
  async verify_restricted_size(): Promise<this> {
    await this.verifyGrown(this.restrictedBox);
    return this;
  }

  /**
   * Verifies the unrestricted box grew past its initial size.
   * @returns this for chaining
   */
  async verify_unrestricted_size(): Promise<this> {
    await this.verifyGrown(this.unrestrictedBox);
    return this;
  }

  private async boxSize(box: Locator): Promise<{ width: number; height: number }> {
    return box.evaluate((el) => ({
      width: el.getBoundingClientRect().width,
      height: el.getBoundingClientRect().height,
    }));
  }

  private async verifyGrown(box: Locator): Promise<void> {
    const size = await this.boxSize(box);
    expect(size.width).toBeGreaterThan(expected.initialSize);
    expect(size.height).toBeGreaterThan(expected.initialSize);
  }

  private async resizeUntilGrown(box: Locator, handle: Locator, deltaX: number, deltaY: number): Promise<void> {
    for (let attempt = 0; attempt < 3; attempt++) {
      if (attempt > 0) {
        await this.page.goto(this.path);
        await this.waitForPageLoad();
      }
      const before = await this.boxSize(box);
      await this.resizeByHandle(handle, deltaX, deltaY);
      const after = await this.boxSize(box);
      if (after.width > before.width && after.height > before.height) {
        return;
      }
    }
    await this.verifyGrown(box);
  }

  private async resizeByHandle(handle: Locator, deltaX: number, deltaY: number): Promise<void> {
    await handle.scrollIntoViewIfNeeded();
    await handle.dragTo(handle, {
      force: true,
      sourcePosition: { x: 2, y: 2 },
      targetPosition: { x: 2 + deltaX, y: 2 + deltaY },
    });
  }
}
