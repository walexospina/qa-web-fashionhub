import { Page, Locator } from "@playwright/test";
import { URLs } from "../../utils/urls";

export class HomePage {
  readonly page: Page;
  readonly welcomeHeading: Locator;
  readonly shopNowLink: Locator;
  readonly featuresSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeHeading = page.locator(".hero-content");
    this.shopNowLink = page.locator(".cta-button");
    this.featuresSection = page.locator(".features");
  }

  async open() {
    await this.page.goto(URLs.home);
    await this.isPresent();
  }

  async isPresent() {
    this.featuresSection.isVisible();
    this.shopNowLink.isVisible();
  }
}

export default HomePage;
