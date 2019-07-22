import { AsyncCall } from '@holoflows/kit/src/util/AsyncCall';

export const options = {
    key: 'test',
};

export const implementation = {
    add(a: number, b: number) {
        console.log(`${a} + ${b} = ${a + b}`);
    },
};

export const otherImplementation = {
    minus(a: number, b: number) {
        console.log(`${a} - ${b} = ${a - b}`);
    },
};

export const asyncCall = AsyncCall<typeof otherImplementation>(implementation, options);
export const otherAsyncCall = AsyncCall<typeof implementation>(otherImplementation, options);

// one side:
// setTimeout(() => {
//     const r = otherAsyncCall.add(1, 2);

//     console.log(r);
// }, 2000);

// the other side:
// setTimeout(() => {
//     const r = asyncCall.minus(2, 1);

//     console.log(asyncCall);
// }, 1000);