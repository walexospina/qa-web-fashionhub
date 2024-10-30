import { test as base } from "@playwright/test";
import AccountPage from "../pages/accountPage";

type pageObjects = {
  accountPage: AccountPage;
};

export const testPages = base.extend<pageObjects>({
  accountPage: async ({ page }, use) => {
    const accountPage = new AccountPage(page);
    use(accountPage);
  },
});
export const test = testPages;
