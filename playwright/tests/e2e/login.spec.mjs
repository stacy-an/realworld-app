import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage.mjs";
import { newRandomUser, validUser } from "../../test-data/users.mjs";

let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);

  await loginPage.goto();
});

test("should log in", async ({ page }) => {
  await loginPage.login(validUser.username, validUser.password);

  expect(await loginPage.errorIsDisplayed()).toBe(false);
});

test("should not login with non existed user", async ({ page }) => {
  await loginPage.login(newRandomUser.username, newRandomUser.password);

  expect(await loginPage.errorIsDisplayed()).toBe(true);
});
