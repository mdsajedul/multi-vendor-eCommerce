const express = require('express')
const {userRegistration,test} = require('../Controller/userController')

const router = express.Router()

router.get('/test',test)
router.post('/registration',userRegistration)

module.exports = router;