import { expect } from "@playwright/test";

export async function apiLogin(request, user) {
  const loginResponse = await request.post("/login", {
    data: {
      username: user.username,
      password: user.password,
    },
  });
  expect(loginResponse.ok()).toBeTruthy();
}
