// spec: .ordino/stories/links.story.md
import { test } from '@config/page.config';
import { linksExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Links', () => {

  // scenario: Open New Tab
  test('[AC-1] should open Home in a new tab', async ({ linksPage }) => {
    await linksPage.step_navigate();
    await linksPage.step_open_home_new_tab();
  });

  // scenario: Backend Created Link
  test('[AC-2] should show backend status for Created', async ({ linksPage }) => {
    await linksPage.step_navigate();
    await linksPage.step_click_created();
    await linksPage.verify_created_response();
  });

  // scenario: Backend Not Found Link
  test('[AC-3] should show backend status for Not Found', async ({ linksPage }) => {
    await linksPage.step_navigate();
    await linksPage.step_click_not_found();
    await linksPage.verify_not_found_response();
  });

});
