const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Zalowgowano jako ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('Nzg3OTk2NDkzODk0MTIzNTUy.X9dE7A.oItLwTL7oPNbYUmVBx63CbvLHc4');