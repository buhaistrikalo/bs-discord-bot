module.exports = {
    slash: 'both',
    testOnly: true,
    description: 'pong commad',
    callback: ({ message }) => {
        if (message)  {
            message.reply('pong')
        }
        return 'pong!'
    }
}