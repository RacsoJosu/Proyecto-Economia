const {usuarioModel} = require("../models");

/**
 * Obtener una lista de la base de datos.
 * @param {*} req 
 * @param {*} res 
 */

/**
 * este es mi controlador de la base de datos para traer 
 * informacion del modelo 
 */
const getItems = async(req,res )=>{
    const data = await usuarioModel.findAll();
    res.json(data);
    console.log("los usuarios se han listado exitosamente")
};

/**
 * va obtener un registro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res)=>{
    const data = await usuarioModel.findAll({
        where:{
            email: req.params.email
        }
    });
    if (data.length ==0){
        console.log("no existe el usuario")
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
    const data = await usuarioModel.create(body);
    res.json(data)
    console.log("registro nuevo insertado")

};


// exportar la funcion aplicando deEstructuracion
module.exports ={getItems,getItem,deleteItem,updateItem,createItem};