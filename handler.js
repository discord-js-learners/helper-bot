function fetch(...args) {
    return import('node-fetch').then(({ default: fetch }) => fetch(...args));
}
const ping = require('./commands/ping');
const gif = require('./commands/gif');
const random = require('./commands/random');
const eightball = require('./commands/eightball');
const help = require('./commands/help');
const oddeven = require('./commands/oddeven');
const prime = require('./commands/prime');
const clear = require('./commands/clear');

const commands = { ping, gif, random, eightball, help, oddeven, prime, clear }

module.exports = async function (message) {
    let tokens = message.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) === '!') {
        command = command.substring(1);
        if(command in commands) {
            message.delete()
            commands[command](message, tokens)
        } else {
            return message.reply('Wrong command!');
        }
    } else {
        return;
    }
}