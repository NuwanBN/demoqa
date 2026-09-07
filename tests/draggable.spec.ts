// spec: .crevoai/stories/draggable.story.md
import { test } from '@config/page.config';
import { draggableExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Draggable', () => {


  // scenario: Simple Drag
  test('[AC-1] should drag the simple box on both axes', async ({ draggablePage }) => {
    await draggablePage.step_navigate();
    await draggablePage.step_drag_simple();
    await draggablePage.verify_simple_moved();
  });

  // scenario: Axis Restricted Drag
  test('[AC-2] should respect axis restrictions', async ({ draggablePage }) => {
    await draggablePage.step_navigate();
    await draggablePage.step_drag_axis_restricted();
    await draggablePage.verify_axis_restricted();
  });

  // scenario: Container Restricted Drag
  test('[AC-3] should keep the box inside the container', async ({ draggablePage }) => {
    await draggablePage.step_navigate();
    await draggablePage.step_drag_container_restricted();
    await draggablePage.verify_container_restricted();
  });

  // scenario: Cursor Style Drag
  test('[AC-4] should drag the cursor style box', async ({ draggablePage }) => {
    await draggablePage.step_navigate();
    await draggablePage.step_drag_cursor_style();
    await draggablePage.verify_cursor_moved();
  });

});
