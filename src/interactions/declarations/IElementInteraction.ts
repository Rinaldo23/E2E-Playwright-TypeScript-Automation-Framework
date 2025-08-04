import { Locator } from '@playwright/test';

export interface IElementInteraction {

    click(element: Locator, elementName: string, callerInfo: string): Promise<void>;

    isElementPresent(element: Locator, elementName: string, callerInfo: string): Promise<boolean>;

}