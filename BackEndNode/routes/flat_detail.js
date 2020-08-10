const express = require('express')
const router = express.Router();

const { 
    postFlatDetails,
    getFlatDetails,
    deleteFlatDetails,
    allFlats,
    flatByNum,
    bookedFlats,
    unbookedFlats,
    updateFlatDetails
} = require("../controllers/flat_detail")

const { 
    flatDetailValidator
} = require('../validator/index')

router.put('/updatefd/:FlatNum', updateFlatDetails);
router.post('/postfd', flatDetailValidator, postFlatDetails);
router.get('/getfd/:FlatNum', getFlatDetails);
router.delete('/deletefd/:FlatNum', deleteFlatDetails);
router.get('/booked', bookedFlats)
router.get('/unbooked', unbookedFlats)
router.get('/allfd', allFlats);

router.param("FlatNum", flatByNum)

module.exports = router;