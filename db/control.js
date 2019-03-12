const AppBase=require('./AppBase');
const Postmodul=require('../post/post.js');
const Post=new Postmodul();

const db=new AppBase('./users.db');
/*db.selectNameAllUsers()
    .then(v=>v.forEach(element => {
        console.log(element);
    }))
    .catch(err=>console.log(err));
db.isLogin('ASAAA').then(v=>console.log(v));
*/
/*Post.sendMail("oksagen@krnet", [1,2,3])
    .catch(res=>console.log(res))
    .then(v=>console.log(v))

*/
/*db.addUsers("andy","ivan", "ivanov", "1234","095429@as.net")
    .then(v=>console.log("ок"))
    .catch(e=>"bad");
*/
db.selectNameAllUsers()
    .then(v=>v.forEach(element => {
        console.log(element);
    }))
    .catch(err=>console.log(err));

