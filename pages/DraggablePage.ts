// AUTO-GENERATED — edit this file directly; use crevoai_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { draggableExpected as expected } from '@config/page-loader';
import { expect, Locator } from '@playwright/test';


export class DraggablePage extends BasePage {
  readonly path = '/dragabble';

  private simpleDelta = { x: 0, y: 0 };
  private axisXDelta = { x: 0, y: 0 };
  private axisYDelta = { x: 0, y: 0 };
  private containedDelta = { x: 0, y: 0 };
  private containedInside = false;
  private cursorDelta = { x: 0, y: 0 };

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private simpleBox = this.page.locator('//*[@id="dragBox"]');
  // locator-helper: dom_id
  private axisTab = this.page.locator('//*[@id="draggableExample-tab-axisRestriction"]');
  // locator-helper: dom_id
  private restrictedX = this.page.locator('//*[@id="restrictedX"]');
  // locator-helper: dom_id
  private restrictedY = this.page.locator('//*[@id="restrictedY"]');
  // locator-helper: dom_id
  private containerTab = this.page.locator('//*[@id="draggableExample-tab-containerRestriction"]');
  // locator-helper: attr_combo
  private containedBox = this.page.locator('//*[@id="containmentWrapper"]/div');
  // locator-helper: dom_id
  private wrapper = this.page.locator('//*[@id="containmentWrapper"]');
  // locator-helper: dom_id
  private cursorTab = this.page.locator('//*[@id="draggableExample-tab-cursorStyle"]');
  // locator-helper: dom_id
  private cursorCenter = this.page.locator('//*[@id="cursorCenter"]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Draggable page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    // DemoQA ad iframes intercept pointer events over the upper widgets
    await this.page.addStyleTag({
      content: 'iframe[id*="google"], iframe[id*="ad"], #adplus-anchor, .adsbygoogle { display: none !important; pointer-events: none !important; }',
    });
    return this;
  }

  /**
   * Drags the simple box on both axes.
   * @returns this for chaining
   */
  async step_drag_simple(): Promise<this> {
    this.simpleDelta = await this.dragBy(this.simpleBox, 80, 50);
    return this;
  }

  /**
   * Drags the axis-restricted boxes.
   * @returns this for chaining
   */
  async step_drag_axis_restricted(): Promise<this> {
    await this.axisTab.click({ force: true });
    this.axisXDelta = await this.dragBy(this.restrictedX, 60, 60);
    this.axisYDelta = await this.dragBy(this.restrictedY, 60, 60);
    return this;
  }

  /**
   * Drags the container-restricted box.
   * @returns this for chaining
   */
  async step_drag_container_restricted(): Promise<this> {
    await this.containerTab.click({ force: true });
    this.containedDelta = await this.dragBy(this.containedBox, 100, 80);
    const box = await this.containedBox.boundingBox();
    const wrap = await this.wrapper.boundingBox();
    this.containedInside = Boolean(
      box &&
        wrap &&
        box.x >= wrap.x &&
        box.y >= wrap.y &&
        box.x + box.width <= wrap.x + wrap.width + 1 &&
        box.y + box.height <= wrap.y + wrap.height + 1,
    );
    return this;
  }

  /**
   * Drags the cursor style center box.
   * @returns this for chaining
   */
  async step_drag_cursor_style(): Promise<this> {
    await this.cursorTab.click({ force: true });
    this.cursorDelta = await this.dragBy(this.cursorCenter, 40, 30);
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the simple box moved on both axes.
   * @returns this for chaining
   */
  async verify_simple_moved(): Promise<this> {
    expect(this.simpleDelta.x).toBeGreaterThan(expected.minMove);
    expect(this.simpleDelta.y).toBeGreaterThan(expected.minMove);
    return this;
  }

  /**
   * Verifies axis restrictions were applied.
   * @returns this for chaining
   */
  async verify_axis_restricted(): Promise<this> {
    expect(this.axisXDelta.x).toBeGreaterThan(expected.minMove);
    expect(Math.abs(this.axisXDelta.y)).toBeLessThan(expected.axisTolerance);
    expect(Math.abs(this.axisYDelta.x)).toBeLessThan(expected.axisTolerance);
    expect(this.axisYDelta.y).toBeGreaterThan(expected.minMove);
    return this;
  }

  /**
   * Verifies the box stayed inside the wrapper.
   * @returns this for chaining
   */
  async verify_container_restricted(): Promise<this> {
    expect(Math.abs(this.containedDelta.x) + Math.abs(this.containedDelta.y)).toBeGreaterThan(expected.minMove);
    expect(this.containedInside).toBe(true);
    return this;
  }

  /**
   * Verifies the cursor style box moved.
   * @returns this for chaining
   */
  async verify_cursor_moved(): Promise<this> {
    expect(Math.abs(this.cursorDelta.x) + Math.abs(this.cursorDelta.y)).toBeGreaterThan(expected.minMove);
    return this;
  }

  private async dragBy(locator: Locator, deltaX: number, deltaY: number): Promise<{ x: number; y: number }> {
    await this.page.waitForFunction(() => {
      const g = globalThis as unknown as {
        jQuery?: (sel: string) => { data: (key: string) => unknown };
      };
      return Boolean(g.jQuery?.('#dragBox').data('ui-draggable') || g.jQuery?.('#cursorCenter').data('ui-draggable'));
    });
    const before = await this.readPosition(locator);
    // jQuery UI draggable listens on the element/document; dispatch avoids ad-iframe interception
    await locator.evaluate((el, delta) => {
      const g = globalThis as unknown as {
        document: { dispatchEvent: (e: unknown) => void };
        MouseEvent: new (type: string, init: Record<string, unknown>) => unknown;
      };
      el.scrollIntoView({ block: 'center', inline: 'center' });
      const rect = el.getBoundingClientRect();
      const startX = rect.left + Math.min(10, rect.width / 2);
      const startY = rect.top + Math.min(10, rect.height / 2);
      const fire = (target: { dispatchEvent: (e: unknown) => void }, type: string, x: number, y: number) => {
        target.dispatchEvent(new g.MouseEvent(type, {
          bubbles: true,
          cancelable: true,
          view: globalThis,
          clientX: x,
          clientY: y,
          buttons: type === 'mouseup' ? 0 : 1,
        }));
      };
      fire(el, 'mousedown', startX, startY);
      const steps = 20;
      for (let i = 1; i <= steps; i++) {
        fire(g.document, 'mousemove', startX + (delta.x * i) / steps, startY + (delta.y * i) / steps);
      }
      fire(g.document, 'mouseup', startX + delta.x, startY + delta.y);
    }, { x: deltaX, y: deltaY });
    const after = await this.readPosition(locator);
    const boxDelta = { x: after.x - before.x, y: after.y - before.y };
    const styleDelta = { x: after.left - before.left, y: after.top - before.top };
    if (Math.abs(styleDelta.x) + Math.abs(styleDelta.y) > Math.abs(boxDelta.x) + Math.abs(boxDelta.y)) {
      return styleDelta;
    }
    return boxDelta;
  }

  private async readPosition(locator: Locator): Promise<{ x: number; y: number; left: number; top: number }> {
    return locator.evaluate((el) => {
      const rect = el.getBoundingClientRect();
      return {
        x: rect.x,
        y: rect.y,
        left: Number.parseFloat(el.style.left) || 0,
        top: Number.parseFloat(el.style.top) || 0,
      };
    });
  }
}
