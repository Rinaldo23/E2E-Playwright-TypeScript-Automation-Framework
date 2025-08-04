import { expect, Locator, Page } from "@playwright/test";
import BasePage, { allure } from "./BasePage";

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
    private readonly submitBtn: Locator;
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
        this.submitBtn = this.page.getByRole('button', { name: 'Continue' });
        this.successTxt = this.page.getByRole('heading', { name: ' Your Account Has Been' });
    }

    async enterFirstName(firstName: string): Promise<void> {
        await allure.step(`ENTER FIRSTNAME`, async () => {
            await this.interaction.verifyPageNavigatedToUrl(this.page, 'register');
            expect(await this.interaction.isElementPresent(this.headingTxt, "Register Account Text")).toBeTruthy();
            await this.interaction.setTextBoxValue(this.firstNameTxtBox, 'firstNameTxtBox', firstName);
        });
    }

    async enterLastName(lastName: string): Promise<void> {
        await allure.step(`ENTER LASTNAME`, async () => {
            await this.interaction.setTextBoxValue(this.lastNameTxtBox, 'lastNameTxtBox', lastName);
        });
    }

    async enterEmail(email: string): Promise<void> {
        await allure.step(`ENTER EMAIL`, async () => {
            await this.interaction.setTextBoxValue(this.emailTxtBox, 'emailTxtBox', email);
        });
    }

    async enterMobileNumber(telephone: string): Promise<void> {
        await allure.step(`ENTER MOBILE NUMBER`, async () => {
            await this.interaction.setTextBoxValue(this.telephoneTxtBox, 'telephoneTxtBox', telephone);
        });
    }

    async enterPassword(password: string): Promise<void> {
        await allure.step(`ENTER PASSWORD`, async () => {
            await this.interaction.setTextBoxValue(this.passwordTxtBox, 'passwordTxtBox', password);
        });
    }

    async enterConfirmPassword(confirmPassword: string): Promise<void> {
        await allure.step(`ENTER CONFIRM PASSWORD`, async () => {
            await this.interaction.setTextBoxValue(this.confirmPasswordTxtBox, 'confirmPasswordTxtBox', confirmPassword);
        });
    }

    async subscribeToNewsLetter(subsribe: boolean): Promise<void> {
        subsribe
            ? await allure.step(`SUBSCRIBE TO NEWSLETTER`, async () => {
                await this.interaction.click(this.subscribeBtn, 'subscribeBtn');
            })
            : await allure.step(`UNSUBSCRIBE TO NEWSLETTER`, async () => {
                await this.interaction.click(this.unSubscribeBtn, 'unSubscribeBtn');
            });
    }

    async acceptPrivacyPolicy(): Promise<void> {
        await allure.step(`ACCEPT PRIVACY POLICY`, async () => {
            await this.interaction.selectCheckbox(this.policyChkBox, 'policyChkBox');
        });
    }

    async submit(): Promise<void> {
        await allure.step(`CLICK ON SUBMIT`, async () => {
            await this.interaction.click(this.submitBtn, 'submitBtn');
        });
    }

    async isRegistrationSuccessful(): Promise<boolean> {
        return await allure.step(`ENTER EMAIL`, async () => {
            return await this.interaction.isElementPresent(this.successTxt, "Your Account Has Been Created Txt");
        });
    }

}