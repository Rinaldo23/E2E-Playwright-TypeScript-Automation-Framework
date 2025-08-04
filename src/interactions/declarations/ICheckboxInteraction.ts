import { Locator } from "@playwright/test";

export interface ICheckboxInteraction {

    selectCheckbox(element: Locator, elementName: string, callerInfo: string): Promise<void>;

    unSelectCheckbox(element: Locator, elementName: string, callerInfo: string): Promise<void>;

}