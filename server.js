const express= require ('express');
const server = express ();
const parser =require('body-parser');
const AppBase=require('./db/AppBase');
const db=new AppBase('./db/users.db');

server.use(parser());




server.use(express.static(__dirname+"/public"));

server.get("/list/", (req,res)=>{
    db.selectNameAllUsers()
        .then(v=>res.send(v))
        .catch(err=>console.log(err))
})

server.get("/", (req,res)=>res.send(index.html))


server.post('/registration/',(req,res)=>{
    console.log(req.body);
    res.send("all right");
});




server.listen(3000,(err)=>{
    if (err) throw Error ("ups");
    console.log("server on port 3000");
    
})
