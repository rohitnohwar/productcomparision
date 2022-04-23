const express=require("express");
const app = express.Router()
const {user} = require("../controllers/usercontroller")

app.post("/user", user)

module.exports = app