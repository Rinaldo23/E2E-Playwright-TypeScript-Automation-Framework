import { expect, Locator, Page } from '@playwright/test';
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

    async navigateToLoginModule(): Promise<void> {
        await this.navigateToApplication();
        await this.interaction.mouseHover(this.myAccountBtn, 'AccountBtn');
        await this.interaction.click(this.loginBtn, 'loginBtn');
    }

    async navigateToRegisterModule(): Promise<void> {
        await this.navigateToApplication();
        await this.interaction.mouseHover(this.myAccountBtn, 'AccountBtn');
        await this.interaction.click(this.registerBtn, 'registerBtn');
    }

    async navigateToHomeModule(): Promise<void> {
        await this.navigateToApplication();
        await this.verifyPageNavigation("home");
    }

}