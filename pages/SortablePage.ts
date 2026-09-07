// AUTO-GENERATED — edit this file directly; use crevoai_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { expect, Locator } from '@playwright/test';


export class SortablePage extends BasePage {
  readonly path = '/sortable';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: role_name
  private gridLink = this.page.getByRole('tab', { name: 'Grid', exact: true });
  // locator-helper: dyn_param
  private listItem(label: string): Locator {
    return this.page.locator(`//*[@id="demo-tabpane-list"]//div[contains(@class,"list-group-item") and normalize-space()="${label}"]`);
  }
  // locator-helper: dyn_param
  private gridItem(label: string): Locator {
    return this.page.locator(`//*[@id="demo-tabpane-grid"]//div[contains(@class,"list-group-item") and normalize-space()="${label}"]`);
  }
  // locator-helper: nth
  private listFirstItem = this.page.locator('(//*[@id="demo-tabpane-list"]//div[contains(@class,"list-group-item")])[1]');
  // locator-helper: nth
  private gridFirstItem = this.page.locator('(//*[@id="demo-tabpane-grid"]//div[contains(@class,"list-group-item")])[1]');
  // locator-helper: nth
  private gridSecondItem = this.page.locator('(//*[@id="demo-tabpane-grid"]//div[contains(@class,"list-group-item")])[2]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Sortable page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Drags a list item onto another list item.
   * @param source - Source (string)
   * @param target - Target (string)
   * @returns this for chaining
   */
  async step_reorder_list(source: string, target: string): Promise<this> {
    await this.dragUntilFirst(source, target, this.listItem.bind(this), this.listFirstItem, source);
    return this;
  }

  /**
   * Opens Grid and drags a grid item onto another.
   * @param source - Source (string)
   * @param target - Target (string)
   * @returns this for chaining
   */
  async step_reorder_grid(source: string, target: string): Promise<this> {
    await this.dragUntilFirst(source, target, this.gridItem.bind(this), this.gridFirstItem, target, async () => {
      await this.gridLink.click({ force: true });
    });
    return this;
  }

  private async dragUntilFirst(
    sourceLabel: string,
    targetLabel: string,
    item: (label: string) => Locator,
    firstItem: Locator,
    expectedFirst: string,
    prepare?: () => Promise<void>,
  ): Promise<void> {
    for (let attempt = 0; attempt < 3; attempt++) {
      if (attempt > 0) {
        await this.page.goto(this.path);
        await this.waitForPageLoad();
      }
      if (prepare) {
        await prepare();
      }
      const source = item(sourceLabel);
      const target = item(targetLabel);
      await source.scrollIntoViewIfNeeded();
      await target.scrollIntoViewIfNeeded();
      await source.dragTo(target, {
        force: true,
        sourcePosition: { x: 20, y: 10 },
        targetPosition: { x: 20, y: 10 },
      });
      try {
        await expect(firstItem).toHaveText(expectedFirst, { timeout: 2000 });
        return;
      } catch {
        // HTML5 sortable can miss intermittent pointer paths — reset and retry
      }
    }
    await expect(firstItem).toHaveText(expectedFirst);
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the first list item text.
   * @param label - Label (string)
   * @returns this for chaining
   */
  async verify_list_first(label: string): Promise<this> {
    await expect(this.listFirstItem).toHaveText(label);
    return this;
  }

  /**
   * Verifies the first two grid items.
   * @param first - First (string)
   * @param second - Second (string)
   * @returns this for chaining
   */
  async verify_grid_order(first: string, second: string): Promise<this> {
    await expect(this.gridFirstItem).toHaveText(first);
    await expect(this.gridSecondItem).toHaveText(second);
    return this;
  }
}
