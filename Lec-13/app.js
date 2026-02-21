const cookieParser = require("cookie-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const bcrypt = require("bcrypt");

app.use(cookieParser());


app.get("/",(req,res)=>{

    let token = jwt.sign({email: "tirth@example.com"},"secret");
    res.cookie("token",token);
    console.log(token);
    res.send("Done");

    // bcrypt.genSalt(10,function(err,salt){
    //     bcrypt.hash("polololo",salt,function(err,hash){
    //         console.log(hash);
    //     })
    // })
    // bcrypt.compare("polololo","$2b$10$Xf0q.ov65Ojnib.Xl6ceZO1ZzBDPTUawTPmPfYidpXTJWw247rap.",function(err,result){
    //     console.log(result);
    // })
    // res.cookie("name","tirth");
    // res.send("Done!!")
})

app.get("/read",(req,res)=>{
    console.log(req.cookies.token);    
    res.send("read page");
})

app.get("/getData",(req,res) =>{
    let data = jwt.verify(req.cookies.token,"secret");
    res.send(data);
})

app.listen(3000);