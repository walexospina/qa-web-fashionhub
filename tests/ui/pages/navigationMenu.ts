import { Locator, Page } from "@playwright/test";

class NavigationMenu {
  readonly homeLink: Locator;
  readonly accountLink: Locator;
  readonly clothingLink: Locator;
  readonly shoppingBagLink: Locator;
  readonly aboutLink: Locator;

  constructor(page: Page) {
    this.homeLink = page.locator('a[href="/fashionhub/"].current');
    this.accountLink = page.locator('a[href="/fashionhub/account.html"]');
    this.clothingLink = page.locator('a[href="/fashionhub/products.html"]');
    this.shoppingBagLink = page.locator('a[href="/fashionhub/cart.html"]');
    this.aboutLink = page.locator('a[href="/fashionhub/about.html"]');
  }

  async isPresent() {
    await this.homeLink.isVisible();
    await this.accountLink.isVisible();
    await this.clothingLink.isVisible();
    await this.shoppingBagLink.isVisible();
    await this.aboutLink.isVisible();
  }
}

export default NavigationMenu;
