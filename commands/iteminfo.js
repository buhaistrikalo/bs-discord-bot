module.exports = {
    name: "item",
    aliases: [],
    permissions: [],
    description: "Item info!",
    async execute(Discord, message) {
        const items = require('../items/items.json');
        const attachment = new Discord
            .MessageAttachment(items.image, 'image.png');
        let description = []
        if (items.level) description.push("*Level: " + items.level + "*" + "\n")
        if (items.dmg) description.push("**+" + items.dmg + "** Damage")        
        if (items.spd) description.push("**+" + items.spd + "** Speed" )
        if (items.def) description.push("**+" + items.def + "** Defence")
        if (items.hp) description.push("**+" + items.hp + "** Health")
        let embed = new Discord.MessageEmbed() 
            .attachFiles(attachment)
            .setThumbnail('attachment://image.png')
            .setTitle(items.name)
            .setColor("#0099ff")
            .setDescription(description)
            .setFooter(items.desc)
        message.channel.send(embed)
    }
}