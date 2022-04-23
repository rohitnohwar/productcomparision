const mongoose=require("mongoose");

const invoiceSchema=new mongoose.Schema({
    invoiceId: {type:String, required:true}
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice