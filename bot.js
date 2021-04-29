const settings = require('./botsetting.json');
const Discord = require('discord.js');
const prefix = settings.prefix;

const bot = new Discord.Client({disableEveryone: true});

 bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
  });
  
  bot.on('message', msg => {
    if(msg.author.bot) return; //проверка, чтобы бот не реагировал на сообщения других ботов
    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


    if (msg.content === prefix + 'сухой') {
      msg.reply('ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ!');
    }
  
    /*if (cmd === prefix + 'командуй') {
     msg.reply('Ротa, ' + args + ' !');
    }*/
});
  
  bot.login(settings.token); 

