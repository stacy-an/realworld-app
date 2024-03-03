import { test, expect } from "@playwright/test";
import { defaultApiUser, validUser } from "../../test-data/users.mjs";
import { apiLogin } from "../utilities/apiUtilities.mjs";

test.beforeEach(async ({ request }) => {
  await apiLogin(request, validUser);
});

test("Should get a user profile by username", async ({ request }) => {
  const getUserProfile = await request.get(`/users/profile/${defaultApiUser.username}`);
  expect(getUserProfile.ok()).toBeTruthy();
  const userProfile = await getUserProfile.json();
  const userData = await userProfile.user;
  expect(userData.firstName).toEqual(defaultApiUser.firstName);
  expect(userData.lastName).toEqual(defaultApiUser.lastName);
});

test("Should get list of users", async ({ request }) => {
  const getListOfUsers = await request.get("/users");

  expect(getListOfUsers.ok()).toBe(true);

  const listOfUsers = await getListOfUsers.json();
  const arrayOfUsers = await listOfUsers.results;
  const isSearchedUserPresent = arrayOfUsers.some(
    (user) =>
      user.id === defaultApiUser.id &&
      user.firstName === defaultApiUser.firstName &&
      user.lastName === defaultApiUser.lastName &&
      user.phoneNumber === defaultApiUser.phoneNumber &&
      user.email === defaultApiUser.email
  );

  expect(isSearchedUserPresent).toBe(true);
});
