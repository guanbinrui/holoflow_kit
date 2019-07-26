holoflows_kit
=====

## Get Start

```
npm run start

# if you work with options.html remember to execute this command
# which eliminate `data-` prefix in script tag
npm run remove_data
```

## Code Base

[`Holoflows Kit`](https://www.npmjs.com/package/@holoflows/kit) can be divide into two mainly portions.

+ A communication protocol implementation which helps exchange imformation & RPC(remote process call) between different web-extension contexts;
+ A DOM actions bundler which helps bind a bundle of dom actions with realistic DOM nodes and redo those actions if nodes mutated later;

So two folders for those two mainly portions.

### `/src/DOM/`

| File Name | Description |
| ----- | ----- |
| `/LiveSelector.ts` | Chain up and store all built-in selectors and actions as user invoking sequence, evaluate all of those stuff until user invoke `evaluateOnce()`. So the return value of `evaluateOnce()` will be different at different times. |
| `/Proxy.ts` | First it's a DOM proxy. Everything you act on the proxy will reflect to the realistic DOM node. And one more thing the proxy did is recording those actions which can be redo/undo if DOM node changed. So it decoupled actions and realistic DOM nodes. |
| `/Watcher.ts` | It's not like the name tells watching sth but a checker. So the most important method is `watcherChecker`. It helps evaluate a list of values from `LiveSelector` and wrapping those values by `DomProxy` if needed when every time `watcherChecker` was invoked. `Watcher` is abstract class and `Watchers/*.ts` are concrete classes which use different strategies to invoke `watcherChecker` many times. Let user feels like it's watching sth. |

### `/src/Extension/`

| File Name | Description |
| ----- | ----- |
| `/MessageCenter.ts` | A pub/sub style event center implementation. But listeners can spread around different web-extension contexts. So you can create a listener in `content script` and dispatch this listener in `background script`. |
| `/util/AsyncCall.ts` | A simple JSON RPC implementation use message center as communication bridge. So you can call procedure in `content script` from `background script`. |
| `/AutomatedTabTask.ts` | Open a url in new tab and call procedure in `content script` from `background script`. |
