module.exports = {
    name: 'ping',
    category: 'Testing',
    description: 'Replies with pong', // Required for slash commands
    slash: true,
    testOnly: true,
    callback: ({interaction}) => {
        interaction.reply('pong')
    },
}