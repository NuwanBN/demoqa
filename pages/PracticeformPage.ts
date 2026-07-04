// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { practiceformExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class PracticeformPage extends BasePage {
  readonly path = '/automation-practice-form';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private firstNameInput = this.page.locator('//*[@id="firstName"]');
  // locator-helper: dom_id
  private lastNameInput = this.page.locator('//*[@id="lastName"]');
  // locator-helper: dom_id
  private emailInput = this.page.locator('//*[@id="userEmail"]');
  // locator-helper: attr_combo
  private maleGenderLabel = this.page.locator('//label[@for="gender-radio-1"]');
  // locator-helper: dom_id
  private mobileInput = this.page.locator('//*[@id="userNumber"]');
  // locator-helper: attr_combo
  private sportsHobbyLabel = this.page.locator('//label[@for="hobbies-checkbox-1"]');
  // locator-helper: dom_id
  private pictureInput = this.page.locator('//*[@id="uploadPicture"]');
  // locator-helper: dom_id
  private addressInput = this.page.locator('//*[@id="currentAddress"]');
  // locator-helper: dom_id
  private stateContainer = this.page.locator('//*[@id="state"]');
  // locator-helper: dom_id
  private cityContainer = this.page.locator('//*[@id="city"]');
  // locator-helper: dom_id
  private stateInput = this.page.locator('//*[@id="react-select-3-input"]');
  // locator-helper: dom_id
  private cityInput = this.page.locator('//*[@id="react-select-4-input"]');
  // locator-helper: dom_id
  private submitButton = this.page.locator('//*[@id="submit"]');
  // locator-helper: dom_id
  private resultModalTitle = this.page.locator('//*[@id="example-modal-sizes-title-lg"]');
  // locator-helper: attr_combo
  private resultModalBody = this.page.locator('//div[contains(@class,"modal-body")]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Practice Form page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Fills the practice form with expected student data.
   * @returns this for chaining
   */
  async step_fill_form(): Promise<this> {
    await this.firstNameInput.fill(expected.firstName);
    await this.lastNameInput.fill(expected.lastName);
    await this.emailInput.fill(expected.email);
    await this.maleGenderLabel.click();
    await this.mobileInput.fill(expected.mobile);
    await this.sportsHobbyLabel.click();
    await this.pictureInput.setInputFiles(['support/data/practiceform/sample.png']);
    await this.addressInput.fill(expected.address);
    await this.stateContainer.click();
    await this.stateInput.fill(expected.state);
    await this.page.keyboard.press('Enter');
    await this.cityContainer.click();
    await this.cityInput.fill(expected.city);
    await this.page.keyboard.press('Enter');
    return this;
  }

  /**
   * Submits the practice form.
   * @returns this for chaining
   */
  async step_submit(): Promise<this> {
    await this.submitButton.scrollIntoViewIfNeeded();
    await this.submitButton.click({ force: true });
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the submission modal shows the submitted values.
   * @returns this for chaining
   */
  async verify_submission_modal(): Promise<this> {
    await this.resultModalTitle.waitFor({ state: 'visible', timeout: 15000 });
    await expect(this.resultModalTitle).toContainText(expected.modalTitle);
    await expect(this.resultModalBody).toContainText(`${expected.firstName} ${expected.lastName}`);
    await expect(this.resultModalBody).toContainText(expected.email);
    await expect(this.resultModalBody).toContainText(expected.gender);
    await expect(this.resultModalBody).toContainText(expected.mobile);
    await expect(this.resultModalBody).toContainText(expected.hobby);
    await expect(this.resultModalBody).toContainText(expected.pictureFileName);
    await expect(this.resultModalBody).toContainText(expected.address);
    await expect(this.resultModalBody).toContainText(expected.state);
    await expect(this.resultModalBody).toContainText(expected.city);
    return this;
  }
}
