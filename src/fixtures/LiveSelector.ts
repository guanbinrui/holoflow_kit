import { LiveSelector } from '@holoflows/kit/src/DOM/LiveSelector';

const ls = new LiveSelector<HTMLAnchorElement>();

ls
    .querySelector('a')
    .getElementsByClassName('.odd')
    .filter(anchor => anchor.textContent)
    .evaluateOnce();


