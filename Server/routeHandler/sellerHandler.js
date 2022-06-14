const express = require('express')
const { createShop,postProduct } = require('../Controller/sellerController')
const checkLogin = require('../middlewares/checkLogin')

const router  = express.Router()

router.post('/create-shop',checkLogin,createShop)
router.post('/post-product', checkLogin,postProduct)


module.exports = router