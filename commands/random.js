const replies = ['don\'t forget the `this.`!', 'Pong!', 'Are we going to play on Bedwars?', 'Command Handling!', 'Boop!'];
const name = 'random';
const randomarray = require('./functions/randomarray');

module.exports = (message, args) => {
	message.channel.send(randomarray(replies));
	console.log(`${message.member.user.tag} executed '!${name}'`);
};