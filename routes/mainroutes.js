const express=require("express");
const app = express.Router()
const {counts, productinfo} = require("../controllers/maincontroller")

app.get("/counts", counts)

app.get("/productinfo", productinfo)

module.exports = app