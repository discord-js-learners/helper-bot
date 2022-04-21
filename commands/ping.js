/* eslint-disable no-unused-vars */
const name = 'ping';

module.exports = (message, args) => {
	const clientPing = Math.abs((Date.now() - message.createdTimestamp) / 10000);
	message.channel.send(`Pong! Client ping: ${clientPing} ms.`);
	console.log(`${message.member.user.tag} executed '!${name}'`);
};