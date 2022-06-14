const Shop = require('../Model/shopModel')
const User = require('../Model/userModel')
const Product = require('../Model/productModel')


//post a product 
const postProduct = async (req,res,next)=>{
    try{

        const shopDetail = await Shop.find({_id: req.userId})

        const newProduct = new Product({
            name: req.body.name,
            shopId: shopDetail._id,
            shopName: shopDetail.name,
            sellerId: req.userId,
            price: req.body.price,
            productDetail: req.body.productDetail,
            quantity: req.body.quantity,
            features: req.body.features,
            category:req.body.category
        })

        await newProduct.save();
        res.status(200).json({'message':'New product created!','product':newProduct})
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

module.exports ={ createShop,postProduct}