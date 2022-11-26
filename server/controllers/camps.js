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

module.exports = camps;