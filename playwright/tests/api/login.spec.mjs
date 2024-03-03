import { test, expect } from "@playwright/test";
import { validUser } from "../../test-data/users.mjs";

test("should log in", async ({ request }) => {
  const loginResponse = await request.post("/login", {
    data: {
      username: validUser.username,
      password: validUser.password,
    },
  });

  expect(loginResponse.ok()).toBe(true);
});
