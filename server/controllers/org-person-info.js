const connection = require('../models/connection')

const orgPersonInfo = (req, res) => {
    let camp_id = parseInt(req.body.camp_id);
    let q1 = "select person_id ,slot_no from donates_blood where camp_id = ? and donated_date is null"
    let q2 = 'select person_fname, person_lname, person_bloodgroup, person_id from person_details where person_id in (select person_id from donates_blood where camp_id = ? and donated_date is null)'
    let q3 = " select camp_blood_type ,camp_blood_quantity from camp_blood_collected where camp_id = ?"
    connection.query(q1, camp_id, (error, results1, fields) => {
        if(error){
            console.log(error)
            return res.send({isRegistered : false, msg : "Database error"})
        } 
        connection.query(q2,camp_id, (error, results2, fields) => {
            if(error){
                console.log(error)
                return res.send({isRegistered : false, msg : "Database error"})
            } 
            
            let data = []
            for (let i  =0; i<results2.length ; i++){
                let obj = {}
                obj.slot_no = results1[i].slot_no
                obj.person_name = `${results2[i].person_fname} ${results2[i].person_lname}`
                obj.person_bloodgroup = results2[i].person_bloodgroup
                obj.person_id = results2[i].person_id
                data.push(obj)
            }
            connection.query(q3 , camp_id, (error, results3, fields) => {
                if(error){
                    console.log(error)
                    return res.send({isRegistered : false, msg : "Database error"})
                } 
                let data2 = {}
                for (item of results3){
                    data2[`${item.camp_blood_type}`] = item.camp_blood_quantity;
                }
                
                return res.send({personData : data, bloodgrpData : data2 })
            })
            
        })

    })

}

module.exports = orgPersonInfo;

