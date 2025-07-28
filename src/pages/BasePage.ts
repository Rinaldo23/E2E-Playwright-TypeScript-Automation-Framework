import { Page, expect } from '@playwright/test';

export default class BasePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToApplication() {
        await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveTitle("Your Store");
    }

    async verifyPageNavigation(urlFragment: string) {
        await this.page.waitForURL(`**/${urlFragment}`);
        const currentUrl = this.page.url();
        return currentUrl.includes(urlFragment);
    }
}