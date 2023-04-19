require("dotenv").config();
const express = require("express");
const cors = require("cors");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackConfig = require('../webpack.config'); 

const port = process.env.PORT || 3000 ;

const {dbConnectMySql} = require("../config/mysql"); 

const app = express();
app.use(express.json())
app.use(cors());

app.use('/',express.static('views'))
app.use(webpackMiddleware(webpack(webpackConfig)));

//Archivos Estaticos
// app.use(express.static(path.join(__dirname,'public')))

// app.get('/', function (req,res,next){
//     res.send('Ewebik')
// });



//settings 
app.set('port',port);

//importando rutas de forma dinamica
app.use('/api',require("../routes"));




app.listen(app.get('port'),()=>{
    console.log("Servidor en el puerto 3000")

});
// conexion a la base de datos

dbConnectMySql();