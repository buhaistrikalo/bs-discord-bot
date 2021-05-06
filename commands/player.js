const Discord = require('discord.js')

module.exports = {
    name: 'player',
    description: 'Search player',
    async execute(msg, args) {
        let players = require('../database/players.json');
        let player = msg.mentions.users.first();
        let playerid = player.id;
        let PL = players[playerid]
        
        try {
            if (PL) {
                let embed = new Discord.MessageEmbed() 
                .setThumbnail(player.displayAvatarURL())
                .setColor("#4169E1")
                .setAuthor(PL.name)
                .setDescription(`Level: **${PL.level}**`)
                .addFields(
                {name: 'PvE Bosses', value: PL.pve_raid, inline: true}, 
                {name: 'PvE Dung', value: PL.pve_dung, inline: true},
                {name: 'PvP Raiting', value: `**${PL.pvp}**`, inline: true}
                )
                if (PL.clan){   
                    let clans = require('../database/clans.json'); 
                    embed.setFooter(clans[PL.clan].name, clans[PL.clan].icon)
                } 
                msg.channel.send(embed)
            } else {
                msg.channel.send(args + ' player not founded')
            }

        } catch (err) {
            throw err;
        }
    }
}