import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

export default class RegisterPage extends BasePage {

    private readonly headingTxt: Locator;
    private readonly firstNameTxtBox: Locator;
    private readonly lastNameTxtBox: Locator;
    private readonly emailTxtBox: Locator;
    private readonly telephoneTxtBox: Locator;
    private readonly passwordTxtBox: Locator;
    private readonly confirmPasswordTxtBox: Locator;
    private readonly subscribeBtn: Locator;
    private readonly unSubscribeBtn: Locator;
    private readonly policyChkBox: Locator;
    private readonly continueBtn: Locator;
    private readonly successTxt: Locator;

    constructor(page: Page) {
        super(page);
        this.headingTxt = this.page.getByRole('heading', { name: 'Register Account' });
        this.firstNameTxtBox = this.page.getByRole('textbox', { name: 'First Name*' });
        this.lastNameTxtBox = this.page.getByRole('textbox', { name: 'Last Name*' });
        this.emailTxtBox = this.page.getByRole('textbox', { name: 'E-Mail*' });
        this.telephoneTxtBox = this.page.getByRole('textbox', { name: 'Telephone*' });
        this.passwordTxtBox = this.page.getByRole('textbox', { name: 'Password*' });
        this.confirmPasswordTxtBox = this.page.getByRole('textbox', { name: 'Password Confirm*' });
        this.subscribeBtn = this.page.getByText('Yes');
        this.unSubscribeBtn = this.page.getByText('No', { exact: true });
        this.policyChkBox = this.page.getByText('I have read and agree to the');
        this.continueBtn = this.page.getByRole('button', { name: 'Continue' });
        this.successTxt = this.page.getByRole('heading', { name: ' Your Account Has Been' });
    }

    async enterFirstName(firstName: string) {
        await this.page.waitForLoadState('domcontentloaded');
        expect(await this.headingTxt.isVisible()).toBeTruthy();
        await this.firstNameTxtBox.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.lastNameTxtBox.fill(lastName);
    }

    async enterEmail(email: string) {
        await this.emailTxtBox.fill(email);
    }

    async enterMobileNumber(telephone: string) {
        await this.telephoneTxtBox.fill(telephone);
    }

    async enterPassword(password: string) {
        await this.passwordTxtBox.fill(password);
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.confirmPasswordTxtBox.fill(confirmPassword);
    }

    async subscribeToNewsLetter(subsribe: boolean) {
        subsribe ? this.subscribeBtn.click() : this.unSubscribeBtn.click();
    }

    async acceptPrivacyPolicy() {
        await this.policyChkBox.check();
    }

    async submit() {
        await this.continueBtn.click();
    }

    async isRegistrationSuccessful() {
        return await this.successTxt.isVisible();
    }

}