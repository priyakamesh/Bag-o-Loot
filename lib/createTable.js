
'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('lootbag.sqlite',(wat)=>{console.log("Im connected",wat)});//db is the database object

db.run('CREATE TABLE IF NOT EXISTS Lootbag (BagId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,Name TEXT,Toy TEXT,TypeOfKid TEXT,Delivery INT)');
