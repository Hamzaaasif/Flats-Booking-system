const express = require('express')
const app = express();

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const cors = require('cors')

const authRoutes = require('./routes/auth')
const flatRoutes = require('./routes/flat_detail')
const installmentRoutes = require('./routes/installment')

const kinInfoRoutes = require('./routes/kin_info')
const appRoutes = require('./routes/appliant')


app.use(bodyParser.json())
app.use(expressValidator());
app.use(cookieParser());
app.use(cors())

app.use('/', authRoutes)
app.use('/', flatRoutes)
app.use('/', installmentRoutes)
app.use('/', kinInfoRoutes)
app.use('/', appRoutes)

app.get("/" , (req , res)=>{
  res.send("Hello from hamza asif !!");
});

const port = 8080
app.listen(port,()=>{console.log("Node is listning at http://localhost:8080")});