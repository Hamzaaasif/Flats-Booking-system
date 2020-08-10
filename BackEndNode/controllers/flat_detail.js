var sql = require('mysql');

var con = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mayarflats_db"
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
        price: null,
        isbooked: req.body.isbooked,
        iscorner: req.body.iscorner,
        iswestopen: req.body.iswestopen,
        isroadfacing: req.body.isroadfacing
    };
    if(req.body.price){
        data.price = req.body.price
    }

    let sql = "INSERT INTO flats_details SET ?";
    con.query(sql , [data] , (err) => {
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
            
            //for formatting a number into comma seprated values

            var nf = new Intl.NumberFormat();
            rows.price=nf.format(rows.price)
             rows.covered_area =nf.format(rows.covered_area)
            

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

            var nf = new Intl.NumberFormat();
            var i;
            for(i=0;i<result.length ; i++)
            {

                result[i].price=nf.format(result[i].price)
                result[i].covered_area =nf.format(result[i].covered_area)
            }

            

        res.json(result)
    })
}

exports.bookedFlats = (req, res) => {
    let sql = "SELECT * FROM flats_details Where isbooked = 1"
    con.query(sql , (err , result)=>{
        if(err){
            return res.status(400).json({
                error: err
            })
        }

            var nf = new Intl.NumberFormat();
            var i;
            for(i=0;i<result.length ; i++)
            {

                result[i].price=nf.format(result[i].price)
                result[i].covered_area =nf.format(result[i].covered_area)
            }

        res.json(result)
    })
}

exports.unbookedFlats = (req, res) => {
    let sql = "SELECT * FROM flats_details Where isbooked = 0"
    con.query(sql , (err , result)=>{
        if(err){
            return res.status(400).json({
                error: err
            })
        }
            //  var nf = new Intl.NumberFormat();
            // var i;
            // for(i=0;i<result.length ; i++)
            // {

            //     result[i].price=nf.format(result[i].price)
            //     result[i].covered_area =nf.format(result[i].covered_area)
            // }

        res.json(result)
    })
}


//update the bookings of the flat
exports.updateFlatDetails = (req, res) => {

    let sql = `UPDATE flats_details SET isbooked = 1 WHERE flat_num = '${req.data.flat_num}'`
    con.query(sql , (err , result)=>{
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.json(result)
    })
}