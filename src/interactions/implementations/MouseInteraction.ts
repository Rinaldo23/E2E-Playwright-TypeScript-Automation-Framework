import { Locator } from "@playwright/test";
import { IMouseInteraction } from "../declarations/IMouseInteraction";
import * as allure from 'allure-js-commons';

export class MouseInteraction implements IMouseInteraction {

    async mouseHover(element: Locator, elementName: string): Promise<void> {
        await allure.step(`Mouse hovered on "${elementName}" using locator - ${element}`, async () => {
            try {
                await element.hover();
            } catch (error) {
                throw new Error(`${error}`);
            }
        });
    }

}