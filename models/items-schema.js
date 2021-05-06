const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const itemSchema = mongoose.Schema({
    _id: String,
    name: String,
    dmg: Number,
    spd: Number,
    def: Number,
    level: Number,
    desc: String, 
    tier: Number,
    image: String
})

module.exports = mongoose.model('item-schema', itemSchema)