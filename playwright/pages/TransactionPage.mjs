export class TransactionPage {
  constructor(page) {
    this.page = page;
    this.mineTab = page.locator('[data-test="nav-personal-tab"]');
    this.transactionAmount = page.locator('[data-test*="transaction-amount"]');
    this.transactionDetails = page.locator('[data-test="transaction-detail-header"]');
  }
}
