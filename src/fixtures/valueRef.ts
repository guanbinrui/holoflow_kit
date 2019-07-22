import { ValueRef } from '@holoflows/kit/src/util/ValueRef';

const v = new ValueRef(1);

v.addListener((newVal, oldVal) => {
    console.log(
        `change: %c${oldVal}%c to %c${newVal}`,
        'color: #fff; background-color: red; border-radius: 4px; padding: 0 4px;',
        '',
        'color: #fff; background-color: red; border-radius: 4px; padding: 0 4px;'
    );
});

setTimeout(() => {
    v.value = 2;
}, 2000);