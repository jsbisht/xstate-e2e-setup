import { createModel } from "@xstate/test";
import { createMachine } from "xstate";
import { bubblesMachine } from "../xstate/machines/bubblesMachine";
import { bubblesModel } from "../xstate/models/bubblesModel";

describe("bubbles app", () => {
  const bubblesXstateMachine = createMachine(bubblesMachine);
  const bubblesXstateModel = createModel(bubblesXstateMachine, bubblesModel);
  const bubblesTestPlans = bubblesXstateModel.getSimplePathPlans();
  bubblesTestPlans.forEach((plan, i) => {
    const { description, paths } = plan;
    describe(description, () => {
      paths.forEach((path, i) => {
        it(
          path.description,
          async () => {
            await page.goto("http://localhost:3000");
            await path.test(page);
          },
          10000
        );
      });
    });
  });
});
