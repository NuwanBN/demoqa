// spec: .crevoai/stories/radio.story.md
import { test } from '@config/page.config';
import { radioExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Radio', () => {


  // scenario: Happy Path
  test('[AC-1] should select Yes and show selection', async ({ radioPage }) => {
    await radioPage.step_navigate();
    await radioPage.step_select_yes();
    await radioPage.verify_yes_selected();
  });

});
