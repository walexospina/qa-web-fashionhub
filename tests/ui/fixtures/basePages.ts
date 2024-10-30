import { test as base } from "@playwright/test";
import AccountPage from "../pages/accountPage";
import LoginPage from "../pages/loginPage";

type pageObjects = {
  loginPage: LoginPage;
  accountPage: AccountPage;
};

export const testPages = base.extend<pageObjects>({
  accountPage: async ({ page }, use) => {
    const accountPage = new AccountPage(page);
    use(accountPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    use(loginPage);
  },
});
export const test = testPages;
