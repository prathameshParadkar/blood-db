const express = require('express')
const {Router} = require('express');
const orgCamps = require('../controllers/org-camps');
const router = express.Router();

router.post("/org-camps", orgCamps);

module.exports = router;