/* eslint-disable no-unused-vars */
const name = 'clear';
module.exports = async (message, args) => {
	if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply('you don\'t have the permission for that.');
	if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.channel.send('I don\'t have the permission for that.');
    
	try {
		await message.channel.clone().then(ch => {
			ch.setPosition(message.channel.position);
			ch.send('Channel Nuked').then(message => {setTimeout(() => message.delete(), 5000);});
		});
		await message.channel.delete();
		console.log(`${message.member.user.tag} executed command '!${name}'. Take cover!`);
	} catch (err) {
		console.error(err);
		console.log(`${message.member.user.tag} executed command '!${name}', but it didn't work!`);
	}
    
};
