// instanciamos sequelize
const {sequelize} = require("../config/mysql"); 
// datatypes de sequelize
const {DataTypes} = require("sequelize");

const Propiedad = sequelize.define(
    'propiedades',
    {
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
        precio:{
            type:DataTypes.FLOAT
        }

    },{
        freezeTableName: true,
        timestamps:true
    }
);

module.exports=Propiedad