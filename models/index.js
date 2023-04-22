
const usuarioModel= require("./usuarios")
const propiedadModel= require("./propiedades")
const pagoModel= require("./pagos")
const reservaModel= require("./reservas")
const rentaVehiculoModel= require("./rentaVehiculos")
const valoracionModel= require("./valoraciones")
const vehiculoModel= require("./vehiculos")
const viajeModel= require("./viajes")

pagoModel.belongsTo(usuarioModel,{
    foreignKey:"id_usuario"
})
usuarioModel.hasMany(pagoModel,{
    foreignKey:"id_usuario"
})

rentaVehiculoModel.belongsTo(usuarioModel,{
    foreignKey:"id_usuario"
})

usuarioModel.hasMany(rentaVehiculoModel,{
    foreignKey:"id_usuario"
})


rentaVehiculoModel.belongsTo(vehiculoModel,{
    foreignKey:"matricula_vehiculo"
})

vehiculoModel.hasMany(rentaVehiculoModel,{
    foreignKey:"matricula_vehiculo"
})

reservaModel.belongsTo(usuarioModel,{
    foreignKey: "id_usuario"
})

usuarioModel.hasMany(reservaModel,{
    foreignKey:"id_usuario"
})


reservaModel.belongsTo(propiedadModel,{
    foreignKey: "id_propiedad"
})

propiedadModel.hasMany(reservaModel,{
    foreignKey:"id_propiedad"
})

valoracionModel.belongsTo(usuarioModel,{
    foreignKey:"id_usuario"
})

usuarioModel.hasMany(valoracionModel,{
    foreignKey:"id_usuario"
})

viajeModel.belongsTo(usuarioModel,{
    foreignKey:"id_usuario"
})

usuarioModel.hasMany(viajeModel,{
    foreignKey:"id_usuario"
})

viajeModel.belongsTo(vehiculoModel,{
    foreignKey:"matricula_vehiculo"
})

vehiculoModel.hasMany(viajeModel,{
    foreignKey:"matricula_vehiculo"
})

valoracionModel.belongsTo(propiedadModel,{
    foreignKey:"id_propiedad"
})

propiedadModel.hasMany(valoracionModel,{
    foreignKey:"id_propiedad"
})



module.exports ={usuarioModel,propiedadModel,pagoModel,reservaModel,rentaVehiculoModel,valoracionModel,vehiculoModel,viajeModel};