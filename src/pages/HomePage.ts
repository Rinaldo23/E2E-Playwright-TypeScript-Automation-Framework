import { Locator, Page } from '@playwright/test';
import BasePage from './BasePage';

export default class HomePage extends BasePage {

    private readonly myAccountBtn: Locator;
    private readonly loginBtn: Locator;
    private readonly registerBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.myAccountBtn = this.page.getByRole('button', { name: 'My account' });
        this.loginBtn = this.page.getByRole('link', { name: 'Login' });
        this.registerBtn = this.page.getByRole('link', { name: 'Register' });
    }

    async navigateToLoginModule() {
        await this.navigateToApplication();
        await this.myAccountBtn.hover();
        await this.loginBtn.click();
    }

    async navigateToRegisterModule() {
        await this.navigateToApplication();
        await this.myAccountBtn.hover();
        await this.registerBtn.click();
    }

}