import { test as base } from "@playwright/test";
import AccountPage from "../pages/accountPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import AboutPage from "../pages/aboutPage";

type pageObjects = {
  loginPage: LoginPage;
  accountPage: AccountPage;
  homePage: HomePage;
  abautPage: AboutPage;
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
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    use(homePage);
  },
  abautPage: async ({ page }, use) => {
    const abautPage = new AboutPage(page);
    use(abautPage);
  },
});
export const test = testPages;
