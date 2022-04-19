console.log('booting...')

// BOT CODE
const Discord = require('discord.js');
const config = require('./config.json');
const handler = require('./handler');
const randomarray = require('./commands/functions/randomarray')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
require('dotenv').config()

const activities = [
  "Medal.tv",
  "on Google",
  "in the developer console",
  "discord.js",
  "discord.js for fun",
  "Roblox",
  "Minecraft",
  "in the console",
  "with no one"
];
client.on("ready", async () => {
  try {
    setInterval(() => 
      {
        const index = randomarray(activities);
        client.user.setActivity(index)
      },
      10000
    );
  } catch (err) {
    console.error(`${err}\n\nGoing to a fixed status!`)
    client.user.setActivity('discord.js')
  }
  console.log('ready for use')
});

client.on('shardError', error => {
	console.error('A websocket connection encountered an error:', error);
});

client.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

client.on('messageCreate', handler)
console.log('finished checking')
client.login(process.env.TOKEN);