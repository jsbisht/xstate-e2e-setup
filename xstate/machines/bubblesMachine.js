import { createMachine } from "xstate";

export const bubblesMachine = createMachine({
  id: "pages",
  initial: "index",
  context: {
    retries: 0,
  },
  states: {
    index: {
      on: {
        CLICK_MENU_LOGIN: "login",
        CLICK_MENU_ACCOUNT: "account",
      },
    },
    login: {
      on: {
        LOGIN_SUCCESS: "home",
        LOGIN_ERROR: "index",
      },
    },
    home: {
      type: "final",
    },
    account: {
      type: "final",
    },
  },
});
