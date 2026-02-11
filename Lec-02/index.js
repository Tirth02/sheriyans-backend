const fs = require('fs');
const http = require('http');
// fs.appendFile("hey.txt","mai to achaa hun",function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })

// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })

// fs.copyFile("hello.txt","./copy/chacha.txt",function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })

// fs.unlink("hello.txt",function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })

// fs.readFile("./copy/chacha.txt",'utf-8',function(err,data) {
//     if(err) console.error(err);
//     else console.log(data);
// })

const server = http.createServer(function(req,res){
    res.end("Hello World!!");
})

server.listen(3000);