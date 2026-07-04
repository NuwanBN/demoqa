// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { droppableExpected as expected } from '@config/page-loader';
import { expect, Locator } from '@playwright/test';


export class DroppablePage extends BasePage {
  readonly path = '/droppable';

  private revertStartX = 0;

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: attr_combo
  private simpleDrag = this.page.locator('//*[@id="simpleDropContainer"]//*[@id="draggable"]');
  // locator-helper: attr_combo
  private simpleDrop = this.page.locator('//*[@id="simpleDropContainer"]//*[@id="droppable"]');
  // locator-helper: dom_id
  private acceptTab = this.page.locator('//*[@id="droppableExample-tab-accept"]');
  // locator-helper: dom_id
  private acceptable = this.page.locator('//*[@id="acceptable"]');
  // locator-helper: attr_combo
  private acceptDrop = this.page.locator('//*[@id="acceptDropContainer"]//div[contains(@class,"drop-box")]');
  // locator-helper: dom_id
  private preventTab = this.page.locator('//*[@id="droppableExample-tab-preventPropogation"]');
  // locator-helper: dom_id
  private dragBox = this.page.locator('//*[@id="dragBox"]');
  // locator-helper: dom_id
  private notGreedyOuter = this.page.locator('//*[@id="notGreedyDropBox"]');
  // locator-helper: dom_id
  private revertTab = this.page.locator('//*[@id="droppableExample-tab-revertable"]');
  // locator-helper: dom_id
  private willRevert = this.page.locator('//*[@id="revertable"]');
  // locator-helper: attr_combo
  private revertDrop = this.page.locator('//*[@id="revertableDropContainer"]//*[@id="droppable"]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Droppable page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Drags the simple box onto the drop target.
   * @returns this for chaining
   */
  async step_simple_drop(): Promise<this> {
    await this.dropUntil(this.simpleDrag, this.simpleDrop, this.simpleDrop);
    return this;
  }

  /**
   * Opens Accept and drops the acceptable item.
   * @returns this for chaining
   */
  async step_accept_drop(): Promise<this> {
    await this.dropUntil(this.acceptable, this.acceptDrop, this.acceptDrop, async () => {
      await this.acceptTab.click({ force: true });
    });
    return this;
  }

  /**
   * Opens Prevent Propagation and drops on not-greedy outer.
   * @returns this for chaining
   */
  async step_prevent_propagation_drop(): Promise<this> {
    // Drop on the outer rim (not the centered inner box)
    await this.dropUntil(this.dragBox, this.notGreedyOuter, this.notGreedyOuter, async () => {
      await this.preventTab.click({ force: true });
    }, { xRatio: 0.5, yRatio: 0.12 });
    return this;
  }

  /**
   * Opens Revert and drops the will-revert item.
   * @returns this for chaining
   */
  async step_revert_drop(): Promise<this> {
    await this.dropUntil(this.willRevert, this.revertDrop, this.revertDrop, async () => {
      await this.revertTab.click({ force: true });
      const before = await this.willRevert.boundingBox();
      this.revertStartX = before?.x ?? 0;
    });
    await this.page.waitForTimeout(800);
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the simple drop target shows Dropped.
   * @returns this for chaining
   */
  async verify_simple_dropped(): Promise<this> {
    await expect(this.simpleDrop).toContainText(expected.droppedText);
    return this;
  }

  /**
   * Verifies the accept drop target shows Dropped.
   * @returns this for chaining
   */
  async verify_accept_dropped(): Promise<this> {
    await expect(this.acceptDrop).toContainText(expected.droppedText);
    return this;
  }

  /**
   * Verifies not-greedy outer shows Dropped.
   * @returns this for chaining
   */
  async verify_prevent_propagation_dropped(): Promise<this> {
    await expect(this.notGreedyOuter).toContainText(expected.droppedText);
    return this;
  }

  /**
   * Verifies the revert drop target shows Dropped and the item returned.
   * @returns this for chaining
   */
  async verify_revert_dropped(): Promise<this> {
    await expect(this.revertDrop).toContainText(expected.droppedText);
    const after = await this.willRevert.boundingBox();
    expect(Math.abs((after?.x ?? 0) - this.revertStartX)).toBeLessThan(40);
    return this;
  }

  private async dropUntil(
    source: Locator,
    target: Locator,
    assertOn: Locator,
    prepare?: () => Promise<void>,
    targetPoint?: { xRatio: number; yRatio: number },
  ): Promise<void> {
    for (let attempt = 0; attempt < 3; attempt++) {
      if (attempt > 0) {
        await this.page.goto(this.path);
        await this.waitForPageLoad();
      }
      if (prepare) {
        await prepare();
      }
      await this.jqueryDrop(source, target, targetPoint);
      try {
        await expect(assertOn).toContainText(expected.droppedText, { timeout: 2000 });
        return;
      } catch {
        // jQuery UI droppable can miss intermittent pointer paths
      }
    }
    await expect(assertOn).toContainText(expected.droppedText);
  }

  private async jqueryDrop(
    source: Locator,
    target: Locator,
    targetPoint?: { xRatio: number; yRatio: number },
  ): Promise<void> {
    await source.scrollIntoViewIfNeeded();
    await target.scrollIntoViewIfNeeded();
    const src = await source.boundingBox();
    const dst = await target.boundingBox();
    if (src === null || dst === null) {
      throw new Error('jqueryDrop: source or target is not visible');
    }
    const start = { x: src.x + src.width / 2, y: src.y + src.height / 2 };
    const xRatio = targetPoint?.xRatio ?? 0.5;
    const yRatio = targetPoint?.yRatio ?? 0.5;
    const end = { x: dst.x + dst.width * xRatio, y: dst.y + dst.height * yRatio };
    await this.page.mouse.move(start.x, start.y);
    await this.page.mouse.down();
    await this.page.mouse.move(end.x, end.y, { steps: 25 });
    await this.page.mouse.up();
  }
}
