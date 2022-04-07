module.exports = function (message, args) {
    message.channel.send(`Pong! ${(Date.now() - message.createdTimestamp) / 1000} ms`);
}