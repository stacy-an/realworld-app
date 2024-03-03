import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage.mjs";
import { TransactionPage } from "../../pages/TransactionPage.mjs";
import { validUser } from "../../test-data/users.mjs";

let transactionPage;

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  transactionPage = new TransactionPage(page);

  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);

  expect(await loginPage.errorIsDisplayed()).toBe(false);

  await transactionPage.mineTab.click();
});

test("should Should see account transactions history", async ({ page }) => {
  await expect(page).toHaveURL("/personal");
});

test("Should see account transaction details", async ({ page }) => {
  await expect(page).toHaveURL("/personal");

  const amountBeforeClick = await transactionPage.transactionAmount.nth(1).innerText();

  await transactionPage.transactionAmount.nth(1).click();

  const amountAfterClick = await transactionPage.transactionAmount.innerText();

  await expect(transactionPage.transactionDetails).toBeVisible();
  await expect(transactionPage.transactionAmount).toBeVisible();
  expect(amountAfterClick).toEqual(amountBeforeClick);
});
