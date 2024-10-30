import { Page, Locator } from "@playwright/test";
import { URLs } from "../../utils/urls";

export class AboutPage {
  readonly page: Page;
  readonly aboutBanner: Locator;

  constructor(page: Page) {
    this.page = page;
    this.aboutBanner = page.locator(".about-banner");
  }

  async open() {
    await this.page.goto(URLs.about);
    await this.isPresent();
  }

  async isPresent() {
    this.aboutBanner.isVisible();
  }
}

export default AboutPage;
