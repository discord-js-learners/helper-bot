console.log('booting...')

// BOT CODE
const Discord = require('discord.js');
const handler = require('./handler');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
require('dotenv').config()

client.on('ready', () => {
  console.log('ready for use')
})

client.on('messageCreate', handler)

console.log('finished checking')
client.login(process.env.TOKEN);