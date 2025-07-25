import { expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import HomePage from '../../pages/HomePage';
import RegisterPage from '../../pages/RegisterPage';

test.describe("Register Scenario", {}, async () => {

    test("Register a new user with valid credentials", async ({ page }) => {

        await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
        await expect(page).toHaveTitle("Your Store");

        const homePage = new HomePage(page);
        await homePage.navigateToRegisterModule();

        const registerPage = new RegisterPage(page);
        await registerPage.enterFirstName(faker.person.firstName());
        await registerPage.enterLastName(faker.person.lastName());
        await registerPage.enterEmail(faker.internet.email());
        await registerPage.enterMobileNumber(faker.phone.number({ style: 'international' }));
        await registerPage.enterPassword("Test@12345");
        await registerPage.enterConfirmPassword("Test@12345");
        await registerPage.subscribeToNewsLetter(false);
        await registerPage.acceptPrivacyPolicy();
        await registerPage.submit();

        await page.waitForURL("**/success");
        expect(await registerPage.isRegistrationSuccessful()).toBeTruthy();
    })

})