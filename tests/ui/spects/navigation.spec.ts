import { expect } from "@playwright/test";
import { test } from "../fixtures/basePages";

test.beforeEach(async ({ page }) => {
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      throw new Error(`Console error: ${msg.text()}`);
    }
  });
});

test.describe("User navigation flows", () => {
  test("@regression - Test Case 1: should navigate without console errors in home page", async ({
    homePage,
  }) => {
    await homePage.open();
    await homePage.isPresent();
    await expect(homePage.welcomeHeading).toContainText(
      "Welcome to FashionHub"
    );
  });
});

test.skip("@regression - should navigate without console errors in about page", async ({
  abautPage,
}) => {
  await abautPage.open();
  await abautPage.isPresent();
});

test.afterEach(async ({ page }) => {
  page.off("console", () => {});
});
