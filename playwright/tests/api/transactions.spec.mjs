import { test, expect } from "@playwright/test";
import { defaultTransaction } from "../../test-data/transactions-data.mjs";
import { validUser } from "../../test-data/users.mjs";
import { apiLogin } from "../utilities/apiUtilities.mjs";

test.beforeEach(async ({ request }) => {
  await apiLogin(request, validUser);
});

test("should creates a new comment for a transaction", async ({ request }) => {
  const createCommentTransaction = await request.post(
    `/comments/${defaultTransaction.transactionId}`,
    {
      data: {
        content: defaultTransaction.content,
      },
    }
  );
  expect(createCommentTransaction.ok()).toBeTruthy;
  const getListOfTransactions = await request.get("/transactions");
  const listOfTransactions = await getListOfTransactions.json();
  const arrayOfTransactions = await listOfTransactions.results;
  const searchedTransactionById = arrayOfTransactions.find(
    (transaction) => transaction.id === defaultTransaction.transactionId
  );
  const transactionComments = await searchedTransactionById.comments;
  expect(transactionComments).toContainEqual(
    expect.objectContaining({ content: defaultTransaction.content })
  );
});
