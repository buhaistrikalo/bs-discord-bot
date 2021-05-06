const settings = require('./botsetting.json');
const Discord = require('discord.js');
const prefix = settings.prefix;
const bot = new Discord.Client({disableEveryone: true});
const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}


 bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
  });
  
  bot.on('message', msg => {
    if(msg.author.bot || !msg.content.startsWith(prefix)) return; //проверка сообщения (не от бота и есть префикс)

    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0].slice(1);
    let args = messageArray.slice(1);


    if (cmd === 'test') {
      
      //const channel = msg.guild.channels.cache.forEach(channel => channel.name === "ideas");
      
      
    }

    if (cmd === 'player') {
      bot.commands.get('player').execute(msg, args)
    }
    
    if (cmd === 'item'){
      bot.commands.get('item').execute(msg)
    }
    if (cmd === 'clear'){
      bot.commands.get('clear').execute(msg)
    }
    if (cmd === 'ticket'){
      bot.commands.get('ticket').execute(msg)
    }
});
  
  bot.login(settings.token); 

