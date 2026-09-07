// AUTO-GENERATED — edit this file directly; use crevoai_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { accordianExpected as expected } from '@config/page-loader';
import { expect, Locator } from '@playwright/test';


export class AccordianPage extends BasePage {
  readonly path = '/accordian';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: role_name
  private section1Button = this.page.getByRole('button', { name: 'What is Lorem Ipsum?', exact: true });
  // locator-helper: role_name
  private section2Button = this.page.getByRole('button', { name: 'Where does it come from?', exact: true });
  // locator-helper: role_name
  private section3Button = this.page.getByRole('button', { name: 'Why do we use it?', exact: true });
  // locator-helper: dyn_param
  private sectionBody(heading: string): Locator {
    return this.page.locator(`//button[normalize-space()="${heading}"]/ancestor::div[contains(@class,"accordion-item")]//div[contains(@class,"accordion-body")]`);
  }

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Accordian page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Expands the second accordion section.
   * @returns this for chaining
   */
  async step_expand_section2(): Promise<this> {
    await this.section2Button.click();
    return this;
  }

  /**
   * Expands the third accordion section.
   * @returns this for chaining
   */
  async step_expand_section3(): Promise<this> {
    await this.section3Button.click();
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the first section content is visible.
   * @returns this for chaining
   */
  async verify_section1_content(): Promise<this> {
    const body = this.sectionBody(expected.section1Heading);
    await expect(body).toBeVisible();
    await expect(body).toContainText(expected.section1Text);
    return this;
  }

  /**
   * Verifies the second section content is visible.
   * @returns this for chaining
   */
  async verify_section2_content(): Promise<this> {
    const body = this.sectionBody(expected.section2Heading);
    await expect(body).toBeVisible();
    await expect(body).toContainText(expected.section2Text);
    return this;
  }

  /**
   * Verifies the third section content is visible.
   * @returns this for chaining
   */
  async verify_section3_content(): Promise<this> {
    const body = this.sectionBody(expected.section3Heading);
    await expect(body).toBeVisible();
    await expect(body).toContainText(expected.section3Text);
    return this;
  }
}
