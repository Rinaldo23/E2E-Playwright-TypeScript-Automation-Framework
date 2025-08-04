import { Page } from "@playwright/test";
import * as allure from 'allure-js-commons';
import { IPageInteraction } from "../declarations/IPageInteraction";

export class PageInteraction implements IPageInteraction {

    async goToUrl(page: Page, url: string): Promise<void> {
        await allure.step(`Go to url "${url}"`, async () => {
            try {
                await page.goto(url, { waitUntil: "load" });
            } catch (error) {
                throw new Error(`${error}`);
            }
        });
    }

    async verifyPageNavigatedToUrl(page: Page, endPoint: string): Promise<boolean> {
        return await allure.step(`Verify page navigated to "${endPoint}" endpoint`, async () => {
            await page.waitForURL(`**/${endPoint}`, { waitUntil: "load" });
            return page.url().includes(endPoint);
        });
    }

}