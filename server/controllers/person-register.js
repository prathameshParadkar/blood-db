const connection = require('../models/connection')


const personRegister = (req, res) => {
    let data = req.body
        


         
        let post = {
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
            person_bloodgroup : data.bloodGrp
            
        }
        let q1 = 'insert into users set?';
        let q2 = "insert into person_details set ?"
        connection.query(q2, post,(error, results, fields) => {
            if(error){
                return res.send({isRegistered : false, msg : "Database error"})
            }
            connection.query(q1, {
                username : data.email,
                password : data.password,
                type : "Person",
                person_id : results.insertId
            },(error, results, fields) => {
                if(error){
                    return res.send({isRegistered : false, msg : "User already present"})
                }
            })
        })

 
        

        return res.send({isRegistered : true, msg : ""})
    }
    module.exports = personRegister