const settings = require('./botsetting.json');
const Discord = require('discord.js')

const client = new Discord.Client({disableEveryone: true});

 client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
    if (msg.content === settings.prefix + 'сухой') {
      msg.reply('ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ!');
    }
  });
  
  client.login(settings.token); 

