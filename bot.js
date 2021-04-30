const settings = require('./botsetting.json');
const Discord = require('discord.js');
const prefix = settings.prefix;

const bot = new Discord.Client({disableEveryone: true});

 bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
  });
  
  bot.on('message', msg => {
    if(msg.author.bot) return; //проверка, чтобы бот не реагировал на сообщения других ботов
    if(!msg.content.startsWith(prefix)) return; //пропускать сообщения без префикса


    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


    if (cmd === prefix + 'дневальный') {
      msg.reply('ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ!');
    }
    if (cmd === prefix + 'userinfo') {
      let embed = new Discord.MessageEmbed() 
        //.setImage(msg.author.avatarURL)
        .setColor("#985986")
        .setAuthor(msg.author.username)
        .setDescription("Информация об игроке")
        .addFields(
          {name: 'PvE Raid progress', value: '10/10', inline: true}, 
          {name: 'PvE Dungeons progress', value: 'key 13 - 13:32', inline: true},
          {name: 'PvP Place: 3', value: 'Raiting: 2353', inline: true}
        )
        .setFooter('Если вы заметили какое-либо нарушение правил данным игроком, напишите мне @Сухой')
      msg.channel.send(embed)
    }
    console.log(msg.author.avatarURL)
    /*if (cmd === prefix + 'командуй') {
     msg.reply('Ротa, ' + args + ' !');
    }*/
});
  
  bot.login(settings.token); 

