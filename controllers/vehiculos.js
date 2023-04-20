const vehiculoModel = require("../models/vehiculos");

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
    const data = await vehiculoModel.findAll();
    res.json(data);
    console.log("las propiedades se han listado exitosamente")
};

/**
 * va obtener un registro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res)=>{
    const data = await vehiculoModel.findAll({
        where:{
            matricula: req.params.id
        }
    });
    res.json(data);
    console.log("las propiedad se han obtenido exitosamente")
};



/**
 * borrar un regstro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */

const deleteItem = async (req, res)=>{
    await vehiculoModel.destroy({
        where:{
            matricula:req.params.id
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
    await vehiculoModel.update(req.body,{
        where:
        {
            matricula: req.params.id
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
    const data = await vehiculoModel.create(body);
    res.json(data)
    console.log("registro nuevo insertado")

};


// exportar la funcion aplicando deEstructuracion
module.exports ={getItems,getItem,deleteItem,updateItem,createItem};