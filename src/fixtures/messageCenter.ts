import { MessageCenter } from '@holoflows/kit/src/Extension/MessageCenter';

interface Messages {
    send: string,
    recevice: string,
}

const messageCenter = new MessageCenter<Messages>('test');

messageCenter.writeToConsole = true;

export default messageCenter;

// sender:
// messageCenter.on('recevice', message => {
//     console.log(`receive: ${message}`);
// });

// receiver:
// messageCenter.on('send', () => {
//     messageCenter.emit('recevice', 'this is a message from content script');
// });