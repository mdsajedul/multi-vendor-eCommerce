const User = require('../Model/userModel');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')



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
                    "access_token":token,
                    "message":"Login successfull"
                })
            }
            else{
                res.status(401).json({
                    "message":"Authentication failed"
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

const userRegistration  = async (req,res,next)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            dob: req.body.dob,
            gender: req.body.gender
        })
        console.log(newUser)
        await newUser.save()
        res.status(200).json({"message":"Registration Successfull"})

    }
    catch(err){
        res.status(500).send({
            "error":err,
            "message":"Registration failed"
        })
    }

}

module.exports = {userRegistration,login} 