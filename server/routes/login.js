const express = require('express')
const {Router} = require('express')
const login = require('../controllers/login')
const router = express.Router()
const cookieParser = require('cookie-parser')


router.post('/', login)

module.exports = router