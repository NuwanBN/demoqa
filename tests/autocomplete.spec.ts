// spec: .crevoai/stories/autocomplete.story.md
import { test } from '@config/page.config';
import { autocompleteExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Autocomplete', () => {

  // scenario: Multiple Colors
  test('[AC-1] should select multiple colors in multi field', async ({ autocompletePage }) => {
    await autocompletePage.step_navigate();
    await autocompletePage.step_select_multiple_colors();
    await autocompletePage.verify_multiple_colors_selected();
  });


  // scenario: Single Color
  test('[AC-2] should select color in single field', async ({ autocompletePage }) => {
    await autocompletePage.step_navigate();
    await autocompletePage.step_select_single_color();
    await autocompletePage.verify_single_color_selected();
  });

});
