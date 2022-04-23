const express=require("express");
const app = express.Router()
const {project} = require("../controllers/projectcontroller")

app.post("/project", project)

module.exports = app