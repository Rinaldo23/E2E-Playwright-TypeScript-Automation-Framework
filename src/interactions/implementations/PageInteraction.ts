import { Page } from "@playwright/test";
import { IPageInteraction } from "../declarations/IPageInteraction";
import { logTestStep } from '../../utils/AllureLogger';

export class PageInteraction implements IPageInteraction {

    async goToUrl(page: Page, url: string, callerInfo: string): Promise<void> {
        await logTestStep(`[${callerInfo}] ➜ Go to url "${url}"`, async () => {
            try {
                await page.goto(url, { waitUntil: "load" });
            } catch (error) {
                throw new Error(`${error}`);
            }
        });
    }

    async verifyPageNavigatedToUrl(page: Page, endPoint: string): Promise<boolean> {
        return await logTestStep(`Verify page navigated to "${endPoint}" endpoint`, async () => {
            await page.waitForURL(`**/${endPoint}`, { waitUntil: "load" });
            return page.url().includes(endPoint);
        });
    }

}