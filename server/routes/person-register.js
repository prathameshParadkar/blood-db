const express = require('express')
const {Router} = require('express')
const personRegister = require('../controllers/person-register')
const router = express.Router()

router.post('/person-register', personRegister)

module.exports = router