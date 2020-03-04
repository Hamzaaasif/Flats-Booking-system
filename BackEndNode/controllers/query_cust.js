// const dbConnection  = require("../dbconnection")
// //var mysql = require("mysql")
// var con;
// con = dbConnectionManager.dbConnection();

var mysql = require('mysql')

var con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"mayarflats_db"
})

exports.getquerycust = (req , res )=>{
  const que = "select * from query_cust"
  con.query(que , (err , result)=>{
    if(err)throw err;
    res.send(result)
  })
}