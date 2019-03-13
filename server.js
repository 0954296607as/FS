const express= require ('express')
/*    list = require ('./routes/listRout'),
      login = require ('./routes/loginRout') 
*/
const server = express ();
const parser =require('body-parser');
/////////////////////////////////////
const AppBase=require('./db/AppBase');
const db=new AppBase('./db/users.db');
///////////////////////////////////
const Post=require('./post/post');
const mail=new Post();
//////////////////////////////////
server.use(parser());
server.use(parser.urlencoded({ extended: false }));
server.use(express.static(__dirname+"/public"));
server.set('view engine', 'ejs');
server.set('views','./views');


//All users on a list.
server.get("/list",(req,res)=>{
    db.selectNameAllUsers()
        .then(v=>res.send(v))
        .catch(err=>console.log(err))
});
//Admin
server.post('/admin',(req,res)=>{
    
})
//login
server.post('/login/',(req,res)=>{
    //console.log(req.body);
    db.isLogin(req.body.login, req.body.password)
        .then(v=>{
            console.log(v);
            if(v){
                res.render("admin",
                {
                    hello:`${v.name}`
                })
            }else{
                res.render("admin",{
                    title:"Административная панель",
                    hello:`Noname`,
                    root:`Вы не зарегистрированны`,
                    file:"nono"
                })
            }
        })
})
server.get("/", (req,res)=>res.send(index.html))
server.post('/registration/',(req,res)=>{
    //console.log(req.body);
    db.addUsers(req.body.login, req.body.name, req.body.surname, req.body.password,req.body.email)
        .then(value=>{
            res.send((value)?"<h1>Вы зарегистрированны, данные отправленны на почту</h1>":"<h1>ПОльзователь с таким логинов уже существует</h1>")
            if(value){
                mail.sendMail(req.body.email,`
                Логин - ${req.body.login},
                Имя - ${req.body.name},
                Фамилия - ${req.body.surname},
                Пароль - ${req.body.password}`)
               // .then(v=>console.log(v));
            }
        })
});




server.listen(3000,(err)=>{
    if (err) throw Error ("ups");
    console.log("server on port 3000");
    
})
