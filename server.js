const express= require ('express');
const server = express ();
server.use(express.static(__dirname+"/public"));
server.get("/", (req,res)=>sendFile(index.html));


server.listen(3000,(err)=>{
    if (err) throw Error ("ups");
    console.log("server on port 3000");
    
})
