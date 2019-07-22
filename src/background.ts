// import messageCenter from './fixtures/messageCenter';
// import { asyncCall } from './fixtures/asyncCall';
import { register } from './fixtures/automatedTask';

setTimeout(() => {
    const task = register();

    if (task) {
        task('https://www.baidu.com').taskA();
    }
}, 2000);

