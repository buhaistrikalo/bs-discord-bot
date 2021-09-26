module.exports = {
    name: 'Clear chat',
    permissions: ['ADMINISTRATOR'],
    category: 'test',
    description: 'clear chat',
    slash: true,
    testOnly: true,
    callback: ({channel}) => {
        console.log('Used clear command')
        return
    },
}

