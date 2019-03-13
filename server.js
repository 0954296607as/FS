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
server.use(parser.json());
server.use(parser.urlencoded({ extended: false }));
server.use(express.static(__dirname+"/public"));
server.set('view engine', 'ejs');
server.set('views', __dirname+'/views');


//All users on a list.
server.get("/list",(req,res)=>{
    db.selectNameAllUsers()
        .then(v=>res.send(v))
        .catch(err=>console.log(err))
});
//Admin
server.get('/admin.html',(req,res)=>{
    db.isLogin(req.body.login, req.body.password)
    .then(v=>{
        //console.log(v);
        if(v!==undefined){
            if(v.admin==="true"){
                res.render("admin",{
                    title:"Административная панель",
                    root:`root`,
                    data: v
                });
            }else{
                res.render("admin",{
                    title:"Административная панель",
                    root:"user",
                    data:v
                });
            }
        }else{
            res.render("admin",{
                title:"Административная панель",
                root:undefined
            })
        }
    })
})

//login
server.post('/login',(req,res)=>{
    //console.log(req.body);
    db.isLogin(req.body.login, req.body.password)
        .then(v=>{
            //console.log(v);
            if(v!==undefined){
                if(v.admin==="true"){
                    res.render("admin",{
                        title:"Административная панель",
                        root:`root`,
                        data: v
                    });
                }else{
                    res.render("admin",{
                        title:"Административная панель",
                        root:"user",
                        data:v
                    });
                }
            }else{
                res.render("admin",{
                    title:"Административная панель",
                    root:undefined
                })
            }
        })
})
server.get("/", (req,res)=>res.send(index.html))
server.post('/registration',(req,res)=>{
    //console.log(req.body);
    db.addUser(req.body.login, req.body.name, req.body.surname, req.body.password,req.body.email)
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
