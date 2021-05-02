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
    if(msg.author.bot) return; //проверка, чтобы бот не реагировал на сообщения других ботов
    if(!msg.content.startsWith(prefix)) return; //пропускать сообщения без префикса


    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0].slice(1);
    let args = messageArray.slice(1);


    if (cmd === 'дневальный') {
      msg.reply('ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ!');
    }
    if (cmd === 'userinfo') {
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
    
    if (cmd === 'clear'){
      bot.commands.get('clear').execute(msg)
    }
});
  
  bot.login(settings.token); 

