const {MessageEmbed} = require("discord.js")
const fs = require('fs')

module.exports = {
    slash: 'both',
    testOnly: true,
    description: 'write your account ID and find out your place in the ranking by level',
    minArgs: 1,
    expectedArgs: '<id>',
    callback: ({ message, args }) => {
        const id = parseInt(args[0])
        if (String(id).length > 5 || !id) {
            return "Enter your account ID! (in a game: F4 > stats > id)"
        }

        let file = JSON.parse(fs.readFileSync(process.env.FILETOPLEVEL));
        let found
        for (let player in file) {
            if (file[player].accid == id) {
                found = player 
            }
        }
        if (found) {
            const player = file[found]
            const embed = new MessageEmbed()
                .setTitle(`${player.name} #${found}`)
                .addFields(
                    { name: 'Level', value: player.level, inline: true },
                    { name: 'Prestige', value: player.prestige, inline: true }
                )
                .setColor('#0099ff')

            if ( message ) {
                message.reply('', { embed } )
            }
            return embed
        }
        return 'Enter your account ID! (in a game: F4 > stats > id)'
    }
}

