const connection = require('../models/connection')
const login = (req, res) => {
    let users;

    var q = `select * from users where type = ?`;
    connection.query(q,[req.body.loginType] , function (error, results, fields) {
        users = results;
        
        for (user of users){
            if(user.username == req.body.email){
                if(user.password == req.body.password){
                    return res.send({isLogin : true, msg : 'logged in'});
                    
                }
                else{
                    return res.send({isLogin : false, msg : 'Incorrect password'})
                }
            }
        }
        return res.send({isLogin : false, msg : 'No user found'})
    });
    
}

module.exports = login