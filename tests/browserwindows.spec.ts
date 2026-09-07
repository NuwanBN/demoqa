// spec: .crevoai/stories/browserwindows.story.md
import { test } from '@config/page.config';
import { browserwindowsExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Browserwindows', () => {

  // scenario: New Tab
  test('[AC-1] should open sample page in new tab', async ({ browserwindowsPage }) => {
    await browserwindowsPage.step_navigate();
    await browserwindowsPage.step_open_new_tab();
  });

  // scenario: New Window
  test('[AC-2] should open sample page in new window', async ({ browserwindowsPage }) => {
    await browserwindowsPage.step_navigate();
    await browserwindowsPage.step_open_new_window();
  });

  // scenario: New Window Message
  test('[AC-3] should open message in new window', async ({ browserwindowsPage }) => {
    await browserwindowsPage.step_navigate();
    await browserwindowsPage.step_open_new_window_message();
  });

});
