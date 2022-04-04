const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const ping = require('./commands/ping')
const gif = require('./commands/gif')

const command = { ping, gif }

module.exports = async function (message) {
    let tokens = message.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) === '!') {
        command = command.substring(1);
        commands[command](msg, tokens)
    } else {
        return;
    }
}
