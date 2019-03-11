const post=require('emailjs');
var server 	= post.server.connect({
    user:    "0954296607as@ukr.net", 
    password:"0954296607", 
    host:    "smtp.ukr.net", 
    ssl:     true
 });
  
 server.send({
    text:    "i hope this works", 
    from:    "<0954296607as@ukr.net>", 
    to:      "<0954296607as@gmail.com>",
 //   cc:      "else <else@your-email.com>",
    subject: "testing"
 }, function(err, message) { console.log(err || message); });

