const express = require('express')
const router = express.Router();

const{
    postApplicantDetails,
    getApplicantDetails,
    deleteApplicantDetails,
    appByCNIC,
<<<<<<< HEAD
    postKinDetails,
    getAllApplicantDetails
=======
    getAllapplicant
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
} = require("../controllers/applicant")

const {
    applicantValidator
} = require('../validator/index')


<<<<<<< HEAD
router.post('/postappli', applicantValidator, postApplicantDetails, postKinDetails);
router.get('/getappli/:cnic', getApplicantDetails);
=======
router.post('/postappli', applicantValidator, postApplicantDetails);
router.get('/getappli/:cnic', getApplicantDetails); //searcching by cnic
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
router.delete('/deleteappli/:cnic', deleteApplicantDetails);
router.get('/getallappli', getAllApplicantDetails);

//To get all applicants 
router.get('/getappli', getAllapplicant); //

router.param("cnic", appByCNIC)

module.exports = router;