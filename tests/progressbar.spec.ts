// spec: .crevoai/stories/progressbar.story.md
import { test } from '@config/page.config';
import { progressbarExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Progressbar', () => {

  // scenario: Start And Stop Progress
  test('[AC-1] should start then stop progress', async ({ progressbarPage }) => {
    await progressbarPage.step_navigate();
    await progressbarPage.step_start_progress();
    await progressbarPage.step_stop_progress();
    await progressbarPage.verify_progress_stopped();
  });

});
