import { Locator } from "@playwright/test";
import { IElementInteraction } from "../declarations/IElementInteraction";

export class ElementInteraction implements IElementInteraction {

    async click(element: Locator, elementName: string): Promise<void> {
        await element.click();
        console.log(`${elementName} clicked using locator - ${element}`);
    }

}