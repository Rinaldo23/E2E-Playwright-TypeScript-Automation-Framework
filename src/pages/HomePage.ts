import { Locator, Page } from '@playwright/test';
import BasePage, { logTestAction } from './BasePage'

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
        await logTestAction(`NAVIGATE TO LOGIN PAGE`, async () => {
            await this.navigateToApplication();
            await this.interaction.mouseHover(this.myAccountBtn, 'AccountBtn', this.className);
            await this.interaction.click(this.loginBtn, 'loginBtn', this.className);
        });
    }

    async navigateToRegisterModule(): Promise<void> {
        await logTestAction(`NAVIGATE TO REGISTER PAge`, async () => {
            await this.navigateToApplication();
            await this.interaction.mouseHover(this.myAccountBtn, 'AccountBtn', this.className);
            await this.interaction.click(this.registerBtn, 'registerBtn', this.className);
        });
    }

    async navigateToHomeModule(): Promise<void> {
        await logTestAction(`NAVIGATE TO HOME PAGE`, async () => {
            await this.navigateToApplication();
        });
    }

}