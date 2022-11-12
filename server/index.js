const express = require('express')
const cors = require("cors")
const login = require('./routes/login');
var mysql      = require('mysql2');


const app = express()
const port = 5000


app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(login)

app.listen(port, () => {
    console.log("listening on port 5000")
})