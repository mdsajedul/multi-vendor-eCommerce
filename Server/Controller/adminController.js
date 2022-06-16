const Shop =require('../Model/shopModel')
const User =require('../Model/userModel')

// get all shops --tested
const getAllShops = async (req,res,next)=>{
    try{
        const shops = await Shop.find()
        res.status(200).json({'message':'All shops','shops':shops})
    }
    catch(err){
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}

// get shop by shop status  --tested
const getShopByShopStatus = async (req,res,next)=>{
    try{
        const shops = await Shop.find({status:req.params.shopStatus})
        res.status(200).json({'message':'All shops','shops':shops})
    }
    catch(err){
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}

// all users --tested
const getAllUsers = async (req,res,next)=>{
    try{
        const users = await User.find()
        res.status(200).json({'message':'All users','users':users})
    }
    catch(err){
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}

// all users by role --tested
const getAllUsersByRole = async (req,res,next)=>{
    try{
        const users = await User.find({role:req.params.role})
        res.status(200).json({'message':'All users','users':users})
    }
    catch(err){
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}




module.exports={ getAllShops, getShopByShopStatus, getAllUsers,getAllUsersByRole }