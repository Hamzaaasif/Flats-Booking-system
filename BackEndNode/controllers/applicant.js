var sql = require('mysql');

var con = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mayarflats_db"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Database connected...")
});

exports.appByCNIC = (req, res, next, id) => {
    console.log(id)
    let sql = `SELECT * FROM applicant_info WHERE appli_CNIC = ?`;
    con.query(sql, [id], (err, result)=> {
        if (err || result == ""){
            return res.status(400).json({
                error: "No Applicant Found"
            })
        }
        req.data = result[0]
        next()
    })
};


// Post Applicant Details
exports.postApplicantDetails = (req , res) => {
    let data = {
        appli_name: req.body.appli_name,
        appli_father_name: req.body.appli_father_name,
        appli_DOB: req.body.appli_DOB,
        appli_CNIC: req.body.appli_CNIC,
        appli_address: req.body.appli_address,
        appli_nationality: req.body.appli_nationality,
        appli_occupation: req.body.appli_occupation
    };

    let sql = "INSERT INTO applicant_info SET ?";
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

// Get Applicant Details
exports.getApplicantDetails = (req , res)=>
{
    let sql = `SELECT * FROM applicant_info WHERE appli_CNIC = ${req.data.appli_CNIC}`
    con.query(sql , (err, rows)=>{
        if(err)throw err
        else{
            res.send(rows)
        }
    })
};

// Delete Applicant Details
exports.deleteApplicantDetails = (req , res)=>
{
    let sql = `DELETE FROM applicant_info WHERE appli_CNIC = '${req.data.appli_CNIC}'`
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
