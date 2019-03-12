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

server.post('/login/',(req,res)=>{
    console.log(req.body);
    db.isLogin(req.body.login, req.body.password)
        .then(v=>res.send((v)?"<h1>вошли</h1>":"<h1>неправильный парол или логин</h1>"))
})
server.post('/registration/',(req,res)=>{
    console.log(req.body);
    db.addUsers(req.body.login, req.body.name, req.body.surname, req.body.password,req.body.email)
        .then(value=>res.send((value)?"<h1>Вы зарегистрированны</h1>":"<h1>ПОльзователь с таким логинов уже существует</h1>"))

});




server.listen(3000,(err)=>{
    if (err) throw Error ("ups");
    console.log("server on port 3000");
    
})
