const express= require ('express')
const AppBase=require('./db/AppBase');
const db= new AppBase('./db/users.db');
const server = express ();
const parser =require('body-parser');
const router=express.Router();
///////////////////////////////////
const Post=require('./post/post');
const mail=new Post();
//////////////////////////////////

server.use(parser.json());
server.use(parser.urlencoded({ extended: false }));
server.use(express.static(__dirname+"/public"));
server.set('view engine', 'ejs');
server.set('views', __dirname+'/views');

//
const admin = require ('./router/admin.js')(express, db);
//
const registration = require('./router/registration')(express, db, mail);
server.use('/', registration);
//adminRouter
server.use("/", admin);

//All users on a list.
server.get("/list",(req,res)=>{
    db.selectNameAllUsers()
        .then(v=>res.send(v))
        .catch(err=>console.log(err))
});


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

server.listen(3000,(err)=>{
    if (err) throw Error ("ups");
    console.log("server on port 3000");
    
})
