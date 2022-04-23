const mongoose=require("mongoose");
const Project = require("../models/projectmodel")

function project(req, res){
    Project.exists({projectId:req.body.projectId}, function (err, doc) {
        if (err){
            console.log(err)
        }else{
            if(!doc){
                if(err){
                    console.log(err);
                }
                else {
                    const newProject = new Project(req.body);
                    newProject.save();
                    res.json({message:'projectId created'});
                }
            }
            else{
                res.json({message:'projectId already exists'})
            }
        }
    });
}

module.exports = {project}