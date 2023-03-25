require("dotenv").config();
const express = require("express");
const cors = require("cors");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackConfig = require('../webpack.config');
const port = process.env.PORT || 3000 ;

const app = express();

app.use(cors());
app.set('port',port);
app.use('./static',express.static('dist'))
app.use(webpackMiddleware(webpack(webpackConfig)));


app.get('/', function (req,res,next){
    res.send('Ewebik')
});

app.listen(app.get('port'),()=>{
    console.log("Servidor en el puerto 3000")

});
