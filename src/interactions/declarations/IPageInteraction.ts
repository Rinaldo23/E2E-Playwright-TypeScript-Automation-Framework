import { Page } from "@playwright/test";

export interface IPageInteraction {

    goToUrl(page: Page, url: string): Promise<void>;

    verifyPageNavigatedToUrl(page: Page, endPoint: string): Promise<boolean>;

}