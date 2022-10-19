const jwt = require('jsonwebtoken')

const checkLogin = (req,res,next)=>{
    const {authorization} = req.headers;
    try{
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const {email, userId} = decoded ;
        req.email = email;
        req.userId = userId;
        console.log(userId)
        console.log(email)
        next();
    }
    catch(err){
        next("Authorization failure!!")
    }
}

module.exports = checkLogin;