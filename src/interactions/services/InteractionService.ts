import { Locator } from "@playwright/test";
import { IInteractionService } from "./IInteractionService";
import { IElementInteraction, IMouseInteraction, ITextboxInteraction, ICheckboxInteraction } from "../declarations";
import { ElementInteraction, MouseInteraction, TextboxInteraction, CheckboxInteraction } from "../implementations";

export class InteractionService implements IInteractionService {

    private readonly elementInteraction: IElementInteraction;
    private readonly mouseInteraction: IMouseInteraction;
    private readonly textboxInteraction: ITextboxInteraction;
    private readonly checkboxInteraction: ICheckboxInteraction;

    constructor() {
        this.elementInteraction = new ElementInteraction();
        this.mouseInteraction = new MouseInteraction();
        this.textboxInteraction = new TextboxInteraction();
        this.checkboxInteraction = new CheckboxInteraction();
    }

    async click(element: Locator, elementName: string): Promise<void> {
        await this.elementInteraction.click(element, elementName);
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