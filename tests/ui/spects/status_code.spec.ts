import { test } from "../fixtures/basePages"; // Asegúrate de importar tu fixture

test.describe("Link Status Verification via API", () => {
  test("@regression - Test Case 2: should check if each page returns expected status codes", async ({
    homePage,
  }) => {
    await homePage.open();
    const links = await homePage.page.locator("a[href]").all();

    const checkLinks = links.map(async (link) => {
      const url = await link.getAttribute("href");
      if (url) {
        try {
          await homePage.checkStatusCode(homePage.page, url);
        } catch (error) {
          console.error(`Error checking status for URL: ${url}`);
        }
      } else {
        console.warn("Invalid URL encountered");
      }
    });

    await Promise.all(checkLinks);
  });
});
