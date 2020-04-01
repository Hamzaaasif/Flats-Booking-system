const express = require('express')
const router = express.Router();

const{
    postApplicantDetails,
    getApplicantDetails,
    deleteApplicantDetails,
    appByCNIC,
    getAllapplicant
} = require("../controllers/applicant")

const {
    applicantValidator
} = require('../validator/index')


router.post('/postappli', applicantValidator, postApplicantDetails);
router.get('/getappli/:cnic', getApplicantDetails); //searcching by cnic
router.delete('/deleteappli/:cnic', deleteApplicantDetails);

//To get all applicants 
router.get('/getappli', getAllapplicant); //

router.param("cnic", appByCNIC)

module.exports = router;