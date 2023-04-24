require("dotenv").config();
const express = require("express");
// const myconnection = require('express-myconnection');
// const { engine } = require("express-handlebars")
const session = require("express-session")
const bodyParser = require("body-parser")
const cors = require("cors");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackConfig = require('../webpack.config'); 
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3000 ;

const {dbConnectMySql} = require("../config/mysql"); 

const app = express();
app.use(express.json())
app.use(cors());

app.use('/',express.static('views'))
app.use(webpackMiddleware(webpack(webpackConfig)));

app.use(cookieParser());
app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));



// app.use(bodyParser.urlencoded({
//     extended:true
// }));
// app.use(bodyParser.json())

// app.use(session({
//     secret:'secret',
//     resave:true,
//     saveUninitialized:true
// }))
//settings 
app.set('port',port);

//importando rutas de forma dinamica
app.use('/api',require("../routes"));




app.listen(app.get('port'),()=>{
    console.log("Servidor en el puerto 3000")

});
// conexion a la base de datos

dbConnectMySql();