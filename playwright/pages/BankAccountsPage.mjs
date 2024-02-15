import { expect } from "@playwright/test";

export class BankAccountsPage {
  constructor(page) {
    this.page = page;
    this.newBankAccountButton = page.locator('[data-test="bankaccount-new"]');
    this.deleteBankAccountButton = page.locator('[data-test="bankaccount-delete"]');
    this.bankNameField = page.locator('[name="bankName"]');
    this.routingNumberField = page.locator('[name="routingNumber"]');
    this.accountNumberField = page.locator('[name="accountNumber"]');
    this.bankAccountSubmitButton = page.locator('[type="submit"]');
  }

  async fillBankAccountData(bankName, routingNumber, accountNumber) {
    await this.bankNameField.fill(bankName);
    await this.routingNumberField.fill(routingNumber);
    await this.accountNumberField.fill(accountNumber);
    await this.bankAccountSubmitButton.click();
  }
}
