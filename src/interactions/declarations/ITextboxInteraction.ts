import { Locator } from "@playwright/test";

export interface ITextboxInteraction {

    setTextBoxValue(element: Locator, elementName: string, value: string): Promise<void>;

}