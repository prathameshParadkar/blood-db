const connection = require('../models/connection')

const bloodDonated = (req, res) => {
    let q = "update donates_blood set donated_date = current_date where person_id = ? and camp_id = ?"
    let q2 = "update camp_blood_collected set camp_blood_quantity = camp_blood_quantity + 0.5 where camp_id = ? and camp_blood_type = ?"
    let data = req.body;
    connection.query(q, [data.person_id, data.camp_id], (error, results, fields) => {
        if(error){
            console.log(error)
            return res.send({isRegistered : false, msg : "Database error"})
        } 
        connection.query(q2, [data.camp_id, data.bloodgroup], (error, results, fields) => {
            if(error){
                console.log(error)
                return res.send({isRegistered : false, msg : "Database error"})
            } 
            res.send(results)
        })
        
    })
}


module.exports = bloodDonated