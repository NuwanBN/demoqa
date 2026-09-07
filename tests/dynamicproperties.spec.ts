// spec: .crevoai/stories/dynamicproperties.story.md
import { test } from '@config/page.config';
import { dynamicpropertiesExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Dynamicproperties', () => {


  // scenario: Enable After Delay
  test('[AC-1] should enable button after delay', async ({ dynamicpropertiesPage }) => {
    await dynamicpropertiesPage.step_navigate();
    await dynamicpropertiesPage.verify_enable_button_enabled();
  });

  // scenario: Visible After Delay
  test('[AC-2] should show button after delay', async ({ dynamicpropertiesPage }) => {
    await dynamicpropertiesPage.step_navigate();
    await dynamicpropertiesPage.verify_visible_button_visible();
  });

  // scenario: Color Change After Delay
  test('[AC-3] should change button color after delay', async ({ dynamicpropertiesPage }) => {
    await dynamicpropertiesPage.step_navigate();
    await dynamicpropertiesPage.verify_color_change();
  });

});
