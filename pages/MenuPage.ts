// AUTO-GENERATED — edit this file directly; use crevoai_generate_code create/register_page for structural changes
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
    await this.settleLayout();
    await this.mainItem2Link.scrollIntoViewIfNeeded();
    await this.mainItem2Link.hover({ force: true });
    return this;
  }

  /**
   * Hovers SUB SUB LIST to reveal the sub-submenu.
   * @returns this for chaining
   */
  async step_hover_sub_sub_list(): Promise<this> {
    // The submenu is held open purely by CSS :hover on the ancestor <li>. DemoQA's
    // late-loading ad banners shift the layout, which slides Main Item 2 out from
    // under the pointer and collapses the whole chain mid-hover. So re-open the
    // parent on each attempt and walk the pointer down without any intervening
    // scroll (scrolling has the same collapsing effect).
    let lastError: unknown;
    for (let attempt = 0; attempt < 4; attempt++) {
      try {
        await this.mainItem2Link.hover({ force: true });
        await this.subSubListLink.waitFor({ state: 'visible', timeout: 3000 });
        await this.subSubListLink.hover({ force: true });
        await this.subSubItem1Link.waitFor({ state: 'visible', timeout: 3000 });
        return this;
      } catch (err) {
        lastError = err;
        await this.settleLayout();
      }
    }
    throw lastError;
  }

  /**
   * Waits for DemoQA's ad iframes to finish loading so the menu stops moving.
   * Bounded, because the ad network does not always reach a networkidle state.
   */
  private async settleLayout(): Promise<void> {
    try {
      await this.page.waitForLoadState('networkidle', { timeout: 5000 });
    } catch {
      // Ads may never settle; the hover retry below absorbs the residual shift.
    }
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
