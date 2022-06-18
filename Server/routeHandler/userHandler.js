const express = require('express')
const {userRegistration,login,changeRole, getAllProducts, getProductByCategory,getProductById} = require('../Controller/userController')
const checkLogin = require('../middlewares/checkLogin')

const router = express.Router()


router.post('/registration',userRegistration)
router.post('/login',login)
router.put('/change-role',checkLogin,changeRole)
router.get('/products',getAllProducts)
router.get('/products/:category',getProductByCategory)
router.get('/product/:id',getProductById)

module.exports = router;