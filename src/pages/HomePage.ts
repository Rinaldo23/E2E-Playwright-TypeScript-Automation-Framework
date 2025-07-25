import { Locator, Page } from '@playwright/test';

export default class HomePage {

    private readonly page: Page;
    private readonly myAccountBtn: Locator;
    private readonly loginBtn: Locator;
    private readonly registerBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.myAccountBtn = this.page.getByRole('button', { name: 'My account' });
        this.loginBtn = this.page.getByRole('link', { name: 'Login' });
        this.registerBtn = this.page.getByRole('link', { name: 'Register' });
    }

    async navigateToLoginModule() {
        await this.myAccountBtn.click();
        await this.loginBtn.click();
    }

    async navigateToRegisterModule() {
        await this.myAccountBtn.click();
        await this.registerBtn.click();
    }

}