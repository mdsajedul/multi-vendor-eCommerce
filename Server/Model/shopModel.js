const mongoose = require('mongoose')

const ShopSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    profilePicture:{
        type: String,
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
    },
    description:{
        type: String
    },
    phone:{
        type: String
    },
    email:{
        type: String
    }
})

const Shop = mongoose.model('Shop',ShopSchema)

module.exports = Shop