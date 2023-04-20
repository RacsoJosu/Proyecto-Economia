const {sequelize} = require('../config/mysql');
const {DataTypes} = require("sequelize");



const Valoracion = sequelize.define(
    'valoraciones',
    {
        id_valoracion:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true

        }, 
        comentario:{
            type:DataTypes.STRING
        }, 
        puntuacion:{
            type: DataTypes.INTEGER
        }

    },{
        freezeTableName: true,
        timestamps:false
    }
);

module.exports = Valoracion


