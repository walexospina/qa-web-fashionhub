import { test } from "../fixtures/basePages";

const userName = process.env.USER_NAME!;
const password = process.env.PASSWORD!;

test.beforeEach(async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.isPresent();
});

test.describe("Test Case 3 ", () => {
  test("@smoke - Test Case 3 should login in to the app", async ({
    loginPage,
    accountPage,
  }) => {
    await loginPage.doLogin(userName, password);
    await accountPage.isPresent();
  });
});
