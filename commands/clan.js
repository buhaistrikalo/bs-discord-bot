const Discord = require('discord.js')

module.exports = {
    name: 'clan',
    description: 'Search clan',
    async execute(msg) {
        let clans = require('../database/clans.json');
        let clanName = msg.content.slice(6);
        let clan = clans[clanName]
        //console.log(msg.guild.members.cache.get(clan.leader))
        try {
            if (clans[clanName]) {
                let clan = clans[clanName]
                let embed = new Discord.MessageEmbed() 
                    
                    .setColor("#4169E1")
                    .setAuthor(clan.name)
                    .setDescription(`**Tier: ${clan.tier}**`)
                    .addFields(
                    {name: 'PvE Bosses', value: clan.bosses, inline: true}, 
                    )
                    //.setFooter(`Clan leader: @!<${msg.author.id}>`)
                    if (clan.leader){
                        //embed.setFooter(`Clan leader: ${msg.guild.members(clan.leader).tag}`)
                    }
                    if (clan.icon) {
                        embed.setThumbnail(clan.icon)
                    } else {
                        embed.setThumbnail("https://cdn3.iconfinder.com/data/icons/e-sport-outline/64/13_Attack_esport_game_competition-512.png")
                    }
                msg.channel.send(embed)
            } else {
                msg.channel.send(clanName + ' clan not founded')
            }

        } catch (err) {
            throw err;
        }
    }
}