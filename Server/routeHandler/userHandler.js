const express = require('express')
const {userRegistration,login,changeRole, getAllProducts, getProductByCategory} = require('../Controller/userController')
const checkLogin = require('../middlewares/checkLogin')

const router = express.Router()


router.post('/registration',userRegistration)
router.post('/login',login)
router.put('/change-role',checkLogin,changeRole)
router.get('/products',getAllProducts)
router.get('/products/:category',getProductByCategory)

module.exports = router;