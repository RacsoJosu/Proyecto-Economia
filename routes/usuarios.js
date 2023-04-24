const express = require("express");
const router = express.Router();
const { getItem,getReservas, createItem,updateItem,deleteItem } = require("../controllers/usuarios");
const {usuarioModel} = require("../models");
const cookieParser = require('cookie-parser');

router.use(cookieParser());

router.get('/login', (req, res) => {
    if (req.cookies.sessionId === 'abc123') { // Verifica si la cookie existe y tiene el identificador de sesión correcto
        res.send({success:"exito"});
    } else {
        res.status(200)
    }
});

router.post('/logout', async (req,res)=>{
    if (req.cookies.sessionId === 'abc123') { // Verifica si la cookie existe y tiene el identificador de sesión correcto
        res.clearCookie('abc123');
        const user = await usuarioModel.findOne({
            where:{
                sessionID: 'abc123'
            }
           });
        user.dataValues.sessionID=""       
        await usuarioModel.update(user.dataValues,{
            where:
            {
                email: user.email
            }
        })
        res.redirect("./login")
        
    } else{
        
        res.status(403)
    }
})


router.post('/aut', async (req, res) => {
    const {email,passw} = req.body;
    const user = await usuarioModel.findOne({
    where:{
        email: email
    }
   });
   if(user){
        if (user.passw==passw) {
            res.cookie('sessionId', 'abc123', { maxAge: 3600000 }); // Crea una cookie con el identificador de sesión
            res.status(200)
            user.sessionID =  req.cookies.sessionId
            console.log(user)
            await usuarioModel.update(user.dataValues,{
                where:
                {
                    email: user.email
                }
            })
            res.redirect("./login")
        } else {
            res.status(403)
            res.send({error:"la contraseña no es correcta"})
          
          
        }  
        
        
   }else{
     
        res.status(404)
        res.send({error:"necesita registrarse el correo no existe"})
   }
});




router.post("/",createItem);

router.get("/",getItem);
router.get("/listarReservas",getReservas);

router.put("/:id",updateItem);

router.delete("/:id",deleteItem);






module.exports = router