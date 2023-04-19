const propiedadModel = require("../models/propiedades.js");

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
    const data = await propiedadModel.findAll();
    res.json(data);
    console.log("las propiedades se han listado exitosamente")
};

/**
 * va obtener un registro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res)=>{
    const data = await propiedadModel.findAll({
        where:{
            id_propiedad: req.params.id
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

const deleteItem = (req, res)=>{};




/**
 * va actualizar un registro de la base de datos 
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res)=>{};

/**
 * va crear un registro de la base de datos 
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res)=>{
    const { body }  = req;
    console.log(body);
    // envio la data 
    const data = await propiedadModel.create(body);
    res.send({data});

};


// exportar la funcion aplicando deEstructuracion
module.exports ={getItems,getItem,deleteItem,updateItem,createItem};