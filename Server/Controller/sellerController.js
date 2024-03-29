const Shop = require('../Model/shopModel')
const User = require('../Model/userModel')
const Product = require('../Model/productModel')
const mongoose = require('mongoose')




/**
* * Post a new product to the shop
*TODO: Update product, Delete product, Get product by id, Get all products of a shop, Get all products of a shop   by category
*/


/** 
** All APIs for Product 
*/

//post a product  --tested
const postProduct = async (req,res,next)=>{
    try{
        const filesName = req.files.map(file=>{
            return file.filename
        })

        console.log(req)

        const shopDetail = await Shop.find({sellerId: req.userId})

        const newProduct = new Product({
            name: req.body.name,
            shopId: shopDetail[0]._id,
            shopName: shopDetail[0].name,
            sellerId: req.userId,
            purchasePrice: req.body.purchasePrice,
            retailPrice: req.body.retailPrice,
            productDetail: req.body.productDetail,
            inStock: req.body.inStock,
            features: req.body.features,
            category:req.body.category,
            pictures: filesName,
            thumbnail: filesName[0]
        })

        await newProduct.save();
        res.status(200).json({'message':'New product created!','product':newProduct})
    }
    catch(err){
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}

//get all products of a shop  

const getAllProducts = async (req,res,next)=>{
    try{
        const shopDetail = await Shop.find({sellerId: req.userId})
        const products = await Product.find({shopId: shopDetail[0]._id})
        res.status(200).json(products)
    }
    catch(err){
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}

// get Product By Id 
const getProductById = async (req,res,next)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json({'message':'Product found','product':product})
    }
    catch(err){
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}

//get product by category
const getProductByCategory = async (req,res,next)=>{
    try{
        const shopDetail = await Shop.find({sellerId: req.userId})
        const products = await Product.find({shopId: shopDetail[0]._id,category:req.params.category})
        res.status(200).json({'message':'All products of the shop','products':products})
    }
    catch(err){
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}


// update product by id 
const updateProduct = async (req,res,next)=>{
    try{
        const filesName = req.files.map(file=>{
            return file.filename
        })

        const product = await Product.findById(req.params.id)
        product.name = req.body.name
        product.price = req.body.price
        product.productDetail = req.body.productDetail
        product.inStock = req.body.inStock
        product.features = req.body.features
        product.category = req.body.category
        product.pictures = filesName
        await product.save()
        res.status(200).json({'message':'Product updated','product':product})
    }
    catch(err){
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}



// delete product 

const deleteProduct = async (req,res,next)=>{
    try{
        const product = await Product.findById(req.params.id)
        await product.remove()
        res.status(200).json({'message':'Product deleted'})
    }
    catch(err){
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}


/** 
**All APIs for SHOP
*/

//get shop  --tested
const getShop = async (req,res,next)=>{
    try{
        console.log('hitted')
        const shopDetail = await Shop.find({sellerId: req.userId})
        console.log(shopDetail[0])
        if(shopDetail[0]){
            res.status(200).json(shopDetail[0])
        }
        else{
            res.status(200).json(undefined)
        }
        
    }
    catch(err){
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}



// seller update shop --tested
/** 
*! here is some problem with file updating, without filename it is not working
*/
const updateShop = async (req,res,next)=>{
    try{
        const shopDetail = await Shop.find({sellerId: req.userId})
        const shop = await Shop.findOneAndUpdate({sellerId: req.userId},{
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            description: req.body.description,
            profilePicture: req.file.filename
        })
        res.status(200).json({'message':'Shop updated','shop':shop})
    }
    catch(err){
        console.log(err)
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}

// seller create shop  --tested
const createShop = async (req,res,next)=>{
    
    try{

        const user = await User.find({_id: req.userId})
        console.log(user)
        console.log(req.body)
        console.log("file:",req.file)
        if(user && user.length>0){
            if(user[0].role==='seller'){
                console.log('seller exists')
                const newShop = new Shop({
                    name:req.body.name,
                    sellerId: req.userId,
                    description: req.body.description,
                    phone: req.body.phone,
                    email: req.body.email,
                    profilePicture: req.file.filename,
                    

                })

                console.log(req.userId)
                await newShop.save()
        
                res.status(200).json({
                    'message':"Shop created",
                    'shopInfo':newShop
                })
            }
            else{
                res.status(401).json({
                    "message":"Authentication failed "
                })
            }
        }
        else{
            res.status(401).json({
                "message":"Authentication failed "
            })
        }
    }
    catch(err){
        res.status(500).json({'message':err})
    }

}

// delete shop --tested
const deleteShop = async (req,res,next)=>{
    try{

        const shopDetail = await Shop.find({sellerId: req.userId})
        const shop = await Shop.findByIdAndDelete(shopDetail[0]._id)
        const products= await Product.deleteMany({shopId:shopDetail[0]._id})
        res.status(200).json({'message':`Shop deleted`,'shop':shop,'products':products})
    }
    catch(err){
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}


module.exports ={ createShop,postProduct,getAllProducts, getProductById, getShop,updateShop,getProductByCategory,deleteShop, deleteProduct , updateProduct}