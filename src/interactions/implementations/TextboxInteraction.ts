import { Locator } from "@playwright/test";
import { ITextboxInteraction } from "../declarations/ITextboxInteraction";
import { logTestStep } from '../../utils/AllureLogger';

export class TextboxInteraction implements ITextboxInteraction {

    async setTextBoxValue(element: Locator, elementName: string, value: string, callerInfo: string): Promise<void> {
        await logTestStep(`[${callerInfo}] ➜ Set textbox value as "${value}" in "${elementName}" via Locator ➜ ${element}`, async () => {
            try {
                await element.fill(value);
            } catch (error) {
                throw new Error(`${error}`);
            }
        });
    }

}