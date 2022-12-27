const express = require('express')
const {Router} = require('express')
const {camps, endCamp} = require('../controllers/camps')
const router = express.Router()

router.post("/camps", camps);
router.post("/end-camp/:id", endCamp)

module.exports = router; 