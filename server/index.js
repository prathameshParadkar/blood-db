const express = require('express')
const cookie = require("cookie")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const login = require('./routes/login');
const personRegister = require('./routes/person-register');
const orgRegister = require('./routes/org-register');
const donorCamps = require('./routes/donor-camps');
var mysql      = require('mysql2');
const campInfo = require('./routes/camp-info');
const campReg = require('./routes/camp-reg');
const bloodBanks = require('./routes/blood-banks');
const camps = require('./routes/camps');
const orgCamps = require('./routes/org-camps');
const orgPersonInfo = require('./routes/org-person-info');
const bloodDonated = require('./routes/blood-donated');



const app = express()
const port = 5000
 
app.use(cors())

app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(bloodDonated)
app.use(orgPersonInfo)
app.use(orgCamps)
app.use(camps)
app.use(bloodBanks)
app.use(campReg)
app.use(campInfo)
app.use(orgRegister)
app.use(personRegister)
app.use(login)
app.use(donorCamps)

app.listen(port, () => {
    console.log("listening on port 5000")
})