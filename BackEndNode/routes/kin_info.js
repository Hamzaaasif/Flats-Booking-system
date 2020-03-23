const express = require('express')
const router = express.Router();

const {
    postKinDetails,
    getKinDetails,
    deleteKinDetails,
    kinById
} = require("../controllers/kin_info")

const {
    kinValidator
} = require('../validator/index')


router.post('/postkd', kinValidator, postKinDetails);
router.get('/getkd/:id', getKinDetails);
router.delete('/deletekd/:id', deleteKinDetails);

router.param("id", kinById)

module.exports = router;