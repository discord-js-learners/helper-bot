const name = 'add'

module.exports = (message, args) => {
    if (args.length > 0) {
        console.log(args[0] + ', ' + args[1])
        let result;
        if (args[1] !== '+') {
            result = parseFloat(args[0]) + parseFloat(args[1]);
        } else if (args[1] === '+') {
            result = parseFloat(args[0]) + parseFloat(args[2]);
        } else {
            result = 'NaN';
        }
        message.channel.send(result)

        console.log(`${message.member.user.tag} executed command '!${name}'`)
    } else {
        
        console.log(`${message.member.user.tag} executed command '!${name}'`)
    }
}