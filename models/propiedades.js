// instancia sequelize
const {sequelize} = require("../config/mysql"); 
// datatypes de sequelize
const {DataTypes} = require("sequelize");

const Reserva = require("./reservas")

const Propiedad = sequelize.define(
    'propiedades',
    {   id_propiedad:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        calle:{
            type: DataTypes.STRING
        },
        departamento:{
            type: DataTypes.STRING
        },
        ciudad:{
            type: DataTypes.STRING
        },
        descripcion:{
            type: DataTypes.STRING
        },
        capacidad:{
            type: DataTypes.INTEGER
        },
        precio_noche:{
            type:DataTypes.FLOAT
        }

    },{
        freezeTableName: true,
        timestamps:false
    }
);

Propiedad.hasMany(Reserva,{
    foreignKey:'id_propiedad'
});
Reserva.belongsTo(Propiedad)

module.exports=Propiedad