const express = require("express");
const router = express.Router();
const { getItem,getItems, createItem,updateItem,deleteItem } = require("../controllers/reservas");

router.post("/",createItem);

router.get("/:id",getItem);

router.get("/",getItems);

router.put("/:id",updateItem);

router.delete("/:id_usuario/:id_propiedad",deleteItem);






module.exports = router