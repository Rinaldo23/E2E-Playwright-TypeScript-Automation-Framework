import { Locator } from "@playwright/test";
import { ICheckboxInteraction } from "../declarations/ICheckboxInteraction";

export class CheckboxInteraction implements ICheckboxInteraction {

    async selectCheckbox(element: Locator, elementName: string): Promise<void> {
        await element.check();
        console.log(`Checked ${elementName} checkbox using locator - ${element}`);
    }

    async unSelectCheckbox(element: Locator, elementName: string): Promise<void> {
        await element.uncheck();
        console.log(`Unchecked ${elementName} checkbox using locator - ${element}`);
    }

}