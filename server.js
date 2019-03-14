const express= require ('express')
const AppBase=require('./db/AppBase');
const db= new AppBase('./db/users.db');
const server = express ();
const parser =require('body-parser');
const router=express.Router();
//Подключение модуля отправки сообщений
const Post=require('./post/post');
const mail=new Post();
//////////////////////////////////
//Обрабокта мидел
server.use(parser.json());
server.use(parser.urlencoded({ extended: false }));
server.use(express.static(__dirname+"/public"));
//Установка движка шаблонизатора
server.set('view engine', 'ejs');
server.set('views', __dirname+'/views');

//Инициализация роутов
const admin = require ('./router/adminRoute.js')(express, db);
const registration = require('./router/registrationRoute')(express, db, mail);
const list =require ('./router/listRoute')(express, db);
//Подключение роутов
server.use('/', registration);
server.use("/", admin);
server.use("/", list);


//login
server.post('/login',(req,res)=>{
    //console.log(req.body);
    db.isLogin(req.body.login, req.body.password)
        .then(v=>{
            //console.log(v);
            if(v!==undefined){
                if(v.admin==="true"){
                    res.render("admin",{
                        root:`root`,
                        data: v
                    });
                }else{
                    res.render("admin",{
                        root:"user",
                        data:v
                    });
                }
            }else{
                res.render("admin",{
                    root:undefined
                })
            }
        })
})
server.get("/", (req,res)=>res.send(index.html))


server.listen(3000,(err)=>{
    if (err) throw Error ("ups");
    console.log("server on port 3000");
    
})
