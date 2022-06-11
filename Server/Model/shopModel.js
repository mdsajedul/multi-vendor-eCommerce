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
        type: Number,
        default: 0
    },
    sellerId:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum:['active','inactive'],
        default:'inactive'
    }
})

const Shop = mongoose.model('Shop',ShopSchema)

module.exports = Shop