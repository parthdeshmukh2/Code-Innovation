const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../Models/user.Model.js');

const userController = express.Router();


userController.post('/register', async(req, res)=>{
    const body = req.body;
    const {Password} = req.body;
    await bcrypt.hash(Password, 8, async(err, hash)=>{
        if(err){
            console.log(err);
            return res.send("Something Went Wrong");
        }
       const result = new userModel({
        Email:body.Email,
        Password:hash,
        Name:body.Name,
        LastName:body.LastName
       })
       await result.save();
       return res.send({messege:"Redgistered Successfully", result});

    });

});

userController.post('/login', async(req, res)=>{
    const {Email} = req.body;
    const {Password} = req.body;
    const userLogin = await userModel.findOne({Email});
    if(userLogin){
        const hashedPassword = await userLogin.Password;
        await bcrypt.compare(Password, hashedPassword, async(err, result)=>{
            if(err){
                return res.send("Wrong Email And Password");
            }
            if(result){
                const token = jwt.sign({ Email: userLogin.Email , userId:userLogin._id, }, 'shhhhh');
                return res.send({messege:"Login Successfull", userLogin, token});
            }
        })
    }
})


module.exports = userController;
