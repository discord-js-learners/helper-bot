function fetch(...args) {
    return import('node-fetch').then(({ default: fetch }) => fetch(...args));
}
const ping = require('./commands/ping');
const gif = require('./commands/gif');
const random = require('./commands/random');
const eightball = require('./commands/eightball.js');
const commands = { ping, gif, random, eightball }

module.exports = async function (message) {
    let tokens = message.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) === '!') {
        command = command.substring(1);
        if(command in commands) {
            commands[command](message, tokens)
        } else {
            return;
        }
    } else {
        return;
    }
}