import { Locator } from "@playwright/test";
import { ITextboxInteraction } from "../declarations/ITextboxInteraction";
import * as allure from 'allure-js-commons';

export class TextboxInteraction implements ITextboxInteraction {

    async setTextBoxValue(element: Locator, elementName: string, value: string): Promise<void> {
        await allure.step(`Set textbox value as "${value}" in "${elementName}" using locator - ${element}`, async () => {
            try {
                await element.fill(value);
            } catch (error) {
                throw new Error(`${error}`);
            }
        });
    }

}