import { Locator } from "@playwright/test";
import { ICheckboxInteraction } from "../declarations/ICheckboxInteraction";
import * as allure from 'allure-js-commons';

export class CheckboxInteraction implements ICheckboxInteraction {

    async selectCheckbox(element: Locator, elementName: string): Promise<void> {
        await allure.step(`Checked "${elementName}" using locator - ${element}`, async () => {
            try {
                await element.check();
            } catch (error) {
                throw new Error(`${error}`);
            }
        });
    }

    async unSelectCheckbox(element: Locator, elementName: string): Promise<void> {
        await allure.step(`Unchecked "${elementName}" using locator - ${element}`, async () => {
            try {
                await element.uncheck();
            } catch (error) {
                throw new Error(`${error}`);
            }
        });
    }

}