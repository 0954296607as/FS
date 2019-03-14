module.exports =(express, db, mail)=>{
    const router=express.Router();
    router.post('/registration',(req,res)=>{
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
    return router;
}