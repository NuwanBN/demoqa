// spec: .ordino/stories/menu.story.md
import { test } from '@config/page.config';

test.describe('DemoQA - Menu', () => {


  // scenario: Main Menu Items
  test('[AC-1] should show main menu items', async ({ menuPage }) => {
    await menuPage.step_navigate();
    await menuPage.verify_main_items_visible();
  });

  // scenario: Submenu On Hover
  test('[AC-2] should show submenu on Main Item 2 hover', async ({ menuPage }) => {
    await menuPage.step_navigate();
    await menuPage.step_hover_main_item_2();
    await menuPage.verify_submenu_visible();
  });

  // scenario: Sub Submenu On Hover
  test('[AC-3] should show sub-submenu on SUB SUB LIST hover', async ({ menuPage }) => {
    await menuPage.step_navigate();
    await menuPage.step_hover_main_item_2();
    await menuPage.step_hover_sub_sub_list();
    await menuPage.verify_sub_submenu_visible();
  });

});
