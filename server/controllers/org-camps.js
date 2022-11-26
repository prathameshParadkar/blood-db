const connection = require('../models/connection')

const orgCamps = (req, res) => {
    let user = parseInt(req.body.userId);
    let status = "upcoming"
    let q = "Select * from donation_camps where organizer_id = (select organizer_id from organizers where organizer_administrator_id = ?) and camp_status = ?"
    connection.query(q, [user, status], (error, results, fields) => {
        if(error){
            console.log(error)
            return res.send({isRegistered : false, msg : "Database error"})
        } 
        res.send(results)
    })
}

module.exports = orgCamps;