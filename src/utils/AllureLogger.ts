import * as allure from 'allure-js-commons';

export class AllureLogger {

    private static getMethodName(): string {
        const err = new Error();
        const stack = err.stack?.split('\n');

        if (!stack || stack.length < 3) return 'unknownMethod';

        const methodLine = stack[2];
        const match = methodLine.match(/at\s+(?:\w+\.)?(\w+)/);
        return match?.[1] || 'unknownMethod';
    }

    static getCallerInfo(className: string, methodName?: string): string {
        const method = methodName || AllureLogger.getMethodName();
        return `[${className} > ${method}]`;
    }
}

export async function logTestStep(callerInfo: string, action: string, stepFn: () => Promise<void>): Promise<void> {
    await allure.step(`${callerInfo} ${action}`, stepFn);
};