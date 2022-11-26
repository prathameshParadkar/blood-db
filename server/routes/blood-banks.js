const express = require('express')
const {Router} = require('express')
const bloodBanks = require('../controllers/blood-banks')
const router = express.Router()

router.get("/blood-banks", bloodBanks);

module.exports = router;
