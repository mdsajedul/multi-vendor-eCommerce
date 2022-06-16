const express = require('express')
const { getAllShops, getShopByShopStatus, getAllUsers, getAllUsersByRole } = require('../Controller/adminController')
const checkLogin = require('../middlewares/checkLogin')


const router = express.Router()

router.get('/shops',checkLogin,getAllShops)
router.get('/shops/:shopStatus',checkLogin,getShopByShopStatus)
router.get('/users',checkLogin, getAllUsers)
router.get('/users/:role',checkLogin, getAllUsersByRole)

module.exports = router