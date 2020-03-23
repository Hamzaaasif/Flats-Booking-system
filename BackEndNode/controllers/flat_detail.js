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

exports.flatByNum = (req, res, next, id) => {
    let sql = `SELECT * FROM flats_details WHERE flat_num = ?`;
    con.query(sql, [id], (err, result)=> {
        if (err || result == ""){
            return res.status(400).json({
                error: "Flat data not found"
            })
        }
        req.data = result[0]
        next()
    })
}


// Post Flat Details
exports.postFlatDetails = (req , res) => {
    let data = {
        flat_num: req.body.flat_num,
        type: req.body.type,
        floor: req.body.floor,
        covered_area: req.body.covered_area,
        price: null
    };
    if(req.body.price){
        data.price = req.body.price
    }

    let sql = "INSERT INTO flats_details SET ?";
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

// Get Flat Details
exports.getFlatDetails = (req , res)=>
{
    let sql = `SELECT * FROM flats_details WHERE flat_num = '${req.data.flat_num}'`
    con.query(sql , (err, rows)=>{
        if(err)throw err
        else{
            res.send(rows)
        }
    })
    
}

// Delete Flat Details
exports.deleteFlatDetails = (req , res)=>
{
    let sql = `DELETE FROM flats_details WHERE flat_num = '${req.data.flat_num}'`
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

// All Flats Details
exports.allFlats = (req, res) => {
    let sql = "SELECT * FROM flats_details"
    con.query(sql , (err , result)=>{
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.json(result)
    })
}