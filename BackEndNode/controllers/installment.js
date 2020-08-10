var sql = require('mysql');

var con = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mayarflats_db"
});


exports.flatByNum = (req, res, next, id) => {
    let sql = `SELECT * FROM installments WHERE inst_flatno = ?`;
    con.query(sql, [id], (err, result)=> {
        if (err || result == ""){
            return res.status(400).json({
                error: "No installment found"
            })
        }
        req.data = result[0]
        next()
    })
}


// Post Installment Details
exports.postInstallmentDetails = (req , res) => {
    let data = {
        inst_amount: req.body.inst_amount,
        inst_flatno: req.body.inst_flatno,
        inst_CNIC: req.body.inst_CNIC,
        inst_owner: req.body.inst_owner,
        inst_date: req.body.inst_date
    };

    let sql = "INSERT INTO installments SET ?";
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

// Get Installments Details
exports.getInstallmentDetails = (req , res)=>
{
    console.log(req.data.inst_flatno)
    let sql = `SELECT * FROM installments WHERE inst_flatno = '${req.data.inst_flatno}'`
    con.query(sql , (err, rows)=>{
        if(err)throw err
        else{

             //for formatting a number into comma seprated values
        var nf = new Intl.NumberFormat();
          var i;
         for(i=0;i<rows.length ; i++)
             {

                rows[i].inst_amount=nf.format(result[i].inst_amount)
             }
            res.send(rows)
        }
    })
}

// Delete Installment Details
exports.deleteInstallmentDetails = (req , res)=>
{
    let sql = `DELETE FROM installments WHERE inst_flatno = '${req.data.inst_flatno}'`
    con.query(sql, (err, result) => {
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

// All Installments Details
exports.allInstallment = (req, res) => {
    let sql = "SELECT * FROM installments"
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

          result[i].inst_amount=nf.format(result[i].inst_amount)
      }

        res.json(result)
    })
}