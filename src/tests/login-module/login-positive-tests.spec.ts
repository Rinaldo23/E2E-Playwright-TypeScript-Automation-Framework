import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';

test.describe("Login Scenario", {}, async () => {

    test("Login with valid user credentails", async ({ page }) => {

        await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
        await expect(page).toHaveTitle("Your Store");

        const homePage = new HomePage(page);
        await homePage.navigateToLoginModule();

        const loginPage = new LoginPage(page);
        await loginPage.login("virat.kolhi@gmail.com", "Test@12345");

        await page.waitForURL("**/account");
        expect(await loginPage.isLoginSuccessful()).toBeTruthy();
    })

})