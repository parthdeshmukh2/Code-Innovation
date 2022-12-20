const express = require("express");
const BlogModel = require("../Models/blogs.Model.js");

const BlogController = express.Router();



BlogController.get("/", async(req, res)=>{
    const {userId} = req.body;
    const result = await BlogModel.find({userId});
    res.send(result);
})

BlogController.post("/post", async(req, res)=>{
    const body = req.body;
    const {userId} = req.body;
    const result = new BlogModel({Title:body.Title, Content:body.Content, userId})
    await result.save();
    res.send({messege:"Posted Successfully", result});
})

BlogController.patch("/edit/:id", async(req, res)=>{
    const {id} = req.params;
    const {userId} = req.body;
    const body = req.body;
    const blogItem = await BlogModel.findOne({_id:id});
    if(blogItem.userId === userId){
        const result = await BlogModel.findOneAndUpdate({_id:id}, body, {new:true});
        res.send("Updated SuccessFully");
    }
    else{

        res.send("Please Login")
    }

});

BlogController.delete("/delete/:id", async(req, res)=>{
    const {id} = req.params;
    const {userId} = req.body;
    const blogItem = await BlogModel.findOne({_id:id});
    if(blogItem.userId === userId){
        const result = await BlogModel.findOneAndDelete({_id:id});
        res.send("Deleted SuccessFully");
    }
    else{

        res.send("Blog Not Found");
    }
})


module.exports = BlogController;
