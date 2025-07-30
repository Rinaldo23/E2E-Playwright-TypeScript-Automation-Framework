import { Locator } from "@playwright/test";
import { IInteractionService } from "./IInteractionService";
import { IElementInteraction } from "../declarations/IElementInteraction";
import { ElementInteraction } from "../implementations/ElementInteraction";

export class InteractionService implements IInteractionService {

    private readonly elementInteraction: IElementInteraction;

    constructor() {
        this.elementInteraction = new ElementInteraction();
    }

    async click(element: Locator, elementName: string): Promise<void> {
        await this.elementInteraction.click(element, elementName);
    }

}