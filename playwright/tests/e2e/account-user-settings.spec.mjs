import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage.mjs";
import { updatedUser, validUser } from "../../test-data/users.mjs";
import { AccountUserSettingPage } from "../../pages/AccountUserSettingPage.mjs";
import { HomePage } from "../../pages/HomePage.mjs";

let homePage;

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(validUser.username, validUser.password);
  await loginPage.verifyErrorIsDisplayed(false);
  homePage = new HomePage(page);
  await homePage.myAccountButton.click();

  await expect(page).toHaveURL("/user/settings");
});

test("should update account user settings", async ({ page }) => {
  const accountUserSettingPage = new AccountUserSettingPage(page);
  await accountUserSettingPage.updateAccountUserSettings(
    updatedUser.firstName,
    updatedUser.lastName,
    updatedUser.email,
    updatedUser.phoneNumber
  );
  await homePage.homePageButton.click();
  await homePage.myAccountButton.click();

  await expect(accountUserSettingPage.firstNameField).toHaveValue(updatedUser.firstName);
  await expect(accountUserSettingPage.lastNameField).toHaveValue(updatedUser.lastName);
  await expect(accountUserSettingPage.emailField).toHaveValue(updatedUser.email);
  await expect(accountUserSettingPage.phoneNumberField).toHaveValue(updatedUser.phoneNumber);
});
