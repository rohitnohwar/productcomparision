const mongoose=require("mongoose");
const Issue = require("../models/issuemodel")

function issue(req, res){
    Issue.exists({issueId:req.body.issueId}, function (err, doc) {
        if (err){
            console.log(err)
        }else{
            if(!doc){
                if(err){
                    console.log(err);
                }
                else {
                    const newIssue = new Issue(req.body);
                    newIssue.save();
                    res.json({message:'issueId created'});
                }
            }
            else{
                res.json({message:'issueId already exists'})
            }
        }
    });
}

module.exports = {issue}