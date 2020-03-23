const expressvalidator = require('express-validator');
const bodyparer = require('body-parser');
const express = require('express')
const app = express();
//const dbcon = require("./dbconnection.js")
const morgan = require('morgan');
const QueryCustRoutes = require("./routes/query_cust")

//middleware
app.use(morgan("dev"));
app.use(bodyparer.json());

app.use("/",QueryCustRoutes)

const port = 8080
app.listen(port,()=>{console.log("Node is listning at http://localhost:8080")});