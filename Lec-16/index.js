const express = require("express");
const app = express();
const userModel = require("./models/general");
const postModel = require("./models/post")

app.get("/",(req,res)=>{
    res.send("hey");
})

app.get("/create",async function(req,res){
    let user = await userModel.create({
        username:"tirth",
        age:24,
        email: "tirth@gmail.com"
    })
    res.send(user);
})

app.get("/post/create",async function(req,res){
    let post = await postModel.create({
        postData: "hello saare log kaise ho",
        user: "699e734648f5da9eee998bbb"
    })

    let user = await userModel.findOne({_id: "699e734648f5da9eee998bbb"});
    user.posts.push(post._id);
    await user.save();
    res.send({post,user})
})

app.listen(3000);