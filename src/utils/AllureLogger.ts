import * as allure from 'allure-js-commons';

export async function logTestStep(callerInfo: string, stepFn: () => Promise<any>): Promise<any> {
    return await allure.step(`${callerInfo}`, stepFn);
};

export async function logTestAction(testAction: string, stepFn: () => Promise<any>): Promise<any> {
    return await allure.step(`${testAction.toUpperCase()}`, stepFn);
};