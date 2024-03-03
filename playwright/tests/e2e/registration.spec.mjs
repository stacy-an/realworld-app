import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../pages/RegistrationPage.mjs";
import { newRandomUser } from "../../test-data/users.mjs";
import { LoginPage } from "../../pages/LoginPage.mjs";

test("should register a new user", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  const loginPage = new LoginPage(page);

  await registrationPage.goto();
  await registrationPage.userRegister(newRandomUser);
  await loginPage.login(newRandomUser.username, newRandomUser.password);

  expect(await loginPage.errorIsDisplayed()).toBe(false);
});
