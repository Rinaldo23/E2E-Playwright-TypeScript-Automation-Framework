import { Locator } from '@playwright/test';

export interface IInteractionService {

    click(element: Locator, elementName: string): Promise<void>;

}