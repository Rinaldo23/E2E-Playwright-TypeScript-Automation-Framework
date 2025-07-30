import { Locator } from "@playwright/test";
import { ITextboxInteraction } from "../declarations/ITextboxInteraction";

export class TextboxInteraction implements ITextboxInteraction {

    async setTextBoxValue(element: Locator, elementName: string, value: string): Promise<void> {
        await element.fill(value);
        console.log(`Set textbox value as ${value} in ${elementName} using locator - ${element}`);
    }

}