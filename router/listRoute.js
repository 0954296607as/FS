module.exports =(express, db)=>{
    const router=express.Router();
    
    router.get('/list',(req,res)=>{
        console.log(req.body);
        db.selectNameAllUsers()
        .then(v=>res.send(v))
        .catch(err=>console.log(err))
      
    });
    return router;
}