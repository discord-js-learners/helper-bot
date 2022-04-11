module.exports = function (message, args) {
    const clientPing = Math.abs(Date.now() - message.createdTimestamp);
    message.channel.send(`Pong! Client ping: ${clientPing} ms.`);
}