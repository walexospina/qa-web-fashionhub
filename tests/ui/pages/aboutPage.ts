import { Page, Locator } from "@playwright/test";
import { URLs } from "../../utils/urls";
import NavigationMenu from "./navigationMenu";

export class AboutPage {
  readonly page: Page;
  readonly aboutBanner: Locator;
  navigationMenu: NavigationMenu;

  constructor(page: Page) {
    this.page = page;
    this.aboutBanner = page.locator(".about-banner");
    this.navigationMenu = new NavigationMenu(page);
  }

  async open() {
    await this.page.goto(URLs.about);
    await this.isPresent();
    await this.navigationMenu.isPresent();
  }

  async isPresent() {
    await this.aboutBanner.isVisible();
  }
}

export default AboutPage;
