import { Locator } from "@playwright/test";
import { IMouseInteraction } from "../declarations/IMouseInteraction";

export class MouseInteraction implements IMouseInteraction {

    async mouseHover(element: Locator, elementName: string): Promise<void> {
        await element.hover();
        console.log(`Mouse hovered on ${elementName} using locator - ${element}`);
    }

}