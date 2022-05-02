const name = 'oddeven';
const oddOrEven = require('./functions/oddOrEven');

module.exports = (message, args) => {
	if (args.length === 1) {
		const result = oddOrEven(args);
		message.channel.send(`Your number is ${result}`);
		console.log(`${message.member.user.tag} executed '!${name}':`);
		console.log(`args: ${args}, result: ${result}`);
	} else if (args.length === 0) {
		message.channel.send('You didn\'t put a number.');
		console.log(`${message.member.user.tag} executed '!${name}', but forgot to put a number!`);
	} else if (args.length !== 1 || typeof args[0] !== 'number') {
		message.channel.send('You aren\'t supposed to do that!');
		console.log(`${message.member.user.tag} executed '!${name}', but something went wrong!`);
	}
};