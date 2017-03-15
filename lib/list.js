'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('lootbag.sqlite');

const list = (Delivery)=>{

  return new Promise ((resolve,reject)=>{
    db.all('SELECT Name FROM Lootbag WHERE Delivery <> 0',(err,data)=>{
      if (err) return(err)
      console.log("Name",data);
      resolve(data);
    })
  })
}
//List toys in the bag o' loot for a specific child.
const toyList = (operation,Name) => {
  return new Promise ((resolve,reject)=>{
    db.all(`SELECT Toy FROM Lootbag WHERE Name = "${Name}"`,(err,data)=>{
      if(err) return(err);
      console.log("result for list.js", data);
      resolve (data);
    });
  });
}
module.exports = {list,toyList};
