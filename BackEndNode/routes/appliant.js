const express = require('express')
const router = express.Router();

const{
    postApplicantDetails,
    getApplicantDetails,
    deleteApplicantDetails,
    appByCNIC,
    postKinDetails,
    getAllApplicantDetails
} = require("../controllers/applicant")

const {
    applicantValidator
} = require('../validator/index')


router.post('/postappli', applicantValidator, postApplicantDetails, postKinDetails);
router.get('/getappli/:cnic', getApplicantDetails);
router.delete('/deleteappli/:cnic', deleteApplicantDetails);
router.get('/getallappli', getAllApplicantDetails);

router.param("cnic", appByCNIC)

module.exports = router;