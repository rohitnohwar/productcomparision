const express=require("express");
const app = express.Router()
const {issue} = require("../controllers/issuecontroller")

app.post("/issue", issue)

module.exports = app