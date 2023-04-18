const express = require("express");
const router = express.Router();
const { getItem,getItems, createItem } = require("../controllers/propiedades");

router.post("/",createItem);

router.get("/:id",getItem);

router.get("/",getItems);







module.exports = router