const express = require('express')
const {Router} = require('express')
const camps = require('../controllers/camps')
const router = express.Router()

router.post("/camps", camps);

module.exports = router;