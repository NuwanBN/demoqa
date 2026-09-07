// spec: .crevoai/stories/modaldialogs.story.md
import { test } from '@config/page.config';
import { modaldialogsExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Modaldialogs', () => {


  // scenario: Small Modal
  test('[AC-1] should open and close small modal', async ({ modaldialogsPage }) => {
    await modaldialogsPage.step_navigate();
    await modaldialogsPage.step_open_small_modal();
    await modaldialogsPage.verify_small_modal();
    await modaldialogsPage.step_close_small_modal();
  });

  // scenario: Large Modal
  test('[AC-2] should open and close large modal', async ({ modaldialogsPage }) => {
    await modaldialogsPage.step_navigate();
    await modaldialogsPage.step_open_large_modal();
    await modaldialogsPage.verify_large_modal();
    await modaldialogsPage.step_close_large_modal();
  });

});
