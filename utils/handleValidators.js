const {  validationResult } =require("express-validator");
const valideResults = (req,res,next)=>{
    try{
         validationResult(req).trow();
        return next();
    }catch(err){
        res.status(400).json({ errors: err });
        
    }
};

module.exports = valideResults