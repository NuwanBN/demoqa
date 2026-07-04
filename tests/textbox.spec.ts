// spec: .ordino/stories/textbox.story.md
import { test } from '@config/page.config';
import { textboxExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Textbox', () => {


  // scenario: Happy Path
  test('[AC-1] should submit full name email and addresses', async ({ textboxPage }) => {
    await textboxPage.step_navigate();
    await textboxPage.step_fill_form(expected.fullName, expected.email, expected.currentAddress, expected.permanentAddress);
    await textboxPage.step_submit();
    await textboxPage.verify_output();
  });

});
