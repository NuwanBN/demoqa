// spec: .crevoai/stories/checkbox.story.md
import { test } from '@config/page.config';
import { checkboxExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Checkbox', () => {


  // scenario: Happy Path
  test('[AC-1] should select Home and show result items', async ({ checkboxPage }) => {
    await checkboxPage.step_navigate();
    await checkboxPage.step_select_home();
    await checkboxPage.verify_home_checked();
    await checkboxPage.verify_result();
  });

  // scenario: Expand Tree And Check Levels
  test('[AC-2] should check boxes at expanded tree levels', async ({ checkboxPage }) => {
    await checkboxPage.step_navigate();
    await checkboxPage.step_expand_tree();
    await checkboxPage.step_select_levels();
    await checkboxPage.verify_levels_selected();
  });

});
