const express = require('express')
const {Router} = require('express')
const campInfo = require('../controllers/camp-info')
const router = express.Router()

router.get('/camp-info/:id', campInfo)

module.exports = router;