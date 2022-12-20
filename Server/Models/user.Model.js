const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Email:{required:true, type:String},
    Name:String,
    LastName:String,
    Password:{required:true, type:String}
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;