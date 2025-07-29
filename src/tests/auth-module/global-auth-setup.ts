import { test as setup, expect } from '../../fixtures/pom-fixture';

const authFile = process.cwd().replace(/\\/g, '/') + "/playwright/.auth/user.json";

setup('authenticate', async ({ page, homePage, loginPage }) => {
    // Perform authentication steps.
    await homePage.navigateToLoginModule();
    await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);

    expect(await loginPage.verifyPageNavigation("account")).toBeTruthy();
    expect(await loginPage.isLoginSuccessful()).toBeTruthy();
    // End of authentication steps.

    await page.context().storageState({ path: authFile });
});