// spec: .ordino/stories/resizable.story.md
import { test } from '@config/page.config';
import { resizableExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Resizable', () => {


  // scenario: Restricted Box Resize
  test('[AC-1] should resize the restricted box by drag', async ({ resizablePage }) => {
    await resizablePage.step_navigate();
    await resizablePage.step_resize_restricted();
    await resizablePage.verify_restricted_size();
  });

  // scenario: Unrestricted Box Resize
  test('[AC-2] should resize the unrestricted box by drag', async ({ resizablePage }) => {
    await resizablePage.step_navigate();
    await resizablePage.step_resize_unrestricted();
    await resizablePage.verify_unrestricted_size();
  });

});
