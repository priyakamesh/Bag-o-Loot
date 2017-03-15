'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('lootbag.sqlite');//db is the database object

const dropLootBag = ()=>{
db.run('DROP TABLE Lootbag')
}
dropLootBag();
