import { expect } from "@playwright/test";

export class HomePage {
  constructor(page) {
    this.page = page;
    this.accountBalance = page.locator('[data-test="sidenav-user-balance"]');
    this.userFullName = page.locator('[data-test="sidenav-user-full-name"]');
    this.accountUsername = page.locator('[data-test="sidenav-username"]');
    this.bankAccountButton = page.locator('[data-test="sidenav-bankaccounts"]');
    this.homePageButton = page.locator('[data-test="sidenav-home"]');
    this.myAccountButton = page.locator('[data-test="sidenav-user-settings"]');
  }

  async verifyAccountBalanceIsVisible() {
    await expect(this.accountBalance).toBeVisible();
    await expect(this.accountBalance).toContainText("$");
  }

  async verifyUserFullNameIsVisible(firstName, lastName) {
    await expect(this.userFullName).toBeVisible();
    await expect(this.userFullName).toHaveText(firstName + " " + lastName.charAt(0));
  }
}
