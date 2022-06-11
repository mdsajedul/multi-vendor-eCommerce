const User = require('../Model/userModel');
const bcrypt = require("bcrypt")

const test =  (req,res,next)=>{
     res.send('test');
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

module.exports = {userRegistration,test} 