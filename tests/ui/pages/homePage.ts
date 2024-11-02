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

  //todo this function could be moved place example utils/checks.ts
  async checkStatusCode(page, url: string) {
    const response = await page.request.fetch(url);
    const status = response.status();

    if (status >= 400) {
      console.error(`❌ Failed URL: ${url} with status: ${status}`);
      throw new Error(`Unexpected 40x status code: ${status} for URL: ${url}`);
    } else {
      console.log(`✅ URL passed: ${url} with status: ${status}`);
    }
  }
}

export default HomePage;
