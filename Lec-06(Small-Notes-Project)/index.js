const express = require('express');
const path = require('path');
const app = express();

// Below two lines are parser so task 3 done (See readme for reference of task)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("index");
})

app.get("/profile/:username",function(req,res){

    res.send(`Profile page of ${req.params.username}`);
})

app.get("/about/:username/:age",function(req,res){

    res.send(`About page of ${req.params.username} of age ${req.params.age}`);
})

app.listen(3000,function(){
    console.log("its running");
    
})