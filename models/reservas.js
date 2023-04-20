const {sequelize} = require('../config/mysql');
const {DataTypes} = require("sequelize");



const Reserva = sequelize.define(
    'reservas',
    {
        id_alquiler:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        fecha_inicio:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }, 
        fecha_final:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        estado_propiedad:{
            type:DataTypes.INTEGER
        }

    },{
        freezeTableName: true,
        timestamps:false
    }
);





module.exports = Reserva