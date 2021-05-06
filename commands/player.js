const Discord = require('discord.js')

module.exports = {
    name: 'player',
    description: 'Search player',
    async execute(msg, args) {
        let players = require('../players/players.json');
        let playerid = msg.content.split('!')[2].slice(0,-1);
        try {
            if (players[playerid]) {
                let PL = players[playerid]
                let embed = new Discord.MessageEmbed() 
                //.setImage(msg.playerid.avatarURL)
                .setColor("#ff0000")
                .setAuthor(PL.name)
                .setDescription("Level: **" + PL.level + "**")
                .addFields(
                {name: 'PvE Raid progress', value: PL.pve_raid, inline: true}, 
                {name: 'PvE Dungeons progress', value: PL.pve_dung, inline: true},
                {name: 'PvP Raiting', value: '**' + PL.pvp + '**', inline: true}
                )
                .setFooter('Если вы заметили какое-либо нарушение правил данным игроком, напишите мне @Сухой')
                msg.channel.send(embed)
                } else {
                    msg.channel.send(args + ' player not founded')
                }

            } 
            catch (err) {
                throw err;
            }
    }
}