const express = require('express')
const {Router} = require('express')
const {bloodBanks, RecBloodBanks, reqBloodBanks} = require('../controllers/blood-banks')
const router = express.Router()
 
router.get("/blood-banks", bloodBanks);
router.post("/blood-banks/:id", reqBloodBanks);
router.post("/rec-blood-banks", RecBloodBanks);

module.exports = router;
