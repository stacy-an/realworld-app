export class TransactionPage {
  constructor(page) {
    this.page = page;
    this.mineTab = page.getByTestId("nav-personal-tab");
    this.transactionAmount = page.locator('[data-test*="transaction-amount"]');
    this.transactionDetails = page.getByTestId("transaction-detail-header");
  }
}
