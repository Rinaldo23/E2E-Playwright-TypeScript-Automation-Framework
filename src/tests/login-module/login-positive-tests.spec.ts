import { test, expect } from '../../fixtures/pom-fixture';

test.describe("Login Scenario", {}, async () => {

    test("Verify login with valid user credentails", async ({ page, homePage }) => {
        await homePage.navigateToApplication();
        await page.getByRole('button', { name: ' My account' }).hover();
        expect(await page.getByRole('link', { name: 'Logout' }).isVisible()).toBeTruthy();
        await page.waitForTimeout(3000);
    })

    test("Verify MyOrder section is visible", async ({ page, homePage }) => {
        await homePage.navigateToApplication();
        await page.getByRole('button', { name: ' My account' }).hover();
        expect(await page.getByRole('link', { name: 'My order' }).isVisible()).toBeTruthy();
        await page.waitForTimeout(3000);
    })

})