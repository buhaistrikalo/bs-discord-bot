const DiscordJS = require("discord.js")
const WOKCommands = require('wokcommands')
require("dotenv").config()

const client = new DiscordJS.Client()
const guildId = '825671978844553246'


client.on('ready',async () => {
    console.log(`Logged in as ${client.user.tag}!`)

    new WOKCommands(client, {
        commandsDir: 'commands',
        testServers: [guildId],
        showWarns: false,
    })
    console.log(`${client.user.tag} ready for work`)
})


// const getApp = () => {
//     const guildId = '825671978844553246'
//     const app = client.api.applications(client.user.id).guilds(guildId)
//     return app
// }

// client.on('ready', async () => {
//     console.log(`Logged in as ${client.user.tag}!`)

//     const commands = await getApp().commands.get()

//     //delete all commands
//     // for(const cmd of commands){ 
//     //     await getApp().commands(cmd.id).delete()
//     // }

//     await getApp().commands.post({
//         data: {
//             name: 'ping',
//             description: 'command',
//         },
//     });

//     await getApp().commands.post({
//         data: {
//             name: 'topplayers',
//             description: 'Highest levels'
//         },
//     });

//     await getApp().commands.post({
//         data: {
//             name: 'rank',
//             description: 'write your account ID and find out where you are in the ranking by level',
//             options: [
//                 {
//                     name: 'account',
//                     description: 'Account ID',
//                     require: false,
//                     type: 4
//                 }
//             ]
//         }
//     });

//     client.ws.on('INTERACTION_CREATE', async (interaction) => {
//         const { name, options } = interaction.data

//         const command = name.toLowerCase()

//         const args = {}

//         if (options) {
//             for (const option of options) {
//                 const { name, value } = option
//                 args[name] = value
//             }
//         }

//         if (command === 'rank') {
//             //lf account
//             // args = { account: 1 }
//         }
//         if (command === 'ping') {
//             reply(interaction,'pong')
//         }
//     })

//     const reply = (interaction, response) => {
//         let data = {
//             content: response,
//         }

//         //For embeds
//         if (typeof response === 'object') {
//             data = await createAPIMessage(interaction,response)
//         }

//         client.api.interactions(interaction.id, interaction.token).callback.post({
//             data: {
//                 type: 4,
//                 data,
//             }
//         })
//     }
// })

// const createAPIMessage = async (interaction, content) => {
//     const {} = await DiscordJS.APIMessage.create(
//         client.channels.resolve(interaction.channel_id).
//         content
//     )
//     .resolveDate()
//     .resolveFiles()
//     return { ...data, files }
// }

client.login(process.env.TOKEN)