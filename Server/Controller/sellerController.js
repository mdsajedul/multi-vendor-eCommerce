const Shop = require('../Model/shopModel')
const User = require('../Model/userModel')
const Product = require('../Model/productModel')



/**
* * Post a new product to the shop
*TODO: Update product, Delete product, Get product by id, Get all products of a shop, Get all products of a shop   by category
*/


/** 
** All APIs for Product 
*/

//post a product 
const postProduct = async (req,res,next)=>{
    try{
        const filesName = req.files.map(file=>{
            return file.filename
        })

        const shopDetail = await Shop.find({sellerId: req.userId})

        const newProduct = new Product({
            name: req.body.name,
            shopId: shopDetail[0]._id,
            shopName: shopDetail[0].name,
            sellerId: req.userId,
            price: req.body.price,
            productDetail: req.body.productDetail,
            quantity: req.body.quantity,
            features: req.body.features,
            category:req.body.category,
            pictures: filesName
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
        res.status(200).json({'message':'All products of the shop','products':products})
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

//get shop 
const getShop = async (req,res,next)=>{
    try{
        const shopDetail = await Shop.find({sellerId: req.userId})
        res.status(200).json({'message':'Shop found','shop':shopDetail})
    }
    catch(err){
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}

// seller update shop
const updateShop = async (req,res,next)=>{
    try{
        const shopDetail = await Shop.find({sellerId: req.userId})
        const shop = await Shop.findByIdAndUpdate(shopDetail[0]._id,{
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
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}

// seller create shop 
const createShop = async (req,res,next)=>{
    
    try{

        const user = await User.find({_id: req.userId})
        console.log(user)
        if(user && user.length>0){
            if(user[0].role==='seller'){
                const newShop = new Shop({
                    name:req.body.name,
                    sellerId: req.userId,
                    description: req.body.description,
                    phone: req.body.phone,
                    email: req.body.email,
                    profilePicture: req.file.filename

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

// delete shop 
const deleteShop = async (req,res,next)=>{
    try{
        const shopDetail = await Shop.find({sellerId: req.userId})
        const shop = await Shop.findByIdAndDelete(shopDetail[0]._id)
        res.status(200).json({'message':'Shop deleted','shop':shop})
    }
    catch(err){
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}


module.exports ={ createShop,postProduct,getAllProducts, getProductById, getShop,updateShop }