import { Locator } from "@playwright/test";

export interface ICheckboxInteraction {

    selectCheckbox(element: Locator, elementName: string): Promise<void>;

    unSelectCheckbox(element: Locator, elementName: string): Promise<void>;

}