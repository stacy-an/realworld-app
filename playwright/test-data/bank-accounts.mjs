import { generateString } from "../helpers/data-helper.mjs";

export const bankAccountData = {
  bankName: generateString(5),
  routingNumber: generateString(9),
  accountNumber: generateString(9),
};
