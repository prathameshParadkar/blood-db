var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : process.env.REACT_APP_DB_PASS, 
  database : 'blood_management' 
});

module.exports = connection