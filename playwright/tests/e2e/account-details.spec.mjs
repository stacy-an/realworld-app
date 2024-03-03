import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage.mjs";
import { LoginPage } from "../../pages/LoginPage.mjs";
import { validUser } from "../../test-data/users.mjs";

let homePage;

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  homePage = new HomePage(page);

  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);

  expect(await loginPage.errorIsDisplayed()).toBe(false);
});

test("should see account balance", async ({ page }) => {
  await homePage.verifyAccountBalanceIsVisible();
});

test("should see account details", async ({ page }) => {
  await homePage.verifyUserFullNameIsVisible(validUser.firstName, validUser.lastName);
});
