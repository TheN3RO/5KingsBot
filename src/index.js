const chalk = require('chalk');
const Discord = require('discord.js')
const { Client } = require('discord.js')
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']})
const { TOKEN } = require('./config/config.js')
//wczytywanie modułów
const color = require("chalk")
//wczytywanie hendlerów
const reactionHandler = require("./handlers/reactionHandler")
const presenceHandler = require("./handlers/presenceHandler")
const autoroleHandler = require("./handlers/autoroleHandler")
const commandHandler = require("./handlers/commandHandler")
//wywoływanie funkcji
presenceHandler(client)
autoroleHandler(client)
commandHandler(client)
reactionHandler(client)
//strting bot
client.on('ready', () => {
  console.log(color.blue.bold(`Zalowgowano jako ${client.user.tag}!`));
});
//bot token
client.login(TOKEN);