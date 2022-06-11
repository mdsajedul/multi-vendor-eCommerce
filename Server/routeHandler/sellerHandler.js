const express = require('express')
const { createShop,test } = require('../Controller/sellerController')
const checkLogin = require('../middlewares/checkLogin')

const router  = express.Router()

router.post('/create-shop',checkLogin,createShop)


module.exports = router