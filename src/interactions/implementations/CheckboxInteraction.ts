import { Locator } from "@playwright/test";
import { ICheckboxInteraction } from "../declarations/ICheckboxInteraction";
import { logTestStep } from '../../utils/AllureLogger';

export class CheckboxInteraction implements ICheckboxInteraction {

    async selectCheckbox(element: Locator, elementName: string, callerInfo: string): Promise<void> {
        await logTestStep(`[${callerInfo}] ➜ Check "${elementName}" via Locator ➜ "${element}"`, async () => {
            try {
                await element.check();
            } catch (error) {
                throw new Error(`${error}`);
            }
        });
    }

    async unSelectCheckbox(element: Locator, elementName: string, callerInfo: string): Promise<void> {
        await logTestStep(`[${callerInfo}] ➜ Uncheck "${elementName}" via Locator ➜ "${element}"`, async () => {
            try {
                await element.uncheck();
            } catch (error) {
                throw new Error(`${error}`);
            }
        });
    }

}