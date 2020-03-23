const express = require('express')
const router = express.Router();

const { 
    postFlatDetails,
    getFlatDetails,
    deleteFlatDetails,
    allFlats,
    flatByNum
} = require("../controllers/flat_detail")

const { 
    flatDetailValidator
} = require('../validator/index')


router.post('/postfd', flatDetailValidator, postFlatDetails);
router.get('/getfd/:FlatNum', getFlatDetails);
router.delete('/deletefd/:FlatNum', deleteFlatDetails);
router.get('/allfd', allFlats);

router.param("FlatNum", flatByNum)

module.exports = router;
    