// AUTO-GENERATED — edit this file directly; use crevoai_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { tooltipsExpected as expected } from '@config/page-loader';
import { expect, Locator } from '@playwright/test';


export class TooltipsPage extends BasePage {
  readonly path = '/tool-tips';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private toolTipButton = this.page.locator('//*[@id="toolTipButton"]');
  // locator-helper: dom_id
  private toolTipTextField = this.page.locator('//*[@id="toolTipTextField"]');
  // locator-helper: attr_combo
  private contraryLink = this.page.locator('//*[@id="texToolTopContainer"]//a[normalize-space()="Contrary"]');
  // locator-helper: dom_id
  private buttonTooltip = this.page.locator('//*[@id="buttonToolTip"]');
  // locator-helper: dom_id
  private textFieldTooltip = this.page.locator('//*[@id="textFieldToolTip"]');
  // locator-helper: dom_id
  private contraryTooltip = this.page.locator('//*[@id="contraryTexToolTip"]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Tool Tips page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Hovers the tooltip button and verifies its message.
   * @returns this for chaining
   */
  async step_hover_button(): Promise<this> {
    await this.triggerTooltip(this.toolTipButton);
    await expect(this.buttonTooltip).toBeVisible({ timeout: 10000 });
    await expect(this.buttonTooltip).toContainText(expected.buttonTooltip);
    return this;
  }

  /**
   * Hovers the tooltip text field and verifies its message.
   * @returns this for chaining
   */
  async step_hover_text_field(): Promise<this> {
    await this.triggerTooltip(this.toolTipTextField);
    await expect(this.textFieldTooltip).toBeVisible({ timeout: 10000 });
    await expect(this.textFieldTooltip).toContainText(expected.textFieldTooltip);
    return this;
  }

  /**
   * Hovers the Contrary link and verifies its message.
   * @returns this for chaining
   */
  async step_hover_contrary(): Promise<this> {
    await this.triggerTooltip(this.contraryLink);
    await expect(this.contraryTooltip).toBeVisible({ timeout: 10000 });
    await expect(this.contraryTooltip).toContainText(expected.contraryTooltip);
    return this;
  }

  private async triggerTooltip(target: Locator): Promise<void> {
    await target.scrollIntoViewIfNeeded();
    await target.dispatchEvent('mouseover');
    await target.dispatchEvent('mouseenter');
  }
}
