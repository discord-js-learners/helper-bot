const { MessageEmbed } = require('discord.js');
const name = 'eightball';
const randomarray = require('./functions/randomarray');
const replies = [
	'It is certain.',
	'It is decidedly so.',
	'Without a doubt.',
	'Yes definitely.',
	'You may rely on it.',
	'As I see it, yes.',
	'Most likely.',
	'Outlook good.',
	'Yes.',
	'Signs point to yes.',

	'Reply hazy, try again.',
	'Ask again later.',
	'Better not tell you now.',
	'Cannot predict now.',
	'Concentrate and ask again.',

	'Don\'t count on it.',
	'My reply is no.',
	'My sources say no.',
	'Outlook not so good.',
	'Very doubtful.',
];

const noquestion = [
	'No question?',
	'idk man, i cant answer with no question',
	'bro quit using this command if you dont have a question',
	'eightball needs a question',
	'me dancin while waiting for ur question',
];
module.exports = (message, args) => {
	if (args.length > 0) {
		const keywords = args.join(' ');
		const reply = new MessageEmbed()
			.setTitle(`${keywords}`)
			.setColor('RANDOM')
			.setDescription(randomarray(replies));

		message.channel.send({ embeds: [reply] });
		console.log(`${message.member.user.tag} executed command '!${name}'`);
	} else {
		const reply = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(randomarray(noquestion));

		message.channel.send({ embeds: [reply] });
		console.log(`${message.member.user.tag} executed command '!${name}'`);
	}
};