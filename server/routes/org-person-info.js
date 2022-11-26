const express = require('express')
const {Router} = require('express');
const orgPersonInfo = require('../controllers/org-person-info');
const router = express.Router();

router.post("/org-person-info", orgPersonInfo)

module.exports = router;