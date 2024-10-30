import { test } from "../fixtures/basePages";

const userName = process.env.USER_NAME!;
const password = process.env.PASSWORD!;

test.beforeEach(async ({ accountPage }) => {
  await accountPage.open();
});

test.describe("Test Case 3 ", () => {
  test("@smoke - Test Case 3 should login in to the app", async ({
    accountPage,
  }) => {
    await accountPage.isPresent();
    await accountPage.doLogin(userName, password);
  });
});
