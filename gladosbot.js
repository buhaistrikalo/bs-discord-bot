const DiscordJS = require("discord.js")
require("dotenv").config()


const client = new DiscordJS.Client()

const getApp = () => {
    const guildId = '825671978844553246'
    const app = client.api.applications(client.user.id).guilds(guildId)
    return app
}

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)

    const commands = await getApp().commands.get()

    for(const cmd of commands){ //delete all commands
        await getApp().commands(cmd.id).delete()
    }

    // await getApp().commands.post({
    //     data: {
    //         name: 'ping',
    //         description: 'command',
    //     },
    // })

    client.ws.on('INTERACTION_CREATE', async (interaction) => {
        const command = interaction.data.name.toLowerCase()
        if (command === 'ping') {
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "pong"
                    }
                }
            })
        }
    })

    // const reply = (interaction, response) => {
    //     client.api.interaction(interaction.id, interaction.token).callback.post({
    //         data: {
    //             type: 4,
    //             data: {
    //                 content: response,
    //             },
    //         },
    //     })
    // }
})

client.login(process.env.TOKEN)