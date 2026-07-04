// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { buttonsExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class ButtonsPage extends BasePage {
  readonly path = '/buttons';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private doubleClickMeButton = this.page.locator('//*[@id="doubleClickBtn"]');
  // locator-helper: dom_id
  private rightClickMeButton = this.page.locator('//*[@id="rightClickBtn"]');
  // locator-helper: role_name
  private clickMeButton = this.page.getByRole('button', { name: 'Click Me', exact: true });
  // locator-helper: dom_id
  private doubleClickMessage = this.page.locator('//*[@id="doubleClickMessage"]');
  // locator-helper: dom_id
  private rightClickMessage = this.page.locator('//*[@id="rightClickMessage"]');
  // locator-helper: dom_id
  private dynamicClickMessage = this.page.locator('//*[@id="dynamicClickMessage"]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Buttons page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Double-clicks the Double Click Me button.
   * @returns this for chaining
   */
  async step_double_click(): Promise<this> {
    await this.doubleClickMeButton.dblclick();
    return this;
  }

  /**
   * Right-clicks the Right Click Me button.
   * @returns this for chaining
   */
  async step_right_click(): Promise<this> {
    await this.rightClickMeButton.click({ button: 'right' });
    return this;
  }

  /**
   * Clicks the Click Me button.
   * @returns this for chaining
   */
  async step_dynamic_click(): Promise<this> {
    await this.clickMeButton.click();
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the double click success message is shown.
   * @returns this for chaining
   */
  async verify_double_click_message(): Promise<this> {
    await this.doubleClickMessage.waitFor({ state: 'visible' });
    await expect(this.doubleClickMessage).toContainText(expected.doubleClickMessage);
    return this;
  }

  /**
   * Verifies the right click success message is shown.
   * @returns this for chaining
   */
  async verify_right_click_message(): Promise<this> {
    await this.rightClickMessage.waitFor({ state: 'visible' });
    await expect(this.rightClickMessage).toContainText(expected.rightClickMessage);
    return this;
  }

  /**
   * Verifies the dynamic click success message is shown.
   * @returns this for chaining
   */
  async verify_dynamic_click_message(): Promise<this> {
    await this.dynamicClickMessage.waitFor({ state: 'visible' });
    await expect(this.dynamicClickMessage).toContainText(expected.dynamicClickMessage);
    return this;
  }
}
