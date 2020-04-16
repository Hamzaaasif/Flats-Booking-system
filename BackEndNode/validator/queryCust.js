exports.postQuerycustValidator = (req, res  ,next)=>{
  req.check('name','Name is required').notEmpty
}