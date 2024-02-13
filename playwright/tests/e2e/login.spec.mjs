import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage.mjs";
import { newRandomUser, validUser } from "../../test-data/users.mjs";

test.describe("Login tests", (async) => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test("should log in", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.userLogin(validUser.username, validUser.password);
    await loginPage.verifyErrorIsDisplayed(false);
  });

  test("should not login with non existed user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.userLogin(newRandomUser.username, newRandomUser.password);
    await loginPage.verifyErrorIsDisplayed(true);
  });
});
