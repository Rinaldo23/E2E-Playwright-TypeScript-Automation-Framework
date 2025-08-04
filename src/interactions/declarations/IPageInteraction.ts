import { Page } from "@playwright/test";

export interface IPageInteraction {

    goToUrl(page: Page, url: string, callerInfo: string): Promise<void>;

    verifyPageNavigatedToUrl(page: Page, endPoint: string, callerInfo: string): Promise<boolean>;

}