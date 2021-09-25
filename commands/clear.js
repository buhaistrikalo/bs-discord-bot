const {ICommand} = require('wokcommands')

export default {
    category: 'test',
    description: 'clean chat',
    slash: true,
    testOnly: true,
    callback: ({message}) => {
        message.reply('lol')
    },
} as ICommand

