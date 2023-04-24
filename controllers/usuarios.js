const {usuarioModel, propiedadModel} = require("../models/index");
const {reservaModel} = require("../models/index");

/**
 * Obtener una lista de la base de datos.
 * @param {*} req 
 * @param {*} res 
 */

/**
 * este es mi controlador de la base de datos para traer 
 * informacion del modelo 
 */
const getReservas = async(req,res )=>{
    const data = await usuarioModel.findAll(
        {
            where:{
                sessionId: 'abc123'

            },
            include:{
                model:reservaModel,
                include:{
                    model:propiedadModel
                }
            }
        }
    );
    res.json(data);
    console.log("las propiedades se han listado exitosamente")
};

/**
 * va obtener un registro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res)=>{
        const data = await usuarioModel.findAll({
            where:{
                sessionId: 'abc123'
            }
        });
        if (data.length ==0){
            console.log("El usuario no ha iniciado sesion")
        }else{
            res.json(data);
            console.log("El usuario se ha obtenido exitosamente")
    
            
        }
        
   
    
    
    
};



/**
 * borrar un regstro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */

const deleteItem = async (req, res)=>{
    await usuarioModel.destroy({
        where:{
            id_usuario:req.params.id
        }
    })
    console.log("se ha eliminado un registro")
    res.json({success:"Registro eliminado"})



};




/**
 * va actualizar un registro de la base de datos 
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res)=>{
    await usuarioModel.update(req.body,{
        where:
        {
            id_usuario: req.params.id
        }
    })
    console.log("se ha modificado un registro")
    res.json({success:"se modifico de forma exitosa"})

};

/**
 * va crear un registro de la base de datos 
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res)=>{
    
    const { body }  = req;
    // envio la data 
    const usuario = await usuarioModel.findOne({
        where:{
            email: body.email
        }
    });

    if(usuario){
        res.status(403)
        res.send({error:"El usuario ya existe"})
    }else{
        const data = await usuarioModel.create(body);
        res.status(200)
        res.send({success:"exito"})

    }
    
};


// exportar la funcion aplicando deEstructuracion
module.exports ={getReservas,getItem,deleteItem,updateItem,createItem};