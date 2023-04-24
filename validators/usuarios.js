const {check} = require("express-validator");
const valideResults = require("../utils/handleValidators") 
const validatorCreateItem=[
    check("nombre")
    .exists()
    .notEmpty(),
    check("apellido")
    .exists()
    .notEmpty(),
    check("email")
    .exists()
    .notEmpty(),
    check("passw")
    .exists()
    .notEmpty(),
    check("locacion")
    .exists()
    .notEmpty(),
    check("fondos_disponibles")
    .exists()
    .notEmpty(),
    check("numero_cuenta")
    .exists()
    .notEmpty(),
    (req,res,next)=> { return valideResults(req,res,next)}
]
module.exports={validatorCreateItem}