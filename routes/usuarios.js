const express = require("express");
const router = express.Router();
const { getItem,getItems, createItem,updateItem,deleteItem } = require("../controllers/usuarios");

router.post("/",createItem);

router.get("/:email",getItem);
router.get("/",getItems);

router.put("/:id",updateItem);

router.delete("/:id",deleteItem);






module.exports = router