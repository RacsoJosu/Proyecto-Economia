const {usuarioModel} = require("../models");


const login = async (req, res)=>{
    const {email,passw} = req.body;
    const user = await usuarioModel.findOne({
    where:{
        email: email
    }
   });
   if(user){
        res.status(200)
        res.send({success:"exito"})
        
   }else{
        res.status(404)
        res.send({error:"error en usuario y/o contraseña"})
   }
};

module.exports = {login}