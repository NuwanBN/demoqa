// spec: .crevoai/stories/selectable.story.md
import { test } from '@config/page.config';
import { selectableExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Selectable', () => {


  // scenario: List Select
  test('[AC-1] should select list items', async ({ selectablePage }) => {
    await selectablePage.step_navigate();
    await selectablePage.step_select_list_items(expected.listItem1, expected.listItem2);
    await selectablePage.verify_list_selected(expected.listItem1, expected.listItem2);
  });

  // scenario: Grid Select
  test('[AC-2] should select grid items', async ({ selectablePage }) => {
    await selectablePage.step_navigate();
    await selectablePage.step_select_grid_items(expected.gridItem1, expected.gridItem2);
    await selectablePage.verify_grid_selected(expected.gridItem1, expected.gridItem2);
  });

});
