import { Locator } from "@playwright/test";
import { IElementInteraction } from "../declarations/IElementInteraction";
import * as allure from 'allure-js-commons';

export class ElementInteraction implements IElementInteraction {

    async click(element: Locator, elementName: string, callerInfo: string): Promise<void> {
        await allure.step(`[${callerInfo}] Clicked on "${elementName}" using locator - ${element}`, async () => {
            try {
                await element.click();
            } catch (error) {
                throw new Error(`${error}`);
            }
        });
    }

    async isElementPresent(element: Locator, elementName: string): Promise<boolean> {
        return await allure.step(`Verify "${elementName}" is present using locator - ${element}`, async () => {
            return await element.isVisible() && element.isEnabled();
        });
    }

}