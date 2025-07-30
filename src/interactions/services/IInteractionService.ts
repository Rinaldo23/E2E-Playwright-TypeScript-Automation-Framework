import { Locator } from '@playwright/test';

export interface IInteractionService {

    /* Element Interactions */
    click(element: Locator, elementName: string): Promise<void>;

    /* Mouse Interactions */
    mouseHover(element: Locator, elementName: string): Promise<void>;

    /* Textbox Interactions */
    setTextBoxValue(element: Locator, elementName: string, value: string): Promise<void>;

    /* Checkbox Interactions */
    selectCheckbox(element: Locator, elementName: string): Promise<void>;

    unSelectCheckbox(element: Locator, elementName: string): Promise<void>;

}