'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('lootbag.sqlite');
const removeBag = (operation,Name,toyName)=>{
  db.run(`DELETE FROM Lootbag WHERE Name = "${Name}" AND toy = "${toyName}"`)
  return "Toy is removed from db"
};
module.exports = {removeBag}
