// spec: .ordino/stories/slider.story.md
import { test } from '@config/page.config';
import { sliderExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Slider', () => {


  // scenario: Change Slider Value
  test('[AC-1] should change slider and show value', async ({ sliderPage }) => {
    await sliderPage.step_navigate();
    await sliderPage.step_set_slider(expected.targetValue);
    await sliderPage.verify_slider_value();
  });

});
