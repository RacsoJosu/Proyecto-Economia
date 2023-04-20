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

Vehiculo.hasMany(rentaVehiculos,{
    primaryKey:'matricula'
})
rentaVehiculos.belongsTo(Vehiculo)

Vehiculo.hasMany(Viajes,{
    primaryKey:'matricula'
})
Viajes.belongsTo(Vehiculo)


module.exports = Vehiculo