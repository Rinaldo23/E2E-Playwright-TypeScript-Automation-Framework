import * as allure from 'allure-js-commons';

export async function logTestStep(callerInfo: string, stepFn: () => Promise<any>): Promise<any> {
    return await allure.step(`${callerInfo}`, stepFn);
};