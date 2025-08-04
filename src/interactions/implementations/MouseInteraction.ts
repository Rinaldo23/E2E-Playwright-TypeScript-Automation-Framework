import { Locator } from "@playwright/test";
import { IMouseInteraction } from "../declarations/IMouseInteraction";
import { logTestStep } from '../../utils/AllureLogger';

export class MouseInteraction implements IMouseInteraction {

    async mouseHover(element: Locator, elementName: string, callerInfo: string): Promise<void> {
        await logTestStep(`[${callerInfo}] ➜ Mouse hover on "${elementName}" via Locator ➜ "${element}"`, async () => {
            try {
                await element.hover();
            } catch (error) {
                throw new Error(`${error}`);
            }
        });
    }

}