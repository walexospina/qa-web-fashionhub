import { test } from "../fixtures/basePages";

const userName = process.env.USER_NAME!;
const password = process.env.PASSWORD!;

test.beforeEach(async ({ loginPage }) => {
  await loginPage.open();
});

test.describe("User Login Flow ", () => {
  test("@smoke - Test Case 3: should log in to the app and load account page", async ({
    loginPage,
    accountPage,
  }) => {
    await loginPage.doLogin(userName, password);
    await accountPage.isPresent();
  });
});
