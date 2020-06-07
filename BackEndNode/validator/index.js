
exports.userSignupValidator = (req, res, next) => {

    req.check("name", "Name is required").notEmpty();

    req.check("email", "Email must be 3 to 32 characters").notEmpty()
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @ ex: abc@mail.com")
    .isLength({
        min: 6,
        max: 32
    })

    req.check("password", "Password is required").notEmpty();
    req.check("password")
    .isLength({min: 8})
    .withMessage("Password must contain 8 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number")

    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    next();
}

exports.flatDetailValidator = (req, res, next) => {

    req.check("flat_num", "Flat Number is required").notEmpty();
    req.check("type", "Flat Type is required").notEmpty();
    req.check("floor", "Floor Number is required").notEmpty();
    req.check("covered_area", "Flat Covered Area is required").notEmpty();

    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    next();
}

exports.installmentValidator = (req, res, next) => {

    req.check("inst_amount", "Amount is required").notEmpty();
    req.check("inst_flatno", "Flat Number is required").notEmpty();
    req.check("inst_CNIC", "CNIC is required").notEmpty();
    req.check("inst_CNIC")
    .matches(/\d/)
    .withMessage("CNIC must contain valid digits")
    .isLength({
        min: 13,
        max: 13
    })
    .withMessage("CNIC must contain 13 digits")
    

    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    next();
}

exports.kinValidator = (req, res, next) => {

    req.check("kin_name", "Kin name is required").notEmpty();
    req.check("kin_relation", "Kin relation is required").notEmpty();
    req.check("kin_address", "Kin address is required").notEmpty();
    req.check("kin_CNIC", "Kin CNIC is required").notEmpty();
    req.check("kin_CNIC")
    .matches(/\d/)
    .withMessage("CNIC must contain valid digits")
    .isLength({
        min: 13,
        max: 13
    })
    .withMessage("CNIC must contain 13 digits")
    

    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    next();
}

exports.applicantValidator = (req, res, next) => {

    req.check("appli_name", "Applicant name is required").notEmpty();
    req.check("appli_father_name", "Applicant father name is required").notEmpty();
    req.check("appli_DOB", "Applicant date of birth is required").notEmpty();
    req.check("appli_CNIC", "Applicant CNIC is required").notEmpty();
    req.check("appli_CNIC")
    .matches(/\d/)
    .withMessage("CNIC must contain valid digits")
    .isLength({
        min: 13,
        max: 13
    })
    .withMessage("CNIC must contain 13 digits")
    req.check("appli_address", "Applicant address is required").notEmpty();
    req.check("appli_nationality", "Applicant nationality is required").notEmpty();
    req.check("appli_occupation", "Applicant occupation is required").notEmpty();

    req.check("kin_name", "Kin name is required").notEmpty();
    req.check("kin_relation", "Kin relation is required").notEmpty();
    req.check("kin_address", "Kin address is required").notEmpty();
    req.check("kin_CNIC", "Kin CNIC is required").notEmpty();
    req.check("kin_CNIC")
    .matches(/\d/)
    .withMessage("CNIC must contain valid digits")
    .isLength({
        min: 13,
        max: 13
    })
    .withMessage("CNIC must contain 13 digits")

    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    next();
}

exports.postQuerycustValidator = (req, res  ,next)=>{
    req.check('name','Name is required').notEmpty()
    req.check('mob_no','Mobile number is required').notEmpty()
    req.check('mob_no')
    .matches(/\d/)
    .withMessage("Number must contain valid digits")
    .isLength({
        min: 11,
        max: 11
    })
    .withMessage("Mobile number must contain 11 digits")
    // req.check("email", "Email must be 3 to 32 characters")
    // .matches(/.+\@.+\..+/)
    // .withMessage("Email must contain @ ex: abc@mail.com")
    // .isLength({
    //     min: 6,
    //     max: 32
    // })

    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    next();
  }