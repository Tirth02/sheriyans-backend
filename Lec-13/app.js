const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();
const bcrypt = require("bcrypt");

app.use(cookieParser());


app.get("/",(req,res)=>{
    // bcrypt.genSalt(10,function(err,salt){
    //     bcrypt.hash("polololo",salt,function(err,hash){
    //         console.log(hash);
    //     })
    // })
    bcrypt.compare("polololo","$2b$10$Xf0q.ov65Ojnib.Xl6ceZO1ZzBDPTUawTPmPfYidpXTJWw247rap.",function(err,result){
        console.log(result);
    })
    // res.cookie("name","tirth");
    // res.send("Done!!")
})
app.get("/read",(req,res)=>{
    console.log(req.cookies);    
    res.send("read page");
})

app.listen(3000);