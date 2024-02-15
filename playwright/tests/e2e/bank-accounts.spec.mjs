import { LoginPage } from "../../pages/LoginPage.mjs";
import { HomePage } from "../../pages/HomePage.mjs";
import { test, expect } from "@playwright/test";
import { validUser } from "../../test-data/users.mjs";
import { BankAccountsPage } from "../../pages/BankAccountsPage.mjs";
import { bankAccountData } from "../../test-data/bank-accounts.mjs";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(validUser.username, validUser.password);
  await loginPage.verifyErrorIsDisplayed(false);
  const homePage = new HomePage(page);
  await homePage.bankAccountButton.click();
  await expect(page).toHaveURL("/bankaccounts");
});

test("should add new bank account", async ({ page }) => {
  const bankAccountsPage = new BankAccountsPage(page);
  await bankAccountsPage.newBankAccountButton.click();
  await bankAccountsPage.fillBankAccountData(
    bankAccountData.bankName,
    bankAccountData.routingNumber,
    bankAccountData.accountNumber
  );
  await expect(page).toHaveURL("/bankaccounts");
  await expect(bankAccountsPage.newBankAccountButton).toBeVisible();
});
