const connection = require('../models/connection')

const bloodBanks = (req, res) => {
    let q = "select * from blood_banks"
    connection.query(q, (error, results, fields)=> {
        if(error){
            console.log(error)
        }
        res.send(results);
    })
}

module.exports = bloodBanks;