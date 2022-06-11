const mongoose = require('mongoose')

const ShopSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    profilePicture:{
        type: Buffer
    },
    rating:{
        type: Number
    },
    userId:{
        type: String,
        required: true
    }
})

const Shop = mongoose.model('Shop',ShopSchema)

module.exports = Shop