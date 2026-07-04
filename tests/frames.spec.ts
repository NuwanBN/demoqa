// spec: .ordino/stories/frames.story.md
import { test } from '@config/page.config';
import { framesExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Frames', () => {

  // scenario: Large Frame
  test('[AC-1] should show sample text in large frame', async ({ framesPage }) => {
    await framesPage.step_navigate();
    await framesPage.verify_large_frame_text();
  });

  // scenario: Small Frame
  test('[AC-2] should show sample text in small frame', async ({ framesPage }) => {
    await framesPage.step_navigate();
    await framesPage.verify_small_frame_text();
  });

});
