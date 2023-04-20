const {sequelize} = require('../config/mysql');
const {DataTypes} = require("sequelize");



const Viajes = sequelize.define(
    'viajes',
    {
        id_viaje:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        origen:{
            type: DataTypes.STRING
        }, 
        destino:{
            type:DataTypes.STRING
        },
        fecha:{
            type: DataTypes.DATEONLY
        }, 
        hora:{
            type:DataTypes.TIME
        },
        
        precio:{
            type:DataTypes.DOUBLE
        }

    },{
        freezeTableName: true,
        timestamps:false
    }
);

module.exports = Viajes


