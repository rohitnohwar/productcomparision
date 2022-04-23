const express=require("express");
const app = express.Router()
const {product} = require("../controllers/productcontroller")

app.post("/product", product)

module.exports = app