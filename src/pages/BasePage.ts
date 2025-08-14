import { Page, expect } from '@playwright/test';
import { IInteractionService } from '../interactions/services/IInteractionService';
import { InteractionService } from '../interactions/services/InteractionService';
import { logTestAction } from '../utils/AllureLogger';

export default class BasePage {

    readonly page: Page;
    protected readonly className: string;
    readonly interaction: IInteractionService;

    constructor(page: Page) {
        this.page = page;
        this.className = this.constructor.name;
        this.interaction = new InteractionService();
    }

    async navigateToApplication(): Promise<void> {
        // await logTestAction(`NAVIGATE TO APPLICATION`, async () => {
        //     const baseURL = `${process.env.BASE_URL}/index.php?route=common/home`;
        //     await this.interaction.goToUrl(this.page, baseURL, this.className);
        //     await expect(this.page).toHaveTitle("Your Store");
        // });
        const baseURL = `${process.env.BASE_URL}/index.php?route=common/home`;
        await this.interaction.goToUrl(this.page, baseURL, this.className);
        await expect(this.page).toHaveTitle("Your Store");
    }

    async verifyPageNavigation(urlFragment: string): Promise<boolean> {
        return await logTestAction(`VERIFY PAGE NAVIGATION`, async () => {
            return await this.interaction.verifyPageNavigatedToUrl(this.page, urlFragment);
        });
    }
}

export { logTestAction } from '../utils/AllureLogger';