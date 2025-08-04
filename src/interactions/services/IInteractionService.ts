import { Locator, Page } from '@playwright/test';

export interface IInteractionService {

    /* Page Interactions */
    goToUrl(page: Page, url: string, callerInfo: string): Promise<void>;

    verifyPageNavigatedToUrl(page: Page, endPoint: string, callerInfo: string): Promise<boolean>;

    /* Element Interactions */
    click(element: Locator, elementName: string, callerInfo: string): Promise<void>;

    isElementPresent(element: Locator, elementName: string, callerInfo: string): Promise<boolean>;

    /* Mouse Interactions */
    mouseHover(element: Locator, elementName: string, callerInfo: string): Promise<void>;

    /* Textbox Interactions */
    setTextBoxValue(element: Locator, elementName: string, value: string, callerInfo: string): Promise<void>;

    /* Checkbox Interactions */
    selectCheckbox(element: Locator, elementName: string, callerInfo: string): Promise<void>;

    unSelectCheckbox(element: Locator, elementName: string, callerInfo: string): Promise<void>;

}