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

    async enterFirstName(firstName: string): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
        expect(await this.headingTxt.isVisible()).toBeTruthy();
        await this.interaction.setTextBoxValue(this.firstNameTxtBox, 'firstNameTxtBox', firstName);
    }

    async enterLastName(lastName: string): Promise<void> {
        await this.interaction.setTextBoxValue(this.lastNameTxtBox, 'lastNameTxtBox', lastName);
    }

    async enterEmail(email: string): Promise<void> {
        await this.interaction.setTextBoxValue(this.emailTxtBox, 'emailTxtBox', email);
    }

    async enterMobileNumber(telephone: string): Promise<void> {
        await this.interaction.setTextBoxValue(this.telephoneTxtBox, 'telephoneTxtBox', telephone);
    }

    async enterPassword(password: string): Promise<void> {
        await this.interaction.setTextBoxValue(this.passwordTxtBox, 'passwordTxtBox', password);
    }

    async enterConfirmPassword(confirmPassword: string): Promise<void> {
        await this.interaction.setTextBoxValue(this.confirmPasswordTxtBox, 'confirmPasswordTxtBox', confirmPassword);
    }

    async subscribeToNewsLetter(subsribe: boolean): Promise<void> {
        subsribe
            ? this.interaction.click(this.subscribeBtn, 'subscribeBtn')
            : this.interaction.click(this.unSubscribeBtn, 'unSubscribeBtn');
    }

    async acceptPrivacyPolicy(): Promise<void> {
        await this.interaction.selectCheckbox(this.policyChkBox, 'policyChkBox');
    }

    async submit(): Promise<void> {
        this.interaction.click(this.continueBtn, 'continueBtn');
    }

    async isRegistrationSuccessful(): Promise<boolean> {
        return await this.successTxt.isVisible();
    }

}