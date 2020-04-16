var mysql = require('mysql')

var con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"mayarflats_db"
})

con.connect(function(err){
  if(err)throw err;
  console.log("Database connected!!!...")
})



return con;