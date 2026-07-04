// spec: .ordino/stories/droppable.story.md
import { test } from '@config/page.config';
import { droppableExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Droppable', () => {


  // scenario: Simple Drop
  test('[AC-1] should drop on the simple target', async ({ droppablePage }) => {
    await droppablePage.step_navigate();
    await droppablePage.step_simple_drop();
    await droppablePage.verify_simple_dropped();
  });

  // scenario: Accept Drop
  test('[AC-2] should accept the acceptable item', async ({ droppablePage }) => {
    await droppablePage.step_navigate();
    await droppablePage.step_accept_drop();
    await droppablePage.verify_accept_dropped();
  });

  // scenario: Prevent Propagation Drop
  test('[AC-3] should drop on not-greedy outer target', async ({ droppablePage }) => {
    await droppablePage.step_navigate();
    await droppablePage.step_prevent_propagation_drop();
    await droppablePage.verify_prevent_propagation_dropped();
  });

  // scenario: Revert Draggable
  test('[AC-4] should revert the will-revert item', async ({ droppablePage }) => {
    await droppablePage.step_navigate();
    await droppablePage.step_revert_drop();
    await droppablePage.verify_revert_dropped();
  });

});
