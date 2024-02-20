import { generateString } from "../helpers/data-helper.mjs";

export const bankAccountData = {
  bankName: generateString(5),
  routingNumber: generateString(9),
  accountNumber: generateString(9),
};

export const defaultBankAccount = {
  userId: "t45AiwidW",
  bankName: "O'Hara - Labadie Bank",
  accountNumber: "6123387981",
  routingNumber: "851823229",
};
