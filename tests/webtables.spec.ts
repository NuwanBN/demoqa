// spec: .ordino/stories/webtables.story.md
import { test } from '@config/page.config';
import { webtablesExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Webtables', () => {

  // scenario: Add Record
  test('[AC-1] should add a new record to the table', async ({ webtablesPage }) => {
    await webtablesPage.step_navigate();
    await webtablesPage.step_open_add_form();
    await webtablesPage.step_fill_record(expected.firstName, expected.lastName, expected.email, expected.age, expected.salary, expected.department);
    await webtablesPage.step_submit_record();
    await webtablesPage.verify_record_present(expected.firstName);
  });

  // scenario: Edit Record
  test('[AC-2] should edit an existing record in the table', async ({ webtablesPage }) => {
    await webtablesPage.step_navigate();
    await webtablesPage.step_open_add_form();
    await webtablesPage.step_fill_record(expected.firstName, expected.lastName, expected.email, expected.age, expected.salary, expected.department);
    await webtablesPage.step_submit_record();
    await webtablesPage.step_open_edit(expected.firstName);
    await webtablesPage.step_update_record(expected.editedFirstName, expected.editedDepartment);
    await webtablesPage.step_submit_record();
    await webtablesPage.verify_record_values(expected.editedFirstName, expected.editedDepartment);
    await webtablesPage.verify_record_absent(expected.firstName);
  });

  // scenario: Delete Record
  test('[AC-3] should delete a record from the table', async ({ webtablesPage }) => {
    await webtablesPage.step_navigate();
    await webtablesPage.step_open_add_form();
    await webtablesPage.step_fill_record(expected.firstName, expected.lastName, expected.email, expected.age, expected.salary, expected.department);
    await webtablesPage.step_submit_record();
    await webtablesPage.step_delete_record(expected.firstName);
    await webtablesPage.verify_record_absent(expected.firstName);
  });

  // scenario: Search By Name
  test('[AC-4] should search by name and show matching rows', async ({ webtablesPage }) => {
    await webtablesPage.step_navigate();
    await webtablesPage.step_search(expected.searchName);
    await webtablesPage.verify_search_results(expected.searchName, expected.excludedName);
  });

});

