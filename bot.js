const DiscordJS = require("discord.js")
const WOKCommands = require('wokcommands')
require("dotenv").config()

const client = new DiscordJS.Client()
const guildId = '825671978844553246'


client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)

    new WOKCommands(client, {
        commandsDir: 'commands',
        testServers: [guildId],
        showWarns: false,
    })
    console.log(`${client.user.tag} ready for work`)
})

client.login(process.env.TOKEN)