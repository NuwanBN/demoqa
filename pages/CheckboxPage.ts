// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { checkboxExpected as expected } from '@config/page-loader';
import { expect, Locator } from '@playwright/test';


export class CheckboxPage extends BasePage {
  readonly path = '/checkbox';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: role_name
  private selectHomeSpan = this.page.getByRole('checkbox', { name: 'Select Home', exact: true });
  // locator-helper: dom_id
  private resultPanel = this.page.locator('//*[@id="result"]');
  // locator-helper: dyn_param
  private treeCheckbox(label: string): Locator {
    return this.page.getByRole('checkbox', { name: label, exact: true });
  }
  // locator-helper: dyn_param
  private expandToggle(label: string): Locator {
    return this.page.locator(`//span[@aria-label="${label}"]/preceding-sibling::span[contains(@class,"rc-tree-switcher")]`);
  }

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Check Box page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Selects the Home checkbox in the tree.
   * @returns this for chaining
   */
  async step_select_home(): Promise<this> {
    await this.selectHomeSpan.check();
    return this;
  }

  /**
   * Expands Home → Desktop → Documents → WorkSpace for nested levels.
   * @returns this for chaining
   */
  async step_expand_tree(): Promise<this> {
    await this.expandToggle(expected.homeLabel).click();
    await this.expandToggle(expected.desktopLabel).click();
    await this.expandToggle(expected.documentsLabel).click();
    await this.expandToggle(expected.workSpaceLabel).click();
    return this;
  }

  /**
   * Checks Desktop, Notes, Commands, and React at nested levels.
   * @returns this for chaining
   */
  async step_select_levels(): Promise<this> {
    await this.treeCheckbox(expected.desktopLabel).check();
    await this.treeCheckbox(expected.commandsLabel).check();
    await this.treeCheckbox(expected.notesLabel).check();
    await this.treeCheckbox(expected.reactLabel).check();
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the Home checkbox is checked.
   * @returns this for chaining
   */
  async verify_home_checked(): Promise<this> {
    await this.selectHomeSpan.waitFor({ state: 'visible' });
    await expect(this.selectHomeSpan).toBeChecked();
    return this;
  }

  /**
   * Verifies the result panel lists the selected tree items.
   * @returns this for chaining
   */
  async verify_result(): Promise<this> {
    await this.resultPanel.waitFor({ state: 'visible' });
    await expect(this.resultPanel).toContainText(expected.selectedLabel);
    await expect(this.resultPanel).toContainText(expected.home);
    await expect(this.resultPanel).toContainText(expected.desktop);
    await expect(this.resultPanel).toContainText(expected.documents);
    await expect(this.resultPanel).toContainText(expected.downloads);
    return this;
  }

  /**
   * Verifies level checkboxes are checked and listed in the result panel.
   * @returns this for chaining
   */
  async verify_levels_selected(): Promise<this> {
    await expect(this.treeCheckbox(expected.desktopLabel)).toBeChecked();
    await expect(this.treeCheckbox(expected.notesLabel)).toBeChecked();
    await expect(this.treeCheckbox(expected.commandsLabel)).toBeChecked();
    await expect(this.treeCheckbox(expected.reactLabel)).toBeChecked();
    await this.resultPanel.waitFor({ state: 'visible' });
    await expect(this.resultPanel).toContainText(expected.selectedLabel);
    await expect(this.resultPanel).toContainText(expected.desktop);
    await expect(this.resultPanel).toContainText(expected.notes);
    await expect(this.resultPanel).toContainText(expected.commands);
    await expect(this.resultPanel).toContainText(expected.react);
    return this;
  }
}
