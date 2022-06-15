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
}).single('file')

var uploadMultiple = multer({
    storage:Storage
}).array('file',3)

module.exports = {uploadSingle, uploadMultiple}