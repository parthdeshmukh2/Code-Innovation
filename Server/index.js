const express = require("express");
const cors = require("cors");
const connection = require("./Config/db.js");
const userController = require("./Routes/user.Routes.js");
const Authentication = require("./Middlewares/Authentication.js");
const BlogController = require("./Routes/blog.Routes.js");


const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async(req, res)=>{
    res.send("Home");
})

app.use("/user", userController);
app.use("/blog", Authentication, BlogController);

app.listen(8080, async()=>{
    try {
        await connection;
        console.log("connected");
        
    } catch (error) {
        console.log(error);
    }
})