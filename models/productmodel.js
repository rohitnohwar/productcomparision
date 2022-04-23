const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    productId: {type:String, required:true},
    data: {type:Map, required:true}
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product