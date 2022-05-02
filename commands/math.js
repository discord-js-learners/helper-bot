const name = 'add';
const { MessageEmbed } = require('discord.js');

module.exports = (message, args) => {
	if (args.length > 0) {
		let result;
		if (args[1] === '-') {
			result = args[0] - args[1];
		} else if (args[1] === '+') {
			result = parseFloat(args[0]) + parseFloat(args[2]);
		} else if (args[1] === '*') {
			result = args[0] * args[2];
		} else if (args[1] === '/') {
			result = args[0] / args[2];
		} else {
			result = 'NaN';
		}
		if (result !== 'NaN') {
			console.log(`${message.member.user.tag} executed command '!${name}':`);
			console.log(`${args}\n${args[0]} ${args[1]} ${args[2]} = ${result}`);
			message.channel.send(`${result}`);
		} else {
			const mathHelpEmbed = new MessageEmbed()
				.setTitle('Math command help')
				.setDescription('You\'ll need help for this hard command. **Remember to use space between numbers and operations**')
				.addFields(
					{ name: 'Addition:', value: '<num> + <num>' },
					{ name: 'Subtraction:', value: '<num> - <num>' },
					{ name: 'Multiplication:', value: '<num> * <num>' },
					{ name: 'Division:', value: '<num> / <num>' },
				);
			console.log(`${message.member.user.tag} executed command '!${name}', but needed some help.`);
			message.channel.send({ embeds: [mathHelpEmbed] });
		}
	} else {
		console.log(`${message.member.user.tag} executed command '!${name}', but didn't add the arguments.`);
	}
};