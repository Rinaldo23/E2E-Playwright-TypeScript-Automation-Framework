import { Locator } from "@playwright/test";

export interface IMouseInteraction {

    mouseHover(element: Locator, elementName: string, callerInfo: string): Promise<void>;

}