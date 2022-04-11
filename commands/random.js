const replies = ['don\'t forget the `this.`!', 'Pong!', 'Are we going to play on Bedwars?', 'Command Handling!', 'Boop!']

module.exports = function (message, args) {
    let index = Math.floor(Math.random() * replies.length)
    message.channel.send(replies[index])
}