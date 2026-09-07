// spec: .crevoai/stories/alerts.story.md
import { test } from '@config/page.config';
import { alertsExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Alerts', () => {

  // scenario: Simple Alert
  test('[AC-1] should accept the simple alert', async ({ alertsPage }) => {
    await alertsPage.step_navigate();
    await alertsPage.step_accept_simple_alert();
  });

  // scenario: Delayed Alert
  test('[AC-2] should accept the delayed alert', async ({ alertsPage }) => {
    await alertsPage.step_navigate();
    await alertsPage.step_accept_timer_alert();
  });

  // scenario: Confirm Alert
  test('[AC-3] should accept confirm and show result', async ({ alertsPage }) => {
    await alertsPage.step_navigate();
    await alertsPage.step_accept_confirm();
    await alertsPage.verify_confirm_result();
  });

  // scenario: Prompt Alert
  test('[AC-4] should accept prompt and show entered text', async ({ alertsPage }) => {
    await alertsPage.step_navigate();
    await alertsPage.step_accept_prompt();
    await alertsPage.verify_prompt_result();
  });

});
