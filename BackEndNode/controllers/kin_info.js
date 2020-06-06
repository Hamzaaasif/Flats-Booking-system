var sql = require('mysql');

var con = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mayarflats_db"
});


exports.kinById = (req, res, next, id) => {
    let sql = `SELECT * FROM kin_info WHERE kin_CNIC = ?`;
    con.query(sql, [id], (err, result)=> {
        if (err || result == ""){
            return res.status(400).json({
                error: "No Kin Found"
            })
        }
        req.data = result[0]
        next()
    })
};


// Post Kin Details
exports.postKinDetails = (req , res) => {
    let data = {
        kin_name: req.body.kin_name,
        kin_relation: req.body.kin_relation,
        kin_CNIC: req.body.kin_CNIC,
        kin_address: req.body.kin_address
    };

    let sql = "INSERT INTO kin_info SET ?";
    con.query(sql, [data], (err, result) => {
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

// Get Kin Details
exports.getKinDetails = (req , res)=>
{
    let sql = `SELECT * FROM kin_info WHERE kin_CNIC = ${req.data.kin_CNIC}`
    con.query(sql , (err, rows)=>{
        if(err)throw err
        else{
            res.send(rows)
        }
    })
};

// Delete Kin Details
exports.deleteKinDetails = (req , res)=>
{
    let sql = `DELETE FROM kin_info WHERE kin_CNIC = '${req.data.kin_CNIC}'`
    con.query(sql, (err, result) => {
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
};
