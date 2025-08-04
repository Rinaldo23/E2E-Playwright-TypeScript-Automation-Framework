import { Locator, Page } from '@playwright/test';
import BasePage, { logTestAction } from './BasePage';

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
        await logTestAction(`LOGIN TO APPLICATION`, async () => {
            await this.interaction.setTextBoxValue(this.emailTxtBox, 'emailTxtBox', email, this.className);
            await this.interaction.setTextBoxValue(this.passwordTxtBox, 'passwordTxtBox', password, this.className);
            await this.interaction.click(this.loginBtn, 'loginBtn', this.className);
        });
    }

    async isLoginSuccessful(): Promise<boolean> {
        return await logTestAction(`VERIFY LOGIN IS SUCCESSFUL`, async () => {
            return await this.interaction.isElementPresent(this.myAccountTxt, "My Account Txt");
        });
    }

}