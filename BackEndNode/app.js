const express = require('express')
const app = express();

const bodyparer = require('body-parser');
const cookieParser = require('cookie-parser')
const expressvalidator = require('express-validator');
const cors = require('cors')

const authRoutes = require('./routes/auth')
const flatRoutes = require('./routes/flat_detail')
const installmentRoutes = require('./routes/installment')
const kinInfoRoutes = require('./routes/kin_info')
const appRoutes = require('./routes/appliant')
const queryCustRoutes = require('./routes/query_cust')
const bookingsRoutes = require('./routes/bookings')

//middlewares
app.use(bodyparer.json())
app.use(expressvalidator())
app.use(cookieParser());
app.use(cors())

//routes
app.use('/', authRoutes)
app.use('/', flatRoutes)
app.use('/', installmentRoutes)
app.use('/', kinInfoRoutes)
app.use('/', appRoutes)
app.use('/', queryCustRoutes)
app.use('/', bookingsRoutes)

const port = 8080
app.listen(port, ()=>{
    console.log("Node is listning at http://localhost:8080")
});