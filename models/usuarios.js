const {sequelize} = require('../config/mysql');
const {DataTypes} = require("sequelize");
const pago = require('./pagos');
const rentaVehiculos = require('./rentaVehiculos');
const reserva = require('./reservas');
const valoracion = require("./valoraciones");
const viaje = require('./viajes');
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


Usuario.hasMany(pago,{
    foreignKey:'id_usuario'
})
pago.belongsTo(Usuario)
Usuario.hasMany(rentaVehiculos,{
    foreignKey:'id_usuario'
})
rentaVehiculos.belongsTo(Usuario);

Usuario.hasMany(reserva,{
    foreignKey:'id_usuario'
})
reserva.belongsTo(Usuario)

Usuario.hasMany(valoracion,{
    foreignKey:'id_usuario'
})
valoracion.belongsTo(Usuario)


Usuario.hasMany(Viajes,{
    foreignKey:'id_usuario'
})
Viajes.belongsTo(Usuario)

module.exports = Usuario