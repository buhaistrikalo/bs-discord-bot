module.exports = {
    name: 'clear',
    description: 'Clear messages',
    async execute(message) {
        await message.channel.messages.fetch().then(messages => {
            message.channel.bulkDelete(messages);
        })
    }
}