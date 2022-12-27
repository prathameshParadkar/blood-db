const connection = require('../models/connection')

const camps = (req, res) => {
    let q = "insert into donation_camps set ?;"
    let data = req.body;
    let q1 = "select organizer_id from organizers where organizer_administrator_id = ?";
    let post1 = data.userId;
    let q2 = 'insert into camp_blood_collected (camp_id, camp_blood_type, camp_blood_quantity) values ?'
    connection.query(q1, post1, (error, results1, fields)=> {
        if(error){
            return res.send({isDone : false, msg : "no organization found" })
        }
        
        let post = {
            camp_name : data.name,
            camp_status : "upcoming",
            camp_place : data.place,
            camp_street : data.streetNo,
            camp_pincode : data.pincode,
            camp_city : data.city,
            camp_state : data.state, 
            blood_bank_id : data.bbId,
            camp_slots_remaining : data.slots,
            camp_slots_total : data.slots,
            camp_date : data.date,
            camp_timing : data.time,
            organizer_id : results1[0].organizer_id,
            description : data.description
        }
        connection.query(q, post, (error, results2, fields)=> {
            if(error){ 
                console.log(error)
                return res.send({isDone : false, msg : "cant insert" })
            }
            let camp_id = results2.insertId;
            let post2 = [
                [camp_id,"A+", 0],
                [camp_id,"A-", 0],
                [camp_id,"B+", 0],
                [camp_id,"B-", 0],
                [camp_id,"AB+", 0],
                [camp_id,"AB-", 0],
                [camp_id,"O+", 0],
                [camp_id,"O-", 0]
                
            ]

            connection.query(q2, [post2], (error, results, fields) => {
                if(error){
                    console.log(error)
                    return res.send({isRegistered : false, msg : "Database error"})
                } 
                
                return res.send({isDone : true, msg : "" })
            })
            
        })
        
    })
    
    
    
}

const endCamp = (req, res) => {
    camp_id = req.params.id;
    data = req.body.data2
    let q = "update donation_camps set camp_status = 'ended' where camp_id = ?";
    let q1 = "select blood_bank_id from donation_camps where camp_id = ?"
    let q2 =  "update blood_bank_stocks, camp_blood_collected set blood_stock = blood_stock + camp_blood_quantity where blood_bank_stocks.blood_bank_id = ? and camp_blood_collected.camp_id = ? and blood_bank_stocks.blood_type = camp_blood_collected.camp_blood_type"
    
    connection.query(q, camp_id, (error, results, fields) => {
        if(error){
            console.log(error)
            return res.send({isDone : false, msg : "database error"})
        }
        connection.query(q1, camp_id, (error, results1, fields) => {
            if(error){
                console.log(error)
                return res.send({isDone : false, msg : "database error"})
            }
            let blood_bank_id = results1[0].blood_bank_id;
            connection.query(q2, [blood_bank_id, camp_id], (error, results2, fields) => {
                if(error){
                    console.log(error)
                    return res.send({isDone : false, msg : "database error"})
                }
                
                return res.send({isDone : true, msg : ""})
                
            })
            
        })

    })
}

module.exports = {
    camps,
    endCamp
}