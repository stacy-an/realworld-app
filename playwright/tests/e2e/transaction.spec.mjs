import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage.mjs";
import { TransactionPage } from "../../pages/TransactionPage.mjs";
import { validUser } from "../../test-data/users.mjs";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(validUser.username, validUser.password);
  await loginPage.verifyErrorIsDisplayed(false);
});

test("should Should see account transactions history", async ({ page }) => {
  const transactionPage = new TransactionPage(page);
  await transactionPage.mineTab.click();
  await expect(page).toHaveURL("/personal");
});

test("Should see account transaction details", async ({ page }) => {
  const transactionPage = new TransactionPage(page);
  await transactionPage.mineTab.click();
  await expect(page).toHaveURL("/personal");
  const amountBeforeClick = await transactionPage.transactionAmount.nth(1).innerText();
  await transactionPage.transactionAmount.nth(1).click();
  const amountAfterClick = await transactionPage.transactionAmount.innerText();
  await expect(transactionPage.transactionDetails).toBeVisible();
  await expect(transactionPage.transactionAmount).toBeVisible();
  expect(amountAfterClick).toEqual(amountBeforeClick);
});
