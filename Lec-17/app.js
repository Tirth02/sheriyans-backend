const express = require("express");
const app = express();
const userModel = require("./models/user");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/",(req,res) => {
    res.render("index");
})
app.get("/login",isLoggedIn,(req,res) => {
    res.render("login");
})

app.get("/profile",isLoggedIn,(req,res)=>{
    res.render("profile");
})

app.post("/register",async (req,res) =>{
    let {email,password,username,name,age} = req.body;

    let user = await userModel.findOne({email});
    if(user) return res.status(500).send("User already registered");

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async (err,hash) =>{
            let user = await userModel.create({
                username,
                email,
                age,
                name,
                password:hash
            })
            let token = jwt.sign({email: email, userid: user._id},"shhhh");
            res.cookie("token",token);
            res.send("registered");
        })
    })
    

})



app.post("/login",async (req,res)=>{
    let {password,email} = req.body;
    let user = await userModel.findOne({email});
    if(!user) return res.status(500).send("Email or Password is not correct");

    bcrypt.compare(password,user.password,function(err,result){
        if(result)
        {
            let token = jwt.sign({email,userid:user._id},"shhhh");
            res.cookie("token",token);
            res.status(200).send("Successfully Logged in!!!");
        }
        else{
            res.send("Something went wrong!!");
        }
    })
})

app.get("/logout",async(req,res) => {
    res.cookie("token","");
    res.redirect("/login");
})

async function isLoggedIn(req,res,next){
    if(req.cookies.token === "") res.send("You must be logged in");
    else{
        let data = jwt.verify(req.cookies.token,"shhhh");
        let user = await userModel.findOne({email:data.email});
        req.user = user;
    }
    next();
}

app.listen(3000);