const {MessageEmbed} = require("discord.js")

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

        const embed = new MessageEmbed()
            .setTitle('Test')
            .setDescription(id)

        if ( message ) {
            message.reply('', { embed } )
        }
        return embed
    }
}