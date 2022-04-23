const mongoose=require("mongoose");
const User = require("../models/usermodel")

function user(req, res){
    User.exists({userId:req.body.userId}, function (err, doc) {
        if (err){
            console.log(err)
        }else{
            if(!doc){
                if(err){
                    console.log(err);
                }
                else {
                    const newUser= new User(req.body);
                    newUser.save();
                    res.json({message:'userId created'});
                }
            }
            else{
                res.json({message:'userId already exists'})
            }
        }
    });
}

module.exports = {user}