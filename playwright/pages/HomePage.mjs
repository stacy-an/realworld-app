import { expect } from "@playwright/test";

export class HomePage {
  constructor(page) {
    this.page = page;
    this.accountBalance = page.getByTestId("sidenav-user-balance");
    this.userFullName = page.getByTestId("sidenav-user-full-name");
    this.accountUsername = page.getByTestId("sidenav-username");
    this.bankAccountButton = page.getByTestId("sidenav-bankaccounts");
    this.homePageButton = page.getByTestId("sidenav-home");
    this.myAccountButton = page.getByTestId("sidenav-user-settings");
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
