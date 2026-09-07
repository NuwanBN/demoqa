// spec: .crevoai/stories/tabs.story.md
import { test } from '@config/page.config';
import { tabsExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Tabs', () => {


  // scenario: What Tab
  test('[AC-1] should show What tab content', async ({ tabsPage }) => {
    await tabsPage.step_navigate();
    await tabsPage.verify_what_content();
  });

  // scenario: Origin Tab
  test('[AC-2] should show Origin tab content', async ({ tabsPage }) => {
    await tabsPage.step_navigate();
    await tabsPage.step_open_origin();
    await tabsPage.verify_origin_content();
  });

  // scenario: Use Tab
  test('[AC-3] should show Use tab content', async ({ tabsPage }) => {
    await tabsPage.step_navigate();
    await tabsPage.step_open_use();
    await tabsPage.verify_use_content();
  });

});
