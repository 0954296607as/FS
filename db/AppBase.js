const sqlite3 = require('sqlite3').verbose();
class AppBase {  
  constructor(dbPath) {
    this.db = new sqlite3.Database(dbPath, err => console.log(err || "connection"));
  }
  async run(sql, params=[]){
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

  async selectNameAllUsers(){
    const sql = `SELECT name FROM users`
    return await this.all(sql);
  }
}

module.exports = AppBase; 

