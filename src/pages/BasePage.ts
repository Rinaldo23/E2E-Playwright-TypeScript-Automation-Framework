import { Page, expect } from '@playwright/test';
import { IInteractionService } from '../interactions/services/IInteractionService';
import { InteractionService } from '../interactions/services/InteractionService';

export default class BasePage {

    readonly page: Page;
    readonly interaction: IInteractionService;

    constructor(page: Page) {
        this.page = page;
        this.interaction = new InteractionService();
    }

    async navigateToApplication(): Promise<void> {
        await this.page.goto(`${process.env.BASE_URL}/index.php?route=common/home`);
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveTitle("Your Store");
    }

    async verifyPageNavigation(urlFragment: string): Promise<boolean> {
        await this.page.waitForURL(`**/${urlFragment}`);
        const currentUrl = this.page.url();
        return currentUrl.includes(urlFragment);
    }
}