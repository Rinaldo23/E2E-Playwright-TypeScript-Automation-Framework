import { test, expect } from '../../fixtures/pom-fixture';

test.describe("Login Scenario", {}, async () => {

    test("Login with valid user credentails", async ({ page, homePage, loginPage }) => {

        await homePage.navigateToLoginModule();
        await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);

        expect(await loginPage.verifyPageNavigation("account")).toBeTruthy();
        expect(await loginPage.isLoginSuccessful()).toBeTruthy();
    })

})