const express = require('express')
const router = express.Router();

const {
    postInstallmentDetails,
    getInstallmentDetails,
    deleteInstallmentDetails,
    allInstallment,
    flatByNum
} = require("../controllers/installment")

const {
    installmentValidator
} = require('../validator/index')

router.post('/postinsta', installmentValidator, postInstallmentDetails);
router.get('/getinsta/:FlatNum', getInstallmentDetails);
router.delete('/deleteinsta/:FlatNum', deleteInstallmentDetails);
router.get('/allinsta', allInstallment);

router.param("FlatNum", flatByNum)

module.exports = router;