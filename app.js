require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const port = process.env.PORT || 3000 ;
app.get('/',(req, res)=>{
    res.send("Hola Mundo")
})
app.listen(3000);
console.log("Servidor en el puerto 3000")
