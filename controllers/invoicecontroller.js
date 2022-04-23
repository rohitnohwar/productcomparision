const mongoose=require("mongoose");
const Invoice = require("../models/invoicemodel")

function invoice(req, res){
    Invoice.exists({invoiceId:req.body.invoiceId}, function (err, doc) {
        if (err){
            console.log(err)
        }else{
            if(!doc){
                if(err){
                    console.log(err);
                }
                else {
                    const newInvoice= new Invoice(req.body);
                    newInvoice.save();
                    res.json({message:'invoiceId created'});
                }
            }
            else{
                res.json({message:'invoiceId already exists'})
            }
        }
    });
}

module.exports = {invoice}