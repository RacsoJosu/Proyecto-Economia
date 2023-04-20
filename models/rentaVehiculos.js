const {sequelize} = require('../config/mysql');
const {DataTypes} = require("sequelize");



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
        }

    },{
        freezeTableName: true,
        timestamps:false
    }
);


module.exports = rentaVehiculos