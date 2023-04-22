const {sequelize} = require('../config/mysql');
const {DataTypes} = require("sequelize");
const rentaVehiculos = require("./rentaVehiculos");
const Viajes = require('./viajes');

const Vehiculo = sequelize.define(
    'vehiculos',
    {
        matricula:{
            type:DataTypes.STRING,
            primaryKey:true
        },
        modelo:{
            type: DataTypes.STRING

        },  
        marca:{
            type: DataTypes.STRING
        }

    },{
        freezeTableName: true,
        timestamps:false
    }
);



module.exports = Vehiculo