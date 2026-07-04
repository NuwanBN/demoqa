// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { expect, Locator } from '@playwright/test';


export class SelectmenuPage extends BasePage {
  readonly path = '/select-menu';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private withOptGroupDiv = this.page.locator('//*[@id="withOptGroup"]');
  // locator-helper: dom_id
  private selectOneDiv = this.page.locator('//*[@id="selectOne"]');
  // locator-helper: dom_id
  private oldSelectMenuSelect = this.page.locator('//*[@id="oldSelectMenu"]');
  // locator-helper: dom_id
  private multiSelectInput = this.page.locator('//*[@id="react-select-4-input"]');
  // locator-helper: dyn_param
  private menuOption(label: string): Locator {
    return this.page.locator(`//div[@role="listbox"]//div[@role="option" and normalize-space()="${label}"]`);
  }
  // locator-helper: role_name
  private removeGreenButton = this.page.getByRole('button', { name: 'Remove Green', exact: true });
  // locator-helper: role_name
  private removeBlueButton = this.page.getByRole('button', { name: 'Remove Blue', exact: true });

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Select Menu page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Opens Select Value and picks a group option.
   * @param option - Option (string)
   * @returns this for chaining
   */
  async step_select_value(option: string): Promise<this> {
    await this.withOptGroupDiv.scrollIntoViewIfNeeded();
    await this.withOptGroupDiv.click({ force: true });
    await this.menuOption(option).click({ force: true });
    return this;
  }

  /**
   * Opens Select One and picks a title.
   * @param option - Option (string)
   * @returns this for chaining
   */
  async step_select_one(option: string): Promise<this> {
    await this.selectOneDiv.scrollIntoViewIfNeeded();
    await this.selectOneDiv.click({ force: true });
    await this.menuOption(option).click({ force: true });
    return this;
  }

  /**
   * Selects a color in the old-style select menu.
   * @param value - Value (string)
   * @returns this for chaining
   */
  async step_select_old_style(value: string): Promise<this> {
    await this.oldSelectMenuSelect.scrollIntoViewIfNeeded();
    await this.oldSelectMenuSelect.selectOption(value);
    return this;
  }

  /**
   * Opens the multiselect and picks two colors.
   * @param color1 - Color1 (string)
   * @param color2 - Color2 (string)
   * @returns this for chaining
   */
  async step_select_multi(color1: string, color2: string): Promise<this> {
    await this.multiSelectInput.scrollIntoViewIfNeeded();
    await this.multiSelectInput.click({ force: true });
    await this.menuOption(color1).click({ force: true });
    await this.menuOption(color2).click({ force: true });
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies Select Value shows the chosen option.
   * @param option - Option (string)
   * @returns this for chaining
   */
  async verify_select_value(option: string): Promise<this> {
    await expect(this.withOptGroupDiv).toContainText(option);
    return this;
  }

  /**
   * Verifies Select One shows the chosen title.
   * @param option - Option (string)
   * @returns this for chaining
   */
  async verify_select_one(option: string): Promise<this> {
    await expect(this.selectOneDiv).toContainText(option);
    return this;
  }

  /**
   * Verifies the old-style select has the chosen value.
   * @param value - Value (string)
   * @returns this for chaining
   */
  async verify_old_style(value: string): Promise<this> {
    await expect(this.oldSelectMenuSelect).toHaveValue(value);
    return this;
  }

  /**
   * Verifies Green and Blue are selected in the multiselect.
   * @returns this for chaining
   */
  async verify_multi_selected(): Promise<this> {
    await expect(this.removeGreenButton).toBeVisible();
    await expect(this.removeBlueButton).toBeVisible();
    return this;
  }
}
