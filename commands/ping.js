/* eslint-disable no-unused-vars */
const name = 'ping';
/* / 10000*/
module.exports = (message, args) => {
	const clientPing = Math.abs((Date.now() - message.createdTimestamp));
	message.channel.send(`Pong! Client ping: ${clientPing} ms.`);
	console.log(`${message.member.user.tag} executed '!${name}'`);
};