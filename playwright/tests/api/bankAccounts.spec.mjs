import { test, expect } from "@playwright/test";
import { validUser } from "../../test-data/users.mjs";
import { apiLogin } from "../utilities/apiUtilities.mjs";
import { defaultBankAccount } from "../../test-data/bank-accounts.mjs";

test.beforeEach(async ({ request }) => {
  await apiLogin(request, validUser);
});

test("Should get list of bank account", async ({ request }) => {
  const getListOfBankAccounts = await request.get("/bankAccounts");

  expect(getListOfBankAccounts.ok()).toBe(true);

  const listOfBankAccounts = await getListOfBankAccounts.json();
  const arrayOfBankAccounts = await listOfBankAccounts.results;

  expect(arrayOfBankAccounts).toContainEqual(
    expect.objectContaining({
      userId: defaultBankAccount.userId,
      bankName: defaultBankAccount.bankName,
      accountNumber: defaultBankAccount.accountNumber,
      routingNumber: defaultBankAccount.routingNumber,
    })
  );
});

test("Should delete a bank account", async ({ request }) => {
  const deleteBankAccount = await request.delete(`/bankAccounts/${defaultBankAccount.id}`);

  expect(deleteBankAccount.ok()).toBe(true);

  const getListOfBankAccounts = await request.get("/bankAccounts");

  expect(getListOfBankAccounts.ok()).toBe(true);

  const listOfBankAccounts = await getListOfBankAccounts.json();
  const arrayOfBankAccounts = await listOfBankAccounts.results;

  expect(arrayOfBankAccounts).toContainEqual(
    expect.objectContaining({
      userId: defaultBankAccount.userId,
      bankName: defaultBankAccount.bankName,
      accountNumber: defaultBankAccount.accountNumber,
      routingNumber: defaultBankAccount.routingNumber,
      isDeleted: true,
    })
  );
});
