const express = require('express')
const { createShop,postProduct } = require('../Controller/sellerController')
const checkLogin = require('../middlewares/checkLogin')
const { uploadSingle } = require('../middlewares/fileUploader')

const router  = express.Router()

router.post('/create-shop',checkLogin,createShop)
router.post('/post-product', checkLogin,uploadSingle,postProduct)


module.exports = router