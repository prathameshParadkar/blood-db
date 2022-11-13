const connection = require('../models/connection')

const orgRegister = (req, res) => {
    let data = req.body;
    let q1 = 'insert into users set ?';
 
        connection.query(q1, {
            username : data.email,
            password : data.password,
            type : "Organization"
        },(error, results, fields) => {
            if(error){
                return res.send({isRegistered : false, msg : "User already present"})
            }
        })

        let postOrg = {
            person_fname : data.fname,
            person_mname : data.mname,
            person_lname : data.lname,
            person_gender : data.gender,
            person_email : data.email,
            person_buliding : data.buildNo,
            person_street : data.streetNo,
            person_pincode : parseInt(data.pincode),
            person_city : data.city,
            person_state : data.state,
            person_birthdate : data.date,
            person_age : (new Date().getFullYear() - parseInt(data.date.substr(0,4))),
            
        }

        let q2 = "insert into person_details set ?"
        
        let q3 = "insert into organizers set ?";
        connection.query(q2, postOrg,(error, results, fields) => {
            if(error){
                return res.send({isRegistered : false, msg : "Database error"})
            } 
            let postOrg2 = {
                organizer_name : data.orgName,
                organizer_website : data.website,
                organizer_country : data.country,
                organizer_administrator_id : results.insertId,
            }

            connection.query(q3, postOrg2, (error, results, fields) => {
                if(error){
                    return res.send({isRegistered : false, msg : "Database error"})
                } 
                res.send({isRegistered : true, msg : ""})                
            })

             
        })
        
        
        
}


module.exports = orgRegister;