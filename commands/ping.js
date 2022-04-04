module.exports = function (msg, args) {
    message.channel.send(`Pong! ${Date.now() - message.createdTimestamp} ms`);
}