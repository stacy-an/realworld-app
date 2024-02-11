import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.mjs';
import { LoginPage } from '../../pages/LoginPage.mjs';
import { validUser } from '../../test-data/users.mjs';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(validUser.username, validUser.password);
  await loginPage.verifyErrorIsDisplayed(false);
});

test('should see account balance', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.verifyAccountBalanceIsVisible();
});

test('should see account details', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.verifyUserFullNameIsVisible(validUser.firstName, validUser.lastName);
});
