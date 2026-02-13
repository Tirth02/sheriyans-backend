

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',function(req,res) {
    res.send('Hello World');
})

app.get("/profile",function(req,res){
    res.send("Profile Page of website");
})


app.listen(3000);