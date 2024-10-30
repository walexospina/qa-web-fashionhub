import { Page, Locator } from "@playwright/test";
import { URLs } from "../../utils/urls";

export class LoginPage {
  readonly page: Page;
  readonly userNameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly messagePanel: Locator;
  readonly signUpLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameField = page.locator("#username");
    this.passwordField = page.locator("#password");
    this.loginButton = page.locator('input[value="Login"]');
    this.messagePanel = page.locator("#errorMessage");
    this.signUpLink = page.locator('a[href="#"]:text("Sign up")');
  }

  async open() {
    await this.page.goto(URLs.login);
    await this.page.waitForURL("**/login.html");
    await this.isPresent();
  }

  async isPresent() {
    this.userNameField.isEditable();
    this.passwordField.isEditable();
    this.loginButton.isVisible();
    this.signUpLink.isVisible();
  }

  async fillUserName(userName: string) {
    await this.userNameField.fill(userName);
  }
  async fillPassword(password: string) {
    await this.passwordField.fill(password);
  }

  async doLogin(userName: string, password: string) {
    await this.fillUserName(userName);
    await this.fillPassword(password);
    await this.loginButton.click();
  }
}

export default LoginPage;
