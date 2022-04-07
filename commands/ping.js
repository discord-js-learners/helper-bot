module.exports = function (message, args) {
    const clientPing = (Date.now() - message.createdTimestamp) / 1000;
    const apiPing = Math.floor(client.ws.ping);
    message.channel.send(`Pong! Client ping: ${clientPing} ms, API ping: ${apiPing}`);
}