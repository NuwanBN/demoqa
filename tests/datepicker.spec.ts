// spec: .crevoai/stories/datepicker.story.md
import { test } from '@config/page.config';
import { datepickerExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Datepicker', () => {


  // scenario: Select Date
  test('[AC-1] should set the select date field', async ({ datepickerPage }) => {
    await datepickerPage.step_navigate();
    await datepickerPage.step_set_date(expected.dateValue);
    await datepickerPage.verify_date_value();
  });

  // scenario: Date And Time
  test('[AC-2] should set the date and time field', async ({ datepickerPage }) => {
    await datepickerPage.step_navigate();
    await datepickerPage.step_set_date_time(expected.dateTimeValue);
    await datepickerPage.verify_date_time_value();
  });

});
