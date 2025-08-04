import { Locator } from "@playwright/test";
import { ICheckboxInteraction } from "../declarations/ICheckboxInteraction";
import * as allure from 'allure-js-commons';

export class CheckboxInteraction implements ICheckboxInteraction {

    async selectCheckbox(element: Locator, elementName: string, callerInfo: string): Promise<void> {
        await allure.step(`[${callerInfo}] Checked "${elementName}" using locator - ${element}`, async () => {
            try {
                await element.check();
            } catch (error) {
                throw new Error(`${error}`);
            }
        });
    }

    async unSelectCheckbox(element: Locator, elementName: string, callerInfo: string): Promise<void> {
        await allure.step(`[${callerInfo}] Unchecked "${elementName}" using locator - ${element}`, async () => {
            try {
                await element.uncheck();
            } catch (error) {
                throw new Error(`${error}`);
            }
        });
    }

}