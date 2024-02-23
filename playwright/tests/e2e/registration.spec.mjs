import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../pages/RegistrationPage.mjs";
import { newRandomUser } from "../../test-data/users.mjs";
import { LoginPage } from "../../pages/LoginPage.mjs";

test("should register a new user", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  await registrationPage.goto();
  await registrationPage.userRegister(
    newRandomUser.firstName,
    newRandomUser.lastName,
    newRandomUser.username,
    newRandomUser.password
  );
  const loginPage = new LoginPage(page);
  await loginPage.userLogin(newRandomUser.username, newRandomUser.password);
  await loginPage.verifyErrorIsDisplayed(false);
});
