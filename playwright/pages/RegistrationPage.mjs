export class RegistrationPage {

    constructor(page) {
        this.page = page;
        this.firstNameField = page.locator('#firstName');
        this.lastNameField = page.locator('#lastName');
        this.userNameField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.confirmPasswordField = page.locator('#confirmPassword');
        this.signUpButton = page.locator('[data-test="signup-submit"]');
    }

    async goto() {
        await this.page.goto('http://localhost:3000/signup');
      }

    async userRegister(firstname, lastname, username, password) {
        await this.firstNameField.fill(firstname);
        await this.lastNameField.fill(lastname);
        await this.userNameField.fill(username);
        await this.passwordField.fill(password);
        await this.confirmPasswordField.fill(password);
        await this.signUpButton.click();
      }
}