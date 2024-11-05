import { Page, Locator } from "@playwright/test";
import NavigationMenu from "./navigationMenu";

export class AccountPage {
  readonly page: Page;
  readonly logoutButton: Locator;
  navigationMenu: NavigationMenu;

  constructor(page: Page) {
    this.page = page;
    this.logoutButton = page.getByRole("button", { name: "Logout" });
    this.navigationMenu = new NavigationMenu(page);
  }

  async isPresent() {
    await this.logoutButton.isVisible();
    await this.navigationMenu.isPresent();
  }

  async clickLogout() {
    await this.logoutButton.click();
  }
}

export default AccountPage;
