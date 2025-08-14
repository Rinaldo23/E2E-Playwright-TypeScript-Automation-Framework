import { test as base } from '@playwright/test';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import { AssertionUtils } from '../utils/AssertionUtils';


type POMFixture = {
    homePage: HomePage;
    registerPage: RegisterPage;
    loginPage: LoginPage;
    assert: AssertionUtils;
}

export const test = base.extend<POMFixture>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    assert: async ({ page }, use) => {
        await use(new AssertionUtils());
    }
})

export { expect } from '@playwright/test';