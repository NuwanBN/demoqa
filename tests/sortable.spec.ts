// spec: .ordino/stories/sortable.story.md
import { test } from '@config/page.config';
import { sortableExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Sortable', () => {


  // scenario: List Reorder
  test('[AC-1] should reorder list items by drag', async ({ sortablePage }) => {
    await sortablePage.step_navigate();
    await sortablePage.step_reorder_list(expected.listSource, expected.listTarget);
    await sortablePage.verify_list_first(expected.listSource);
  });

  // scenario: Grid Reorder
  test('[AC-2] should reorder grid items by drag', async ({ sortablePage }) => {
    await sortablePage.step_navigate();
    await sortablePage.step_reorder_grid(expected.listTarget, expected.gridTarget);
    await sortablePage.verify_grid_order(expected.gridTarget, expected.listTarget);
  });

});
