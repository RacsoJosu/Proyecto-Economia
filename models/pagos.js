const {sequelize} = require('../config/mysql');
const {DataTypes} = require("sequelize");

const Pagos = sequelize.define(
    'pagos',
    {
        id_pago:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        monto_pagar:{
            type: DataTypes.FLOAT(10,2)

        },  
        id_usuario:{
            type: DataTypes.INTEGER
        },
        fecha:{
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        }

    },{
        freezeTableName: true,
        timestamps:false
    }
);


module.exports =Pagos