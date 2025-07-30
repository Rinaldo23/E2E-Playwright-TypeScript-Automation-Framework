import { Locator } from "@playwright/test";

export interface IMouseInteraction {

    mouseHover(element: Locator, elementName: string): Promise<void>;

}