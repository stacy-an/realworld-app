export class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.locator("#firstName");
    this.lastNameField = page.locator("#lastName");
    this.userNameField = page.locator("#username");
    this.passwordField = page.locator("#password");
    this.confirmPasswordField = page.locator("#confirmPassword");
    this.signUpButton = page.getByTestId("signup-submit");
  }

  async goto() {
    await this.page.goto("/signup");
  }

  async userRegister(userData) {
    await this.firstNameField.fill(userData.firstName);
    await this.lastNameField.fill(userData.lastName);
    await this.userNameField.fill(userData.username);
    await this.passwordField.fill(userData.password);
    await this.confirmPasswordField.fill(userData.password);
    await this.signUpButton.click();
  }
}
