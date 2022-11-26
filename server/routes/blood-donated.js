const express = require('express')
const {Router} = require('express')
const bloodDonated = require('../controllers/blood-donated')
const router = express.Router()

router.post("/blood-donated", bloodDonated)

module.exports = router;