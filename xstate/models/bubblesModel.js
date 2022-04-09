export const bubblesModel = {
  events: {
    CLICK_MENU_LOGIN: async (page) => {
      await page.click(".link.login");
    },
    CLICK_MENU_ACCOUNT: async (page) => {
      await page.click(".link.account");
    },
    LOGIN_SUCCESS: async (page) => {
      // check if the service succeeds
    },
    LOGIN_ERROR: async (page) => {
      // check if the service failed
    },
  },
};
