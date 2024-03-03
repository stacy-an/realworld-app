export class AccountUserSettingPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.getByTestId("user-settings-firstName-input");
    this.lastNameField = page.getByTestId("user-settings-lastName-input");
    this.emailField = page.getByTestId("user-settings-email-input");
    this.phoneNumberField = page.getByTestId("user-settings-phoneNumber-input");
    this.saveButton = page.getByTestId("user-settings-submit");
  }

  async updateAccountUserSettings(accountUserData) {
    await this.firstNameField.fill(accountUserData.firstName);
    await this.lastNameField.fill(accountUserData.lastName);
    await this.emailField.fill(accountUserData.email);
    await this.phoneNumberField.fill(accountUserData.phoneNumber);
    await this.saveButton.click();
  }
}
