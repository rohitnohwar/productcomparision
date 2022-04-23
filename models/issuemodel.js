const mongoose=require("mongoose");

const issueSchema=new mongoose.Schema({
    issueId: {type:String, required:true}
});

const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue