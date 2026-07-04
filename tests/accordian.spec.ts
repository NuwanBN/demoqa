// spec: .ordino/stories/accordian.story.md
import { test } from '@config/page.config';
import { accordianExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Accordian', () => {

  // scenario: First Section Open
  test('[AC-1] should show first section content', async ({ accordianPage }) => {
    await accordianPage.step_navigate();
    await accordianPage.verify_section1_content();
  });

  // scenario: Expand Second Section
  test('[AC-2] should expand second section content', async ({ accordianPage }) => {
    await accordianPage.step_navigate();
    await accordianPage.step_expand_section2();
    await accordianPage.verify_section2_content();
  });

  // scenario: Expand Third Section
  test('[AC-3] should expand third section content', async ({ accordianPage }) => {
    await accordianPage.step_navigate();
    await accordianPage.step_expand_section3();
    await accordianPage.verify_section3_content();
  });

});
