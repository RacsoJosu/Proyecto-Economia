
const {usuarioModel} = require("../models");


const login = async (req, res)=>{
    const {email,passw} = req.body;
    const user = await usuarioModel.findOne({
    where:{
        email: email
    }
   });
   if(user){
        if (user.passw==passw) {
          res.status(200)
          res.send({success:"exito"})
        } else {
          res.status(403)
          res.send({error:"la contraseña no es correcta"})
          
        }  
        
        
   }else{
     
        res.status(404)
        res.send({error:"necesita registrarse el correo no existe"})
   }
}

module.exports = {login}