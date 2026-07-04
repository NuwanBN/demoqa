// spec: .ordino/stories/buttons.story.md
import { test } from '@config/page.config';
import { buttonsExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Buttons', () => {


  // scenario: Double Click
  test('[AC-1] should show message on double click', async ({ buttonsPage }) => {
    await buttonsPage.step_navigate();
    await buttonsPage.step_double_click();
    await buttonsPage.verify_double_click_message();
  });

  // scenario: Right Click
  test('[AC-2] should show message on right click', async ({ buttonsPage }) => {
    await buttonsPage.step_navigate();
    await buttonsPage.step_right_click();
    await buttonsPage.verify_right_click_message();
  });

  // scenario: Dynamic Click
  test('[AC-3] should show message on dynamic click', async ({ buttonsPage }) => {
    await buttonsPage.step_navigate();
    await buttonsPage.step_dynamic_click();
    await buttonsPage.verify_dynamic_click_message();
  });


});
