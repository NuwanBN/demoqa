// spec: .crevoai/stories/practiceform.story.md
import { test } from '@config/page.config';
import { practiceformExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Practiceform', () => {

  // scenario: Happy Path Submit
  test('[AC-1] should submit practice form and show modal', async ({ practiceformPage }) => {
    await practiceformPage.step_navigate();
    await practiceformPage.step_fill_form();
    await practiceformPage.step_submit();
    await practiceformPage.verify_submission_modal();
  });

});
