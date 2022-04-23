const mongoose=require("mongoose");
const Invoice = require("../models/invoicemodel")
const Issue = require("../models/issuemodel")
const Product = require("../models/productmodel")
const Project = require("../models/projectmodel")
const User = require("../models/usermodel")
var async = require("async");

function productinfo(req, res){
    Product.find({}, function(err, products){
        res.json(products)
    })
}


async function counts(req, res){
    let counts = {
        invoices: 0,
        issues: 0,
        projects: 0,
        users: 0
    }

    let query = Invoice.count({});
    counts.invoices = await query.exec();

    query = Issue.count({});
    counts.issues = await query.exec();

    query = User.count({});
    counts.users = await query.exec();

    query = Project.count({});
    counts.projects = await query.exec();

    res.json(counts)
}

module.exports = {counts, productinfo}