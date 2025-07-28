import { test, expect } from '../../fixtures/pom-fixture';

test.describe("Login Scenario", {}, async () => {

    test("Login with valid user credentails", async ({ page, homePage, loginPage }) => {

        await homePage.navigateToLoginModule();
        await loginPage.login("virat.kolhi@gmail.com", "Test@12345");

        await page.waitForURL("**/account");
        expect(await loginPage.isLoginSuccessful()).toBeTruthy();
    })

})