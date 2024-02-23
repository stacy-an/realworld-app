export class AccountUserSettingPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.locator("[name=firstName]");
    this.lastNameField = page.locator('[name="lastName"]');
    this.emailField = page.locator('[name="email"]');
    this.phoneNumberField = page.locator('[name="phoneNumber"]');
    this.saveButton = page.locator('[type="submit"]');
  }

  async goToAccountUserSettings() {
    await this.page.goto("http://localhost:3000/user/settings");
  }

  async updateAccountUserSettings(firstName, lastName, email, phoneNumber) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.emailField.fill(email);
    await this.phoneNumberField.fill(phoneNumber);
    await this.saveButton.click();
  }
}
