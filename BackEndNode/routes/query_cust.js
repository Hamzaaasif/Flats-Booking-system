const express = require("express")
const router  = express.Router();

const {getquerycust,
    QueryCustName,
    postquerycust,
    searchbyname,
    deletebyname
} = require("../controllers/query_cust")

const {
    postQuerycustValidator
} = require("../validator/index")

//to get all query customers
router.get("/getquerycust" , getquerycust)
//to post the query customers
router.post("/Postquerycust" , postQuerycustValidator,  postquerycust)

router.param("name",QueryCustName)

router.get("/searchbyname/:name" , searchbyname) // for searching
router.delete("deletebyname/:name" , deletebyname) //for deleting
 
module.exports = router;