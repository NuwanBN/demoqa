// spec: .ordino/stories/brokenlinks.story.md
import { test } from '@config/page.config';
import { brokenlinksExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Brokenlinks', () => {

  // scenario: Valid Image
  test('[AC-1] should load the valid image', async ({ brokenlinksPage }) => {
    await brokenlinksPage.step_navigate();
    await brokenlinksPage.verify_valid_image();
  });

  // scenario: Broken Image
  test('[AC-2] should not load the broken image', async ({ brokenlinksPage }) => {
    await brokenlinksPage.step_navigate();
    await brokenlinksPage.verify_broken_image();
  });

  // scenario: Valid Link
  test('[AC-3] should open the valid link successfully', async ({ brokenlinksPage }) => {
    await brokenlinksPage.step_navigate();
    await brokenlinksPage.step_open_valid_link();
    await brokenlinksPage.verify_valid_link_url();
  });

  // scenario: Broken Link
  test('[AC-4] should return error status for broken link', async ({ brokenlinksPage }) => {
    await brokenlinksPage.step_navigate();
    await brokenlinksPage.step_check_broken_link_status();
  });

});
