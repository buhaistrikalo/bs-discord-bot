module.exports = {
    name: "item",
    aliases: [],
    permissions: [],
    description: "Item info!",
    async execute(Discord, message) {
        const items = require('../items/items.json');
        const attachment = new Discord
                      .MessageAttachment(items.image, 'image.png');
        let embed = new Discord.MessageEmbed() 
            .attachFiles(attachment)
            .setThumbnail('attachment://image.png')
            .setTitle(items.name)
            .setDescription("Item Level: " + items.level)
            .addFields(
                {name: 'DEF', value: items.def, inline: true}, 
                {name: 'SPEED', value: items.speed, inline: true},
            )
            .setFooter(items.desc)
            message.channel.send(embed)
    }
}