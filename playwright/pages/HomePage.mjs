import { expect } from '@playwright/test';
export class HomePage {

    constructor(page) {
        this.page = page;
        this.accountBalance = page.locator('[data-test="sidenav-user-balance"]');
        this.userFullName = page.locator('[data-test="sidenav-user-full-name"]');
        this.accountUsername = page.locator('[data-test="sidenav-username"]');
        this.accountButton = page.locator("a[data-test='sidenav-bankaccounts']")
    }

    async verifyAccountBalanceIsVisible(isVisible){
        if (isVisible == true){
            await expect(this.accountBalance).toBeVisible();
            await expect(this.accountBalance).toHaveText('$');
          }
          else {
            await expect(this.accountBalance).toHaveCount(0);
          } 
        
    }

}