// spec: .ordino/stories/nestedframes.story.md
import { test } from '@config/page.config';
import { nestedframesExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Nestedframes', () => {

  // scenario: Parent Frame
  test('[AC-1] should show parent frame text', async ({ nestedframesPage }) => {
    await nestedframesPage.step_navigate();
    await nestedframesPage.verify_parent_frame_text();
  });

  // scenario: Child Frame
  test('[AC-2] should show child iframe text', async ({ nestedframesPage }) => {
    await nestedframesPage.step_navigate();
    await nestedframesPage.verify_child_frame_text();
  });

});
