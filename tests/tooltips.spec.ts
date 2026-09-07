// spec: .crevoai/stories/tooltips.story.md
import { test } from '@config/page.config';
import { tooltipsExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Tooltips', () => {

  // scenario: Button Tooltip
  test('[AC-1] should show button tooltip on hover', async ({ tooltipsPage }) => {
    await tooltipsPage.step_navigate();
    await tooltipsPage.step_hover_button();
  });

  // scenario: Text Field Tooltip
  test('[AC-2] should show text field tooltip on hover', async ({ tooltipsPage }) => {
    await tooltipsPage.step_navigate();
    await tooltipsPage.step_hover_text_field();
  });

  // scenario: Contrary Link Tooltip
  test('[AC-3] should show Contrary tooltip on hover', async ({ tooltipsPage }) => {
    await tooltipsPage.step_navigate();
    await tooltipsPage.step_hover_contrary();
  });

});
