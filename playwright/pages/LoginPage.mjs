import { expect } from "@playwright/test";
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.userNameField = page.locator("#username");
    this.passwordField = page.locator("#password");
    this.signInButton = page.locator("[data-test=signin-submit]");
    this.loginError = page.locator(".MuiAlert-message");
    this.rememberMeCheckbox = page.locator('input[name="remember"]');
    this.signUpLink = page.locator("[data-test=signup]");
    this.signInError = page.locator('[data-test="signin-error"]');
  }

  async goto() {
    await this.page.goto("/signin");
  }

  async login(username, password) {
    await this.userNameField.fill(username);
    await this.passwordField.fill(password);
    await this.signInButton.click();
  }

  async errorIsDisplayed() {
    return await this.signInError.isVisible();
  }
}
