const express = require('express')
const {userRegistration,login,changeRole} = require('../Controller/userController')
const checkLogin = require('../middlewares/checkLogin')

const router = express.Router()

// router.get('/test',test)
router.post('/registration',userRegistration)
router.post('/login',login)
router.put('/change-role',checkLogin,changeRole)

module.exports = router;