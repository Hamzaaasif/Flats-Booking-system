
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

//for creating post
exports.postquerycust = (req , res)=>{
  let data = {
    name:req.body.name,
    mob_no:req.body.mob_no,
    email:req.body.email 
  } ;

  let sql = "INSERT INTO query_cust SET ?"; 
  con.query(sql, data ,(err , result)=>{
    if(err)throw err;
    console.log(result);
    res.status(400).json({
      post:data
    })
  })
}


//for req.param to get all the data by name
exports.QueryCustName = (req , res , next , name)=>{

  let query = "SELECT * FROM query_cust WHERE name = ?"
  con.query(query , [name] , (err , query_cust)=>{
    if(err || query_cust=="")
    {
      return res.status(400).json({error:"Name not found..."})
    }
    req.profile = query_cust[0]; //add profile obj with user info
    next();
  }) 
}

//for searching by name 
exports.searchbyname = (req , res)=>{
  let query = "SELECT * FROM query_cust WHERE name = ?";
  con.query(query  , [req.params.name] , (err , rows)=>{
    res.send(rows);
  })
}

//for deleting by name
exports.deletebyname = (req , res)=>{
  let query = "DELETE FROM query_cust WHERE id = ?"
}
