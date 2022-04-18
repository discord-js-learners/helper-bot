const fs = require('fs');


const commands = { }
for(const path of fs.readdirSync('commands')){
    if(!path.endsWith('.js')) continue;
    const [command, _] = path.split('.');
    commands[command] = require(`./commands/${path}`);
}
module.exports = async function (message) {
    let tokens = message.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) === '!') {
        command = command.substring(1);
        if(typeof commands[command] === 'function') {
            message.delete();
            commands[command](message, tokens);
        } else {
            return;
        }
        
    } else {
        return;
    }
}