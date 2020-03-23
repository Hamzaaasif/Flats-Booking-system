const expressvalidator = require('express-validator');
const bodyparer = require('body-parser');
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express();
const morgan = require('morgan');

//raoutes files
const QueryCustRoutes = require("./routes/query_cust")
const authRoutes = require('./routes/auth')
const flatRoutes = require('./routes/flat_detail')
const installmentRoutes = require('./routes/installment')
const kinInfoRoutes = require('./routes/kin_info')
const appRoutes = require('./routes/appliant')

//middlewares
app.use(bodyParser.json())
app.use(expressValidator());
app.use(cookieParser());
app.use(morgan("dev"));

//routes
app.use('/', authRoutes)
app.use('/', flatRoutes)
app.use('/', installmentRoutes)
app.use('/', kinInfoRoutes)
app.use('/', appRoutes)
app.use("/",QueryCustRoutes)


const port = 8080
app.listen(port,()=>{console.log("Node is listning at http://localhost:8080")});