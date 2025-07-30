import { Locator } from '@playwright/test';

export interface IElementInteraction {

    click(element: Locator, elementName: string): Promise<void>;

}