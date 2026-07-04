// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { expect } from '@playwright/test';


export class MenuPage extends BasePage {
  readonly path = '/menu';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: role_name
  private mainItem1Link = this.page.getByRole('link', { name: 'Main Item 1', exact: true });
  // locator-helper: role_name
  private mainItem2Link = this.page.getByRole('link', { name: 'Main Item 2', exact: true });
  // locator-helper: role_name
  private mainItem3Link = this.page.getByRole('link', { name: 'Main Item 3', exact: true });
  // locator-helper: nth
  private subItem1Link = this.page.locator('(//*[@id="nav"]//a[normalize-space()="Main Item 2"]/following-sibling::ul/li/a[normalize-space()="Sub Item"])[1]');
  // locator-helper: nth
  private subItem2Link = this.page.locator('(//*[@id="nav"]//a[normalize-space()="Main Item 2"]/following-sibling::ul/li/a[normalize-space()="Sub Item"])[2]');
  // locator-helper: role_name
  private subSubListLink = this.page.getByRole('link', { name: 'SUB SUB LIST »', exact: true });
  // locator-helper: role_name
  private subSubItem1Link = this.page.getByRole('link', { name: 'Sub Sub Item 1', exact: true });
  // locator-helper: role_name
  private subSubItem2Link = this.page.getByRole('link', { name: 'Sub Sub Item 2', exact: true });

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Menu page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Hovers Main Item 2 to reveal its submenu.
   * @returns this for chaining
   */
  async step_hover_main_item_2(): Promise<this> {
    await this.mainItem2Link.scrollIntoViewIfNeeded();
    await this.mainItem2Link.hover({ force: true });
    return this;
  }

  /**
   * Hovers SUB SUB LIST to reveal the sub-submenu.
   * @returns this for chaining
   */
  async step_hover_sub_sub_list(): Promise<this> {
    await this.subSubListLink.scrollIntoViewIfNeeded();
    await this.subSubListLink.hover({ force: true });
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the three main menu items are visible.
   * @returns this for chaining
   */
  async verify_main_items_visible(): Promise<this> {
    await expect(this.mainItem1Link).toBeVisible();
    await expect(this.mainItem2Link).toBeVisible();
    await expect(this.mainItem3Link).toBeVisible();
    return this;
  }

  /**
   * Verifies Main Item 2 submenu entries are visible.
   * @returns this for chaining
   */
  async verify_submenu_visible(): Promise<this> {
    await expect(this.subItem1Link).toBeVisible();
    await expect(this.subItem2Link).toBeVisible();
    await expect(this.subSubListLink).toBeVisible();
    return this;
  }

  /**
   * Verifies Sub Sub Item 1 and 2 are visible.
   * @returns this for chaining
   */
  async verify_sub_submenu_visible(): Promise<this> {
    await expect(this.subSubItem1Link).toBeVisible();
    await expect(this.subSubItem2Link).toBeVisible();
    return this;
  }
}
