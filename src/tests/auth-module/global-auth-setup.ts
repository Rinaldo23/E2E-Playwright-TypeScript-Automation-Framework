import { test as setup, expect } from '../../fixtures/pom-fixture';

const authFile = process.cwd().replace(/\\/g, '/') + "/playwright/.auth/user.json";

setup('Login - user authentication state management', async ({ page, homePage, loginPage, assert }) => {
    // Perform authentication steps.
    await homePage.navigateToLoginModule();
    await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);

    await assert.assertTrue(await loginPage.verifyPageNavigation("account"), "Page navigated to account page.");
    await assert.assertTrue(await loginPage.isLoginSuccessful(), "Login is Successful.")
    // End of authentication steps.

    await page.context().storageState({ path: authFile });
});