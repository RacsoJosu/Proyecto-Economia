const {sequelize} = require('../config/mysql');
const {DataTypes} = require("sequelize");
const usuario = require('./usuarios');



const rentaVehiculos = sequelize.define(
    'renta_vehiculos',
    {
        id_renta:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        }, 
        precio_por_dia:{
            type:DataTypes.FLOAT(6,2)  
        }, 
        cantidad_dias:{
            type:DataTypes.INTEGER
        },
        id_usuario:{
            type:DataTypes.INTEGER
        },
        matricula_vehiculo:{
            type:DataTypes.STRING
        }

    },{
        freezeTableName: true,
        timestamps:false
    }
);



module.exports = rentaVehiculos