const express=require("express");
const app = express.Router()
const {productinfo} = require("../controllers/maincontroller")

app.get("/productinfo", productinfo)

module.exports = app