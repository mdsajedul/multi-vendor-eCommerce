const multer = require("multer");
const path = require('path')

var Storage = multer.diskStorage({
    destination:"./public/uploads",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})

var uploadSingle = multer({
    storage:Storage
})

var thumbnail = multer({
    storage:Storage
}).single('thumbnail')

var uploadMultiple = multer({
    storage:Storage
})

module.exports = {uploadSingle, uploadMultiple, thumbnail}