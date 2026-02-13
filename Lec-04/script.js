

const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log("Middleware chala");
    next();
});

// There can be multiple middlewares
app.use(function(req,res,next){
    console.log("This is middleware part 2");
    next();
})

app.get('/',function(req,res) {
    res.send('Hello World');
})

app.get("/profile",function(req,res){
    res.send("Profile Page of website");
})

app.get("/about/:id",function(req,res){
    const userId = req.params.id;
    console.log(userId);
    if(userId > 0)
    {
        res.send("App works fine");
    }
    else
    {
        return next(new Error("Not impelemented"));
    }
    
})

// Error handling in backend
app.use((err,req,res,next) =>{
    console.error(err.stack);
    res.status(500).send("Something broke!");
})

app.listen(3000);
