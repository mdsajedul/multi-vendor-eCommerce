const Shop = require('../Model/shopModel')
const User = require('../Model/userModel')

const test = (req,res,next)=>{
    res.send('test')
}

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

module.exports ={ createShop, test}