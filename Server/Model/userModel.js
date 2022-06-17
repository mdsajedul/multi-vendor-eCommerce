const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    username:{
        type: String,
    },
    dob:{
        type:Date,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    gender:{
        type:String,
        enum:['male','female']
    },
    role:{
        type:String,
        enum:['user','seller','admin','rider'],
        default:'user'
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;