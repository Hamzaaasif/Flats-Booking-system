const expressvalidator = require('express-validator');
const bodyparer = require('body-parser');
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express();
//const morgan = require('morgan');

const cors = require('cors')

const authRoutes = require('./routes/auth')
const flatRoutes = require('./routes/flat_detail')
const installmentRoutes = require('./routes/installment')

const kinInfoRoutes = require('./routes/kin_info')
const appRoutes = require('./routes/appliant')
const QueryCustRoutes = require('./routes/query_cust')

//middlewares
app.use(bodyparer.json())
app.use(cookieParser());
app.use(cors())
app.use(expressvalidator())

//routes
app.use('/', authRoutes)
app.use('/', flatRoutes)
app.use('/', installmentRoutes)
app.use('/', kinInfoRoutes)
app.use('/', appRoutes)
app.use("/",QueryCustRoutes)


const port = 8080
app.listen(port,()=>{console.log("Node is listning at http://localhost:8080")});