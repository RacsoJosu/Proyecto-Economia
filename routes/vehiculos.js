const express = require("express");
const router = express.Router();
const { getItem,getItems, createItem,updateItem,deleteItem } = require("../controllers/vehiculos");

router.post("/",createItem);

router.get("/:id",getItem);

router.get("/",getItems);

router.put("/:id",updateItem);

router.delete("/:id",deleteItem);






module.exports = router