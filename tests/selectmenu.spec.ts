// spec: .crevoai/stories/selectmenu.story.md
import { test } from '@config/page.config';
import { selectmenuExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Selectmenu', () => {


  // scenario: Select Value
  test('[AC-1] should select a group option in Select Value', async ({ selectmenuPage }) => {
    await selectmenuPage.step_navigate();
    await selectmenuPage.step_select_value(expected.selectValue);
    await selectmenuPage.verify_select_value(expected.selectValue);
  });

  // scenario: Select One
  test('[AC-2] should select a title in Select One', async ({ selectmenuPage }) => {
    await selectmenuPage.step_navigate();
    await selectmenuPage.step_select_one(expected.selectOne);
    await selectmenuPage.verify_select_one(expected.selectOne);
  });

  // scenario: Old Style Select
  test('[AC-3] should select Purple in old-style select', async ({ selectmenuPage }) => {
    await selectmenuPage.step_navigate();
    await selectmenuPage.step_select_old_style(expected.oldStyleValue);
    await selectmenuPage.verify_old_style(expected.oldStyleValue);
  });

  // scenario: Multi Select Drop Down
  test('[AC-4] should select colors in multiselect drop down', async ({ selectmenuPage }) => {
    await selectmenuPage.step_navigate();
    await selectmenuPage.step_select_multi(expected.multiColor1, expected.multiColor2);
    await selectmenuPage.verify_multi_selected();
  });

});
