const jwt = require('jsonwebtoken');
require('dotenv').config();
const expressjwt = require('express-jwt');
const uuidv1 = require('uuid/v1');
const crypto = require('crypto')
var sql = require('mysql');

var con = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mayarflats_db"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Database connected...")
});

// Signup
exports.signup = async (req, res) =>{
    
    // Check if user exist
    let email = req.body.email
    sql = `SELECT * FROM users WHERE email = ?`;
    con.query(sql, [email], (err, result)=> {
        if (err) throw err;
        else if(result == ""){
            // if not exist then insert
            pass_salt = set_pass(req.body.password)
            let data = {
                name: req.body.name,
                user_id : req.body.user_id,
                email: req.body.email,
                password: pass_salt.hashed_password,
                salt: pass_salt.salt
            };
     
            let sql = "INSERT INTO users SET ?";
            con.query(sql , [data] , (err , result) => {
                if(err){
                    return res.status(400).json({
                        error : err
                    });
                }
                else{
                    res.status(200).json({
                        message: "Singnup success! Please login"
                    });
                }
            });
        }
        else{
            res.send("Email is alredy taken")
        }
    })
}

exports.signin = (req, res) => {
    // Find the user based on email
    const { email, password } = req.body
    sql = `SELECT * FROM users WHERE email = ?`;
    con.query(sql, [email], (err, result)=> {
        // if error or no user
        if (err || result == ""){
            return res.status(401).json({
                error: "User with that Email does not exist. please signup"
            })
        }
        
        name = result[0].name
        user_id = result[0].user_id
        
        // if user, authenticate
        if(!authenticate(password, result[0].password, result[0].salt)){
            return res.status(401).json({
                error: "Email and password do not matched"
            })
        }

        // generate a token with user id and secret
        const token = jwt.sign({Userid: user_id}, process.env.JWT_SECRET);
        // persists the token in cookie
        res.cookie("t", token, {expire:new Date()+9999})
        // return response with user and token to frontend client
        return res.json({token, user: {name, user_id, email}})
    })
    
}

// Signout
exports.signout = (req, res) =>{
    res.clearCookie("t")
    return res.json({message: "Signout success"})
}

exports.requireSignin = expressjwt({
    secret: process.env.JWT_SECRET,
    userProperty: "auth"
})

function set_pass(password){
    this._password = password
    this.salt = uuidv1()
    this.hashed_password = encryptPassword(password)
    return {hashed_password, salt}

}

function encryptPassword(password){
    if(!password) return ""
    try{
        return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
    } catch (err){
        return ""
    }
}

function authenticate(plainText, db_password, db_salt){
    this.salt = db_salt
    return encryptPassword(plainText) === db_password
}