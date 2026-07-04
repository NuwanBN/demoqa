// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { expect, Locator } from '@playwright/test';


export class WebtablesPage extends BasePage {
  readonly path = '/webtables';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private addButton = this.page.locator('//*[@id="addNewRecordButton"]');
  // locator-helper: dom_id
  private searchInput = this.page.locator('//*[@id="searchBox"]');
  // locator-helper: dom_id
  private firstNameInput = this.page.locator('//*[@id="firstName"]');
  // locator-helper: dom_id
  private lastNameInput = this.page.locator('//*[@id="lastName"]');
  // locator-helper: dom_id
  private emailInput = this.page.locator('//*[@id="userEmail"]');
  // locator-helper: dom_id
  private ageInput = this.page.locator('//*[@id="age"]');
  // locator-helper: dom_id
  private salaryInput = this.page.locator('//*[@id="salary"]');
  // locator-helper: dom_id
  private departmentInput = this.page.locator('//*[@id="department"]');
  // locator-helper: dom_id
  private submitButton = this.page.locator('//*[@id="submit"]');
  // locator-helper: dyn_param
  private tableRow(firstName: string): Locator {
    return this.page.locator(`//tr[td[normalize-space()="${firstName}"]]`);
  }
  // locator-helper: dyn_param
  private editButton(firstName: string): Locator {
    return this.page.locator(`//tr[td[normalize-space()="${firstName}"]]//span[@title="Edit"]`);
  }
  // locator-helper: dyn_param
  private deleteButton(firstName: string): Locator {
    return this.page.locator(`//tr[td[normalize-space()="${firstName}"]]//span[@title="Delete"]`);
  }

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Web Tables page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Opens the registration form to add a record.
   * @returns this for chaining
   */
  async step_open_add_form(): Promise<this> {
    await this.addButton.click();
    return this;
  }

  /**
   * Fills the registration form fields.
   * @param firstName - First name
   * @param lastName - Last name
   * @param email - Email address
   * @param age - Age
   * @param salary - Salary
   * @param department - Department
   * @returns this for chaining
   */
  async step_fill_record(firstName: string, lastName: string, email: string, age: string, salary: string, department: string): Promise<this> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.ageInput.fill(age);
    await this.salaryInput.fill(salary);
    await this.departmentInput.fill(department);
    return this;
  }

  /**
   * Submits the registration form.
   * @returns this for chaining
   */
  async step_submit_record(): Promise<this> {
    await this.submitButton.click();
    return this;
  }

  /**
   * Opens the edit form for the row matching first name.
   * @param firstName - First name identifying the row
   * @returns this for chaining
   */
  async step_open_edit(firstName: string): Promise<this> {
    await this.editButton(firstName).click();
    return this;
  }

  /**
   * Updates first name and department on the open form.
   * @param firstName - New first name
   * @param department - New department
   * @returns this for chaining
   */
  async step_update_record(firstName: string, department: string): Promise<this> {
    await this.firstNameInput.fill(firstName);
    await this.departmentInput.fill(department);
    return this;
  }

  /**
   * Deletes the row matching first name.
   * @param firstName - First name identifying the row
   * @returns this for chaining
   */
  async step_delete_record(firstName: string): Promise<this> {
    await this.deleteButton(firstName).click();
    return this;
  }

  /**
   * Searches the table by name.
   * @param name - Name text to filter rows
   * @returns this for chaining
   */
  async step_search(name: string): Promise<this> {
    await this.searchInput.fill(name);
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies a record with the given first name is in the table.
   * @param firstName - First name to find
   * @returns this for chaining
   */
  async verify_record_present(firstName: string): Promise<this> {
    await expect(this.tableRow(firstName)).toBeVisible();
    return this;
  }

  /**
   * Verifies the row shows the expected first name and department.
   * @param firstName - Expected first name
   * @param department - Expected department
   * @returns this for chaining
   */
  async verify_record_values(firstName: string, department: string): Promise<this> {
    const row = this.tableRow(firstName);
    await expect(row).toBeVisible();
    await expect(row).toContainText(department);
    return this;
  }

  /**
   * Verifies a record with the given first name is not in the table.
   * @param firstName - First name that should be absent
   * @returns this for chaining
   */
  async verify_record_absent(firstName: string): Promise<this> {
    await expect(this.tableRow(firstName)).toHaveCount(0);
    return this;
  }

  /**
   * Verifies search shows the matching name and hides a non-matching name.
   * @param matchingName - Name that should remain visible
   * @param excludedName - Name that should be filtered out
   * @returns this for chaining
   */
  async verify_search_results(matchingName: string, excludedName: string): Promise<this> {
    await expect(this.tableRow(matchingName)).toBeVisible();
    await expect(this.tableRow(excludedName)).toHaveCount(0);
    return this;
  }
}

