const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')
require("dotenv").config()

const {Intents} = DiscordJS

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
})

client.on('ready', async () => {
    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        testServers: ['825671978844553246']
    })
})


client.login(process.env.TOKEN)