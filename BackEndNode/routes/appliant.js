const express = require('express')
const router = express.Router();

const{
    postApplicantDetails,
    getApplicantDetails,
    deleteApplicantDetails,
    appByCNIC
} = require("../controllers/applicant")

const {
    applicantValidator
} = require('../validator/index')


router.post('/postappli', applicantValidator, postApplicantDetails);
router.get('/getappli/:cnic', getApplicantDetails);
router.delete('/deleteappli/:cnic', deleteApplicantDetails);

router.param("cnic", appByCNIC)

module.exports = router;