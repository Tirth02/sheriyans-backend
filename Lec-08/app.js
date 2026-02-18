const express = require('express');
const mongoose = require("mongoose");

const app = express();
const userModel = require('./userModel.js');

mongoose.connect(`mongodb+srv://pateltirth5442_db_user:v8Qbxp0KAm8zO7eh@cluster0.xnctlbs.mongodb.net/`)
.then(() =>{
    console.log("MomgoDB connected");

    app.listen(5000, () => {
        console.log("Server running on port 5000");
    })
})
.catch(err => console.log("DB Error:", err));

app.get('/',(req,res)=>{
    res.send("hey");
})

app.get('/create',async (req,res)=>{
    let createdUser = await userModel.create({
        name: "Yash",
        username: "yash",
        email: "yash@gmail.com"
    })
    res.send(createdUser);
})
app.get('/update',async (req,res)=>{
    let updatedUser = await userModel.findOneAndUpdate({username:"tirth"},{name: "Patel Tirth Nitinkumar"},{new:true});
    res.send(updatedUser);
})

app.get("/read",async (req,res)=>{
    let users = await userModel.find();
    res.send(users);
})

app.get("/delete", async (req,res) =>{
    let user = await userModel.findOneAndDelete({username:"yash"});
    res.send(user);
})


