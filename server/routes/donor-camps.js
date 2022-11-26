const express = require('express')
const {Router} = require('express')
const router = express.Router()
const donorCamps = require("../controllers/donor-camps")

router.get("/donor-camps", donorCamps)

module.exports = router; 