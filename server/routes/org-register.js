const express = require('express')
const {Router} = require('express')
const login = require('../controllers/login')
const orgRegister = require('../controllers/org-register')
const router = express.Router()

router.post("/org-register", orgRegister)

module.exports = router; 