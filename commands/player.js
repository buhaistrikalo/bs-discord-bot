const Discord = require('discord.js')

module.exports = {
    name: 'player',
    description: 'Search player',
    async execute(msg, args) {
        let players = require('../players/players.json');
        let player = msg.mentions.users.first();
        let playerid = player.id;
        try {
            if (players[playerid]) {
                let PL = players[playerid]
                let embed = new Discord.MessageEmbed() 
                .setThumbnail(player.displayAvatarURL())
                .setColor("#4169E1")
                .setAuthor(PL.name)
                .setDescription("Level: **" + PL.level + "**")
                .addFields(
                {name: 'PvE Bosses', value: PL.pve_raid, inline: true}, 
                {name: 'PvE Dung', value: PL.pve_dung, inline: true},
                {name: 'PvP Raiting', value: '**' + PL.pvp + '**', inline: true}
                )
                .setFooter(PL.clan, 'https://i.pinimg.com/originals/12/e4/d8/12e4d8059bcc09c0391ccf5854b68b37.png');
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