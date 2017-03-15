'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('lootbag.sqlite');
const addToBag = (operation,toyName,Name)=>{

  db.run(`INSERT INTO Lootbag VALUES(null,"${Name}","${toyName}","good",1)`)
  return "Toy added to db"
};
module.exports= {addToBag };
