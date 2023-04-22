const {sequelize} = require('../config/mysql');
const {DataTypes} = require("sequelize");
const pago = require('./pagos');
const rentaVehiculos = require('./rentaVehiculos');
const reserva = require('./reservas');
const valoracion = require("./valoraciones");
const Viajes = require('./viajes');


const Usuario = sequelize.define(
    'usuarios',
    {
        id_usuario:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre:{
            type: DataTypes.STRING

        },  
        apellido:{
            type: DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        }, 
        passw:{
            type: DataTypes.STRING
        }, 
        locacion:{
            type: DataTypes.STRING
        },  
        register_date:{
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        }, 
        fondos_disponibles:{
            type: DataTypes.DOUBLE
        }, 
        numero_cuenta:{
            type: DataTypes.STRING
        } 

    },{
        freezeTableName: true,
        timestamps:false
    }
);



module.exports = Usuario