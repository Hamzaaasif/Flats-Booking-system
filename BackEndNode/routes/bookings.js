const express = require('express')
const router = express.Router();

const { 
    getBookingsDetails,
    GetbookingsByNum,
    postBookings,
    allbookings,
    deleteBookings,
} = require("../controllers/bookings")

// const { 
//     flatDetailValidator
// } = require('../validator/index')


router.post('/postbookings', postBookings);
router.get('/getbookings/:bookNum', GetbookingsByNum);
router.delete('/deletebooking/:bookNum', deleteBookings);
router.get('/allbooking', allbookings);

router.param("bookNum", getBookingsDetails)

module.exports = router;