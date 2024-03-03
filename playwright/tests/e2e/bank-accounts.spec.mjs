import { LoginPage } from "../../pages/LoginPage.mjs";
import { HomePage } from "../../pages/HomePage.mjs";
import { test, expect } from "@playwright/test";
import { validUser } from "../../test-data/users.mjs";
import { BankAccountsPage } from "../../pages/BankAccountsPage.mjs";
import { bankAccountData } from "../../test-data/bank-accounts.mjs";

let bankAccountsPage;

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  bankAccountsPage = new BankAccountsPage(page);

  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);

  expect(await loginPage.errorIsDisplayed()).toBe(false);

  await homePage.bankAccountButton.click();
});

test("should add new bank account", async ({ page }) => {
  await bankAccountsPage.newBankAccountButton.click();
  await bankAccountsPage.fillBankAccountData(bankAccountData);
  await page.reload();

  await expect(bankAccountsPage.bankAccountsList).toContainText(bankAccountData.bankName);
});

test("should delete bank account", async ({ page }) => {
  const countOfDeleteButtonsBeforeTest = await bankAccountsPage.deleteBankAccountButton.count();

  await bankAccountsPage.deleteBankAccountButton.nth(0).click();

  const countOfDeleteButtonsAfterTest = await bankAccountsPage.deleteBankAccountButton.count();

  expect(countOfDeleteButtonsAfterTest === countOfDeleteButtonsBeforeTest - 1);
});
