const userModel = require('../Model/userModel');

const test =  (req,res,next)=>{
     res.send('test');
}

const userRegistration  = async (req,res,next)=>{
    const userRegistrationData = req.body;
    console.log(userRegistrationData)
    const user = new userModel(userRegistrationData)

    try {
        await user.save()
        res.status(200).send({user:user,message:'Registration Complete'})
    }
    catch(err){
        res.status(500).send(err)
    }

}

module.exports = {userRegistration,test}