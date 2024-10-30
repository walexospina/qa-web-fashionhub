import { Page, Locator } from "@playwright/test";
import { URLs } from "../../utils/urls";

export class AccountPage {
  readonly page: Page;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutButton = page.getByRole("button", { name: "Logout" });
  }

  async isPresent() {
    this.logoutButton.isVisible();
  }

  async clickLogout() {
    await this.logoutButton.click();
  }
}

export default AccountPage;
