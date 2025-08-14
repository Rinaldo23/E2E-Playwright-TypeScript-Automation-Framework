import { expect, Locator } from '@playwright/test';
import { logTestStep } from './AllureLogger';

export class AssertionUtils {

    /**
     * Asserts that a condition is truthy.
     */
    async assertTrue(condition: any, message?: string): Promise<void> {
        await logTestStep(`ASSERT TRUE: ${message}`, async () => {
            expect(condition).toBeTruthy();
        });
    }

    /**
     * Asserts that a condition is falsy.
     */
    async assertFalse(condition: any, message?: string): Promise<void> {
        await logTestStep(`ASSERT FALSE: ${message}`, async () => {
            expect(condition).toBeFalsy();
        });
    }

    /**
     * Asserts that two values are equal.
     */
    async assertEquals(actual: any, expected: any, message: string): Promise<void> {
        await logTestStep(`ASSERT EQUALS: ${message}`, async () => {
            expect(actual).toEqual(expected);
        });
    }

    /**
     * Asserts that a Locator is visible on the page.
     */
    async assertVisible(locator: Locator, elementName: string): Promise<void> {
        await logTestStep(`ASSERT VISIBLE: ${elementName}`, async () => {
            await expect(locator).toBeVisible();
        });
    }

    /**
     * Asserts that a Locator contains specific text.
     */
    async assertTextContains(locator: Locator, expectedText: string, elementName: string): Promise<void> {
        await logTestStep(`ASSERT TEXT CONTAINS in ${elementName}`, async () => {
            await expect(locator).toContainText(expectedText);
        });
    }

    /**
     * Asserts that a Locator has exact text.
     */
    async assertTextEquals(locator: Locator, expectedText: string, elementName: string): Promise<void> {
        await logTestStep(`ASSERT TEXT EQUALS in ${elementName}`, async () => {
            await expect(locator).toHaveText(expectedText);
        });
    }

    /**
     * Asserts that an array includes a value.
     */
    async assertArrayContains(array: any[], value: any, message: string): Promise<void> {
        await logTestStep(`ASSERT ARRAY CONTAINS: ${message}`, async () => {
            expect(array).toContain(value);
        });
    }

    /**
     * Asserts that a value is greater than another.
     */
    async assertGreaterThan(actual: number, expected: number, message: string): Promise<void> {
        await logTestStep(`ASSERT ${actual} > ${expected}: ${message}`, async () => {
            expect(actual).toBeGreaterThan(expected);
        });
    }
}