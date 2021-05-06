const itemSchema = require('../models/item-schema.js')

module.exports = async (client) => {
    client.on('message', (args) => {
        let words = args[0]
        let ITEM = await itemSchema.findById(message.guild.id)
        if (!DBUSER) await itemSchema.findByIdAndUpdate(message.guild.id, {})

        if(ITEM && ITEM.itemSchema) {
            ITEMS.itemSchema.forEach(item => )
        } 
    })
}