const express = require('express')
const {userRegistration,login} = require('../Controller/userController')

const router = express.Router()

// router.get('/test',test)
router.post('/registration',userRegistration)
router.post('/login',login)

module.exports = router;