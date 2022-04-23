const mongoose=require("mongoose");
const Product = require("../models/productmodel")

function product(req, res){
    Product.exists({productId:req.body.productId}, function (err, doc) {
        if (err){
            console.log(err)
        }else{
            if(!doc){
                if(err){
                    console.log(err);
                }
                else {
                    year = parseInt(req.body.year)
                    sales = parseInt(req.body.sales)
                    const newProduct= new Product({
                        productId: req.body.productId,
                        data: {[year]:sales}
                    });
                    newProduct.save();
                    res.json({message:'productId created'});
                }
            }
            else{
                Product.findOne({productId: req.body.productId}, function(err, product){
                    newData = {}

                    product.data.forEach((sales, year) => {
                        newData[Number(year)] = Number(sales)
                    });
                    newData[req.body.year] = Number(req.body.sales)
                    Product.findOneAndUpdate({productId: req.body.productId },{ $set: {data:newData }}, { upsert: true, new: true }).then(product =>{
                        res.json({message:'ProductId already exists. Modified the existing one.'})
                   });
                })
            }
        }
    });
}

module.exports = {product}