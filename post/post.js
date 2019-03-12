const post=require('emailjs');
class Post {
   constructor(){
      this.server = post.server.connect({
         user:    "0954296607as@ukr.net", 
         password:"0954296607", 
         host:    "smtp.ukr.net", 
         ssl:     true
      }); 
   }
   sendMail(mail, datas){
      return new Promise((res,rej)=>{
         this.server.send({
            text: datas,
            from:    "<0954296607as@ukr.net>",
            to: `<${mail}>`,
            subject: "registration"
         },(err,mesStack)=>{
            if(err){
               rej(err);
            }else{
               res(mesStack);
            }
         })   
      })
    }

}

  
/*server.send({
   text:    "i hope this works", 
   from:    "<0954296607as@ukr.net>", 
   to:      "<0954296607as@gmail.com>",
 //   cc:      "else <else@your-email.com>",
    subject: "testing"
 },function(err, message) { console.log(err || message); });
  */ 
module.exports=Post;

