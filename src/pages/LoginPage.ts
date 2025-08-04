import { Locator, Page } from '@playwright/test';
import BasePage, { allure } from './BasePage';

export default class LoginPage extends BasePage {

    private readonly emailTxtBox: Locator;
    private readonly passwordTxtBox: Locator;
    private readonly loginBtn: Locator;
    private readonly myAccountTxt: Locator;

    constructor(page: Page) {
        super(page);
        this.emailTxtBox = this.page.getByRole('textbox', { name: 'E-Mail Address' });
        this.passwordTxtBox = this.page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = this.page.getByRole('button', { name: 'Login' });
        this.myAccountTxt = this.page.getByRole('heading', { name: 'My Account' });
    }

    async login(email: string, password: string): Promise<void> {
        await allure.step(`LOGIN TO APPLICATION`, async () => {
            await this.interaction.setTextBoxValue(this.emailTxtBox, 'emailTxtBox', email);
            await this.interaction.setTextBoxValue(this.passwordTxtBox, 'passwordTxtBox', password);
            await this.interaction.click(this.loginBtn, 'loginBtn');
        });
    }

    async isLoginSuccessful(): Promise<boolean> {
        return await allure.step(`VERIFY LOGIN IS SUCCESSFUL`, async () => {
            return await this.interaction.isElementPresent(this.myAccountTxt, "My Account Txt");
        });
    }

}