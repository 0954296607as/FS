
module.exports =(express, db)=>{
    const router=express.Router();
    router.get('/admin.html',(req,res)=>{
        res.render("admin",{
            root:undefined
        });
        
    });
    return router;
}