import * as allure from 'allure-js-commons';

export async function logTestStep(callerInfo: string, action: string, stepFn: () => Promise<void>): Promise<void> {
    await allure.step(`${callerInfo} ${action}`, stepFn);
};