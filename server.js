const express= require ('express');
const server = express ();
const parser =require('body-parser');

server.use(parser());




server.use(express.static(__dirname+"/public"));

server.get("/", (req,res)=>res.send(index.html))


server.post('/registration/',(req,res)=>{
    console.log(req.body);
    res.send("all right");
});




server.listen(3000,(err)=>{
    if (err) throw Error ("ups");
    console.log("server on port 3000");
    
})
