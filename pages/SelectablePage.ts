// AUTO-GENERATED — edit this file directly; use crevoai_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { selectableExpected as expected } from '@config/page-loader';
import { expect, Locator } from '@playwright/test';


export class SelectablePage extends BasePage {
  readonly path = '/selectable';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: role_name
  private gridLink = this.page.getByRole('tab', { name: 'Grid', exact: true });
  // locator-helper: dyn_param
  private listItem(label: string): Locator {
    return this.page.locator(`//*[@id="verticalListContainer"]//li[normalize-space()="${label}"]`);
  }
  // locator-helper: dyn_param
  private gridItem(label: string): Locator {
    return this.page.locator(`//*[@id="gridContainer"]//li[normalize-space()="${label}"]`);
  }

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Selectable page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Selects two items in the list view.
   * @param item1 - Item1 (string)
   * @param item2 - Item2 (string)
   * @returns this for chaining
   */
  async step_select_list_items(item1: string, item2: string): Promise<this> {
    await this.listItem(item1).click({ force: true });
    await this.listItem(item2).click({ force: true });
    return this;
  }

  /**
   * Opens Grid and selects two items.
   * @param item1 - Item1 (string)
   * @param item2 - Item2 (string)
   * @returns this for chaining
   */
  async step_select_grid_items(item1: string, item2: string): Promise<this> {
    await this.gridLink.click({ force: true });
    await this.gridItem(item1).click({ force: true });
    await this.gridItem(item2).click({ force: true });
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies both list items are active.
   * @param item1 - Item1 (string)
   * @param item2 - Item2 (string)
   * @returns this for chaining
   */
  async verify_list_selected(item1: string, item2: string): Promise<this> {
    await expect(this.listItem(item1)).toHaveClass(new RegExp(expected.activeClass));
    await expect(this.listItem(item2)).toHaveClass(new RegExp(expected.activeClass));
    return this;
  }

  /**
   * Verifies both grid items are active.
   * @param item1 - Item1 (string)
   * @param item2 - Item2 (string)
   * @returns this for chaining
   */
  async verify_grid_selected(item1: string, item2: string): Promise<this> {
    await expect(this.gridItem(item1)).toHaveClass(new RegExp(expected.activeClass));
    await expect(this.gridItem(item2)).toHaveClass(new RegExp(expected.activeClass));
    return this;
  }
}
