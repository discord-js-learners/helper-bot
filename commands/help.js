/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');
const name = 'help';

module.exports = (message, args) => {
	const embedHelp = new MessageEmbed()
		.setTitle('Commands')
		.setDescription('Here are the available commands:')
		.setColor('#ff00fa')
		.addFields(
			{ name: '`!ping`', value: 'Gives the bot\'s ping.' },
			{ name: '`!gif`', value: 'Search on Tenor!' },
			{ name: '`!random`', value: 'Random message!' },
			{ name: '`!oddeven`', value: 'See if your number is odd or even.' },
			{ name: '`!prime`', value: 'See if your number is prime or divisible by a number.' },
			{ name: '`!clear`', value: 'Nukes a channel. Be careful with nuke bombs!' },
			{ name: '`!eightball`', value: 'Ask me a yes/no question.' },
			{ name: '`!help`', value: 'This!' },
		)
		.setTimestamp();
    
	message.channel.send({ embeds: [embedHelp] });
	console.log(`${message.member.user.tag} executed '!${name}'`);
};