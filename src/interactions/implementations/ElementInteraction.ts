import { Locator } from "@playwright/test";
import { IElementInteraction } from "../declarations/IElementInteraction";
import { logTestStep } from '../../utils/AllureLogger';

export class ElementInteraction implements IElementInteraction {

    async click(element: Locator, elementName: string, callerInfo: string): Promise<void> {
        await logTestStep(`[${callerInfo}] ➜ Click on "${elementName}" via Locator ➜ "${element}"`, async () => {
            try {
                await element.click();
            } catch (error) {
                throw new Error(`${error}`);
            }
        });
    }

    async isElementPresent(element: Locator, elementName: string): Promise<boolean> {
        return await logTestStep(`Verify "${elementName}" is present via locator ➜ ${element}`, async () => {
            return await element.isVisible() && element.isEnabled();
        });
    }

}