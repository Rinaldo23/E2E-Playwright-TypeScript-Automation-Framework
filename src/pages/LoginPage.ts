import { Locator, Page } from '@playwright/test';
import BasePage from './BasePage';

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

    async login(email: string, password: string) {
        await this.emailTxtBox.fill(email);
        await this.passwordTxtBox.fill(password);
        await this.loginBtn.click();
    }

    async isLoginSuccessful() {
        return await this.myAccountTxt.isVisible();
    }

}