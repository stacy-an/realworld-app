import { expect } from "@playwright/test";

export class BankAccountsPage {
  constructor(page) {
    this.page = page;
    this.newBankAccountButton = page.getByTestId("bankaccount-new");
    this.deleteBankAccountButton = page.getByTestId("bankaccount-delete");
    this.bankNameField = page.locator("#bankaccount-bankName-input");
    this.routingNumberField = page.locator("#bankaccount-routingNumber-input");
    this.accountNumberField = page.locator("#bankaccount-accountNumber-input");
    this.bankAccountSubmitButton = page.getByTestId("bankaccount-submit");
    this.bankAccountsList = page.getByTestId("bankaccount-list");
  }

  async fillBankAccountData(BankAccountData) {
    await this.bankNameField.fill(BankAccountData.bankName);
    await this.routingNumberField.fill(BankAccountData.routingNumber);
    await this.accountNumberField.fill(BankAccountData.accountNumber);
    await this.bankAccountSubmitButton.click();
  }
}
