const express=require("express");
const app = express.Router()
const {invoice} = require("../controllers/invoicecontroller")

app.post("/invoice", invoice)

module.exports = app