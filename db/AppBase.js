const sqlite3 = require('sqlite3').verbose();
class AppBase {  
  constructor(dbPath) {
    this.db = new sqlite3.Database(dbPath, err => console.log(err || "connection"));
  }
  run(sql, params=[]){
        return new Promise ((resolve,reject)=>{
            this.db.run(sql, params,(err)=>{
                if(err){
                    console.log("in run",err);
                    reject(err);
                }else{
                    resolve({name:"ok"});
                }
            })
        })
  } 
  all(sql,params=[]){
    return new Promise((resolve,reject)=>{
        this.db.all(sql,params,(err,rows)=>{
          if (err){
            console.log("in all",err);
            reject(err);
          }else{
            resolve(rows);
          }
        });
    });           
  }
  get(sql){
    return new Promise ((resolve,reject)=>{
      this.db.get(sql,(err,row)=>{
        if (err){
          console.log("in get",err);
          reject(err)
        }else{
          //console.log(row);
          resolve(row);
        }
      })
    })
  }

  async selectNameAllUsers(){
    const sql = `SELECT  login, name, surname FROM users`;
    return await this.all(sql);
  }
  //Check the login is existed (true =existed, false = not )
  async isLogin(login){
    const sql= `SELECT  FROM users WHERE login="${login}"`;
      try{
        return (await this.get(sql))? true: false;
      }catch(e){
        console.log(e);
        //throw new Error ("error was in is Login",e);
      }
  }
  //Registration (return true = user doesn`t exist, false = user exists)
  async addUsers(login, name, surname, password, email, picture_id=null){
    const params=[login, name, surname, password, email, picture_id];
    const sql=`INSERT INTO users (login, name, surname, password, email, picture_id) VALUES (?, ?, ?, ?, ?, ?)`;
    try{
      await this.run(sql,params);
      return true;
   }catch(e){
     return false
   }
   
  }
  

}

module.exports = AppBase; 

