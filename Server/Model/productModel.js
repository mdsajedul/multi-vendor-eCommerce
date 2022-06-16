const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    shopId:{
        type: String,
        required: true
    },
    shopName:{
        type: String,
        required: true
    },
    sellerId:{
        type: String,
        required: true
    },
    purchasePrice: {
        type: Number,
        required: true
    },
    retailPrice: {
        type: Number,
        required: true
    },
    productDetail:{
        type: String
    },
    totalRating:{
        type: Number
    },
    reviews:[{
        review: String, rating: Number, reviewerId: String
    }],
    quantity: Number,
    features:[{
        type: String
    }],
    pictures:[{
        type: String
    }],
    category:[{
        type: String
    }],
    thumbnail: {
        type: String
        
    }

})

const Product = mongoose.model('Product',ProductSchema)

module.exports = Product