const User = require('../Model/userModel');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const Product = require('../Model/productModel');


/** 
** All the functions below are for users
** 1. getAllProduct 2. getProductByCategory 3.login 4.Registration 5.change role
*/


// get all product --tested
const getAllProducts = async (req,res,next)=>{
    try{
        const products = await Product.find()
        res.status(200).json(
            products
        )
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

// get all product by category --tested
const getProductByCategory = async (req,res,next)=>{
    try{
        const products = await Product.find({category: req.params.category})
        res.status(200).json(
            products
        )
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getProductById = async (req,res,next)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }
    catch(err){
        res.status(500).json({'message':'Someting went wrong, Please try again!'})
    }
}


// login --tested
const login = async (req,res,next)=>{
    try{
        const user = await User.find({email: req.body.email})
        if(user && user.length>0){
            const isValidPassword = await bcrypt.compare(req.body.password, user[0].password)

            if(isValidPassword){
                const token = jwt.sign({
                    email:user[0].email,
                    userId: user[0]._id
                },process.env.JWT_SECRET,{
                    expiresIn:'1h'
                });

                res.status(200).json({
                    "accessToken":token,
                    "message":"Login successfull",
                    "user":user[0]
                })
            }
            else{
                res.status(401).json({
                    "message":"Authentication failed!"
                })
            }
        }
        else{
            res.status(401).json({
                "message":"Authentication failed"
            })
        }
    }
    catch(err){

    }
}

// registration --tested
const userRegistration  = async (req,res,next)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const newUser = new User({
            name: req.body.name,
            username: req.body.name.split(' ')[0].toLowerCase(),
            email: req.body.email,
            password: hashedPassword,
            dob: req.body.dob,
            gender: req.body.gender
        })
        console.log(newUser)
        await newUser.save()

        const token = jwt.sign({
            email:newUser.email,
            userId: newUser._id
        },process.env.JWT_SECRET,{
            expiresIn:'1h'
        });

        res.status(200).json({accessToken:token, user: newUser})

    }
    catch(err){
        res.status(500).send({
            "error":err,
            "message":"Registration failed"
        })
    }

}

// change role  --tested
const changeRole = async (req,res,next)=>{
    try{

        const user = await User.findOneAndUpdate({_id: req.userId},{
            role: req.body.role
        },{new:true})
        res.status(200).json({user:user})

    }
    catch(err){
        res.status(500).send({
            "error":err,
            "message":"Action failed"
        })
    }
}

module.exports = {userRegistration,login,changeRole, getAllProducts, getProductByCategory,getProductById} 