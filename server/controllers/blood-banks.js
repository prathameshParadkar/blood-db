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
const RecBloodBanks = (req, res) => {
    let bloodgroup = req.body.bloodgroup;
    let q = `select * from blood_banks natural join blood_bank_stocks where blood_type = '${bloodgroup}'`
    connection.query(q, (error, results, fields)=> {
        if(error){
            console.log(error)
        }
        
        res.send(results);
    })
}
const reqBloodBanks = (req, res) => {
    let id = parseInt(req.params.id)
    let quantity = parseFloat(req.body.quantity)
    let bloodgroup = req.body.bloodgroup
    let date = new Date()
    let q = `update blood_bank_stocks set blood_stock = blood_stock - ${quantity} where blood_bank_id = ? and blood_type = ?`
    let q2 = "insert into receives_blood set ? "
    let post = {
        person_id : parseInt(req.body.person_id),
        blood_bank_id : id,
        received_timestamp : date,
        receiver_quantity : quantity
    }
    
    connection.query(q,[id, bloodgroup], (error, results1, fields) => {
        if(error){
            console.log(error)
            return res.send({isDone : false, msg : "Database error"});
        }
        connection.query(q2, post, (error, results2, fields) => {
            if(error){
                console.log(error)
                return res.send({isDone : false, msg : "Database error"});
            }
            
            return res.send({isDone : true, msg : ""});
        })
        
    })
}



module.exports = {
    bloodBanks,
    RecBloodBanks,
    reqBloodBanks
};