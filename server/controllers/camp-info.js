const connection = require('../models/connection')
const campInfo = (req, res) => {
    let q = "select * from donation_camps natural join organizers where camp_id = ?"
    let q2 = " select person_id from donates_blood where camp_id = ?"
    connection.query(q, [req.params.id], (error, results1, fields)=> {
        connection.query(q2, [req.params.id], (error, results2, fields)=> {
            res.send({...results1[0], results2})
        }) 
    })
}

module.exports = campInfo