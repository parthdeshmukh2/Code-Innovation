const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    Title:String,
    Content:String,
    userId:String
});

const BlogModel = mongoose.model("blog", blogSchema);

module.exports = BlogModel;