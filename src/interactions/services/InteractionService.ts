import { Locator, Page } from "@playwright/test";
import { IInteractionService } from "./IInteractionService";
import { IPageInteraction, IElementInteraction, IMouseInteraction, ITextboxInteraction, ICheckboxInteraction } from "../declarations";
import { PageInteraction, ElementInteraction, MouseInteraction, TextboxInteraction, CheckboxInteraction } from "../implementations";

export class InteractionService implements IInteractionService {

    private readonly pageInteraction: IPageInteraction;
    private readonly elementInteraction: IElementInteraction;
    private readonly mouseInteraction: IMouseInteraction;
    private readonly textboxInteraction: ITextboxInteraction;
    private readonly checkboxInteraction: ICheckboxInteraction;

    constructor() {
        this.pageInteraction = new PageInteraction();
        this.elementInteraction = new ElementInteraction();
        this.mouseInteraction = new MouseInteraction();
        this.textboxInteraction = new TextboxInteraction();
        this.checkboxInteraction = new CheckboxInteraction();
    }

    async goToUrl(page: Page, url: string): Promise<void> {
        await this.pageInteraction.goToUrl(page, url);
    }

    async verifyPageNavigatedToUrl(page: Page, endPoint: string): Promise<boolean> {
        return await this.pageInteraction.verifyPageNavigatedToUrl(page, endPoint);
    }

    async click(element: Locator, elementName: string): Promise<void> {
        await this.elementInteraction.click(element, elementName);
    }

    async isElementPresent(element: Locator, elementName: string): Promise<boolean> {
        return await this.elementInteraction.isElementPresent(element, elementName);
    }

    async mouseHover(element: Locator, elementName: string): Promise<void> {
        await this.mouseInteraction.mouseHover(element, elementName);
    }

    async setTextBoxValue(element: Locator, elementName: string, value: string): Promise<void> {
        await this.textboxInteraction.setTextBoxValue(element, elementName, value);
    }

    async selectCheckbox(element: Locator, elementName: string): Promise<void> {
        await this.checkboxInteraction.selectCheckbox(element, elementName);
    }

    async unSelectCheckbox(element: Locator, elementName: string): Promise<void> {
        await this.checkboxInteraction.unSelectCheckbox(element, elementName);
    }
}