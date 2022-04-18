console.log('booting...')

// BOT CODE
const Discord = require('discord.js');
const config = require('./config.json');
const handler = require('./handler');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
require('dotenv').config()

client.on('ready', () => {
  client.user.setActivity('discord.js')
  console.log('ready for use')
})

client.on('shardError', error => {
	console.error('A websocket connection encountered an error:', error);
});

client.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

client.on('messageCreate', handler)
console.log('finished checking')
client.login(process.env.TOKEN);