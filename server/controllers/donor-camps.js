const connection = require('../models/connection')

const donorCamps = (req, res) => {
    let q = "select * from donation_camps natural join organizers";
    connection.query(q, (error, results, fields) => {
        res.send(results)
    })
}

module.exports = donorCamps