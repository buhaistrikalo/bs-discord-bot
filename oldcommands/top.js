const {MessageEmbed} = require("discord.js")
const fs = require('fs')

module.exports = {
    slash: 'both',
    testOnly: true,
    description: 'Top 10 players!',
    callback: ({message}) => {
        let file = JSON.parse(fs.readFileSync(process.env.FILETOPLEVEL));

        const embed = new MessageEmbed()
            .setTitle(`TOP 10 PLAYERS in GUN RPG!`)
            .setColor('#ff0000')
            .setFooter(`${lastUpdate()}`)
        let text = {}
        let place = 0
        for (let player in file)
        {
            if (place < 10)
            {
                place++
                let pl = file[player]
                embed.addField(`#${place} ${pl.name}`, `Level: ${pl.level} \nPrestige: ${pl.prestige}`)
            }
        }
        if (message)
        {

        }
        return embed
    }
}

let lastUpdate = () => {
    let Data = new Date();
    let Hour = Data.getHours();
    let Minutes = Data.getMinutes();
    let Seconds = Data.getSeconds();
    return ("Last update: " + Hour + ":" + Minutes + ":" + Seconds)
}