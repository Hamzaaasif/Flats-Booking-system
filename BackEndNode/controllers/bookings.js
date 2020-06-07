var sql = require('mysql');

var con = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mayarflats_db"
});


// Get Flat Details by req.param by flat no
exports.GetbookingsByNum = (req , res)=>
{
    let sql = `SELECT * FROM bookings WHERE flat_no = '${req.data.flat_no}'`
    con.query(sql , (err, rows)=>{
        if(err)throw err
        else{

          //for formatting a number into comma seprated values
      var nf = new Intl.NumberFormat();
      rows.total_amount = nf.format(rows.total_amount)
      

            res.send(rows)
        }
    })
    
}


// req.param by flat no

exports.getBookingsDetails = (req, res, next, flat_no) => {
  let sql = `SELECT * FROM bookings WHERE flat_no = ?`;
  con.query(sql, [flat_no], (err, result)=> {
      if (err || result == ""){
          return res.status(400).json({
              error: "bookings data not found"
          })
      }
      req.data = result[0]
      next()
  })
}



// Post bookings Details
exports.postBookings = (req , res) => {
  let data = {
    flat_no: req.body.flat_no,
    owner_cnic: req.body.owner_cnic,
    owner_name: req.body.owner_name,
    total_amount: null
  };
  if(req.body.total_amount){
      data.total_amount = req.body.total_amount
  }

  let sql = "INSERT INTO bookings SET ?";
  con.query(sql , [data] , (err, result) => {
      if(err){
          return res.status(400).json({
              error: err.sqlMessage
          });
      }
      else{
          res.status(200).json({
              message: "Inserted Successfuly"
          });
      }
  });
};



// get All bookingts Details
exports.allbookings = (req, res) => {
  let sql = "SELECT * FROM bookings"
  con.query(sql , (err , result)=>{
      if(err){
          return res.status(400).json({
              error: err
          })
      }

      //for formatting a number into comma seprated values
      var nf = new Intl.NumberFormat();
            var i;
            for(i=0;i<result.length ; i++)
            {

                result[i].total_amount = nf.format(result[i].total_amount)
            }

      res.json(result)
  })
}

// Delete Flat Details
exports.deleteBookings = (req , res)=>
{
    let sql = `DELETE FROM bookings WHERE flat_no = '${req.data.flat_no}'`
    con.query(sql, (err) => {
        console.log(err)
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        else{
            res.status(200).json({
                message: "Deleted Successfully"
            });
        }
    })
}


