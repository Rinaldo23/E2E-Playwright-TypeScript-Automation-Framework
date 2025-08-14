import { test, expect } from '../../fixtures/pom-fixture';
import { faker } from '@faker-js/faker';

test.describe("Register Scenario", {}, async () => {

    test.use({
        storageState: {
            cookies: [],
            origins: []
        }
    });

    test("Register a new user with valid credentials", async ({ homePage, registerPage, assert }) => {

        await homePage.navigateToRegisterModule();
        await registerPage.enterFirstName(faker.person.firstName());
        await registerPage.enterLastName(faker.person.lastName());
        await registerPage.enterEmail(faker.internet.email());
        await registerPage.enterMobileNumber(faker.phone.number({ style: 'international' }));
        await registerPage.enterPassword("Test@12345");
        await registerPage.enterConfirmPassword("Test@12345");
        await registerPage.subscribeToNewsLetter(false);
        await registerPage.acceptPrivacyPolicy();
        await registerPage.submit();

        await assert.assertTrue(await registerPage.verifyPageNavigation("success"), "Page navigated to success page.");
        await assert.assertTrue(await registerPage.isRegistrationSuccessful(), "Registeration is Successful.");
        await assert.assertFalse(await registerPage.isRegistrationSuccessful(), "Registeration is not Successful.");
    })

})