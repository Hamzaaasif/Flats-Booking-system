const express = require("express")
const router  = express.Router();

const {getquerycust} = require("../controllers/query_cust")

router.get("/getquerycust" , getquerycust)

module.exports = router;