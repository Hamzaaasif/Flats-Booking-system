const expressvalidator = require('express-validator');
const bodyparer = require('body-parser');
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express();
const morgan = require('morgan');

<<<<<<< HEAD
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const cors = require('cors')

=======
//raoutes files
const QueryCustRoutes = require("./routes/query_cust")
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
const authRoutes = require('./routes/auth')
const flatRoutes = require('./routes/flat_detail')
const installmentRoutes = require('./routes/installment')

const kinInfoRoutes = require('./routes/kin_info')
const appRoutes = require('./routes/appliant')

//middlewares
app.use(bodyparer.json())
app.use(cookieParser());
<<<<<<< HEAD
app.use(cors())
=======
app.use(morgan("dev"));
app.use(expressvalidator());
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf

//routes
app.use('/', authRoutes)
app.use('/', flatRoutes)
app.use('/', installmentRoutes)
app.use('/', kinInfoRoutes)
app.use('/', appRoutes)
app.use("/",QueryCustRoutes)


const port = 8080
app.listen(port,()=>{console.log("Node is listning at http://localhost:8080")});