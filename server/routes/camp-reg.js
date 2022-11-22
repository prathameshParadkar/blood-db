const express = require('express')
const {Router} = require('express')
const campReg = require('../controllers/camp-reg')
const router = express.Router()

router.post("/camp-reg", campReg)

module.exports = router;