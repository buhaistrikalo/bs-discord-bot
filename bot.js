const DiscordJS = require("discord.js")
const WOKCommands = require('wokcommands')
const path = require('path')
require("dotenv").config()

const client = new DiscordJS.Client()
const guildId = '825671978844553246'


client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
    })
    console.log(`${client.user.tag} ready for work`)
})

client.login(process.env.TOKEN)