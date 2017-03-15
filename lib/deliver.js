'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('lootbag.sqlite');

const deliver = (operation,Name)=>{
  return new Promise ((resolve,reject)=>{
    db.run(`UPDATE Lootbag SET Delivery = 1 WHERE Name="${Name}"`,(err,data)=>{
      if(err) return err
        console.log(data)
        resolve(data)
    })

  });
}

module.exports = { deliver }
