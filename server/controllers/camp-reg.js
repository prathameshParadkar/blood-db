const connection = require('../models/connection')

const campReg = (req, res) => {
    let data = req.body
    let q = "insert into donates_blood set ?"
    let q2 = "update donation_camps set camp_slots_remaining = ? where camp_id = ?" 
    let post = {
        person_id : data.person_id,
        camp_id : data.camp_id,
        blood_donated : 500,
        slot_no : data.slot_no
    }
    connection.query(q, post, (error, results, fields) => {
        if(error){
            console.log(error)
            return res.send({isBooked : false, msg : "Database error"})
        }
        connection.query(q2, [data.slot_left, data.camp_id], (error, results, fields) => {
            if(error){
                console.log(error)
                return res.send({isBooked : false, msg : "Database error"})
            }
            return res.send({isBooked : true, msg : ""})
        })
    })


}

module.exports =  campReg;