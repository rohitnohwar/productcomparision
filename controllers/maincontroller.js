const mongoose=require("mongoose");
const Product = require("../models/productmodel")
var async = require("async");

function productinfo(req, res){
    Product.find({}, function(err, products){
        res.json(products)
    })
}

module.exports = {productinfo}