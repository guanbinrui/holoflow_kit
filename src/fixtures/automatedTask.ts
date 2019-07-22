import { AutomatedTabTask } from '@holoflows/kit/src/Extension/AutomatedTabTask';

export function register() {
    return AutomatedTabTask({
        async taskA() {
            return new Promise(resolve => {
                setTimeout(resolve, 10000);
                console.log('taskA has been executed');
            });
        },
    });
}